-- Наша Пошта v5.3 (2026-11-01): тижневий конкурс у категоріях
-- parcels — посилки (як було), clean — обслуговування гравцем без помилок,
-- rating — середня оцінка (мінімум 30 обслуговувань), speed — середній час обслуговування гравцем, с (мінімум 30).
alter table public.np_week_res add column if not exists clean int not null default 0;
alter table public.np_week_res add column if not exists served int not null default 0;
alter table public.np_week_res add column if not exists sat numeric(4,2) not null default 0;
alter table public.np_week_res add column if not exists spd numeric(6,1) not null default 0;

alter table public.np_week_claims add column if not exists cat text not null default 'parcels';
alter table public.np_week_claims drop constraint if exists np_week_claims_pkey;
alter table public.np_week_claims add primary key (player_id, wk, cat);

create or replace function public.np_save(p_id uuid, p_secret text, p_state text, p_build bigint, p_stats jsonb)
 returns text language plpgsql security definer set search_path to 'public' as $function$
declare cur bigint;
begin
  perform np_check(p_id, p_secret);
  if char_length(p_state) > 2000000 then raise exception 'save too big'; end if;
  select build into cur from np_saves where player_id = p_id;
  if cur is not null and cur > p_build then raise exception 'outdated game build'; end if;
  insert into np_saves (player_id, state, build, saved_at) values (p_id, p_state, p_build, now())
    on conflict (player_id) do update set state = excluded.state, build = excluded.build, saved_at = now();
  update np_players set
    branch = left(coalesce(nullif(btrim(p_stats->>'branch'),''), branch), 40),
    level = coalesce((p_stats->>'level')::int, level),
    rating = least(5, greatest(1, coalesce((p_stats->>'rating')::numeric, rating))),
    parcels = coalesce((p_stats->>'parcels')::bigint, parcels),
    money = coalesce((p_stats->>'money')::bigint, money),
    staff = coalesce((p_stats->>'staff')::int, staff),
    days = coalesce((p_stats->>'days')::int, days),
    rank = least(3, greatest(0, coalesce((p_stats->>'rank')::int, rank))),
    hall = case when jsonb_typeof(p_stats->'hall') = 'object' and length((p_stats->'hall')::text) < 4000 then p_stats->'hall' else hall end,
    last_seen = now()
  where id = p_id;
  if p_stats->>'wk' = np_cur_wk() and (p_stats->>'wk_parcels') is not null then
    insert into np_week_res (wk, player_id, parcels, clean, served, sat, spd) values (np_cur_wk(), p_id,
      greatest(0, least(100000, (p_stats->>'wk_parcels')::bigint)),
      greatest(0, least(100000, coalesce((p_stats->>'wk_clean')::int, 0))),
      greatest(0, least(100000, coalesce((p_stats->>'wk_served')::int, 0))),
      greatest(0, least(5, coalesce((p_stats->>'wk_sat')::numeric, 0))),
      greatest(0, least(9999, coalesce((p_stats->>'wk_spd')::numeric, 0))))
      on conflict (wk, player_id) do update set parcels = excluded.parcels, clean = excluded.clean, served = excluded.served, sat = excluded.sat, spd = excluded.spd;
  end if;
  return 'ok';
end $function$;

drop function if exists public.np_week_top();
drop function if exists public.np_week_top(text);
create function public.np_week_top(p_cat text default 'parcels')
 returns table(wk text, player_id uuid, nickname text, branch text, parcels bigint, val numeric)
 language sql stable security definer set search_path to 'public' as $function$
  select w.wk, w.player_id, p.nickname, p.branch, w.parcels,
    case p_cat when 'clean' then w.clean::numeric when 'rating' then w.sat when 'speed' then w.spd else w.parcels::numeric end
  from np_week_res w join np_players p on p.id = w.player_id
  where w.wk = np_cur_wk() and case p_cat
    when 'clean' then w.clean > 0
    when 'rating' then w.served >= 30
    when 'speed' then w.served >= 30 and w.spd > 0
    else w.parcels > 0 end
  order by case when p_cat = 'speed' then w.spd end asc,
    case p_cat when 'clean' then w.clean::numeric when 'rating' then w.sat when 'speed' then 0 else w.parcels::numeric end desc
  limit 50 $function$;
grant execute on function public.np_week_top(text) to anon, authenticated;

create or replace function public.np_week_claim(p_id uuid, p_secret text)
 returns jsonb language plpgsql security definer set search_path to 'public' as $function$
declare r record; c text; pl int; tot int;
begin
  perform np_check(p_id, p_secret);
  for r in select w.* from np_week_res w where w.player_id = p_id and w.wk < np_cur_wk() order by w.wk desc limit 3 loop
    foreach c in array array['parcels','clean','rating','speed'] loop
      if exists (select 1 from np_week_claims x where x.player_id = p_id and x.wk = r.wk and x.cat = c) then continue; end if;
      if c = 'parcels' and r.parcels <= 0 then continue; end if;
      if c = 'clean' and r.clean <= 0 then continue; end if;
      if c in ('rating','speed') and r.served < 30 then continue; end if;
      if c = 'speed' and r.spd <= 0 then continue; end if;
      select t.place, t.n into pl, tot from (
        select x.player_id,
          rank() over (order by case c when 'parcels' then x.parcels::numeric when 'clean' then x.clean::numeric when 'rating' then x.sat else -x.spd end desc) as place,
          count(*) over () as n
        from np_week_res x where x.wk = r.wk and case c when 'parcels' then x.parcels > 0 when 'clean' then x.clean > 0 when 'rating' then x.served >= 30 else x.served >= 30 and x.spd > 0 end
      ) t where t.player_id = p_id;
      insert into np_week_claims (player_id, wk, place, cat) values (p_id, r.wk, pl, c);
      return jsonb_build_object('wk', r.wk, 'place', pl, 'total', tot, 'cat', c);
    end loop;
  end loop;
  return null;
end $function$;
