-- Наша Пошта: акаунти (пошта + пароль) і сесії пристроїв.
-- Запустити один раз у Supabase → SQL Editor (проєкт nsdjlohfagslhfaygstp).

create table if not exists public.np_accounts (
  email text primary key,
  player_id uuid not null unique references public.np_players(id) on delete cascade,
  pass_hash text not null,
  fails int not null default 0,
  locked_until timestamptz,
  created_at timestamptz not null default now()
);
create table if not exists public.np_sessions (
  secret_hash text primary key,
  player_id uuid not null references public.np_players(id) on delete cascade,
  created_at timestamptz not null default now()
);
create index if not exists np_sessions_player on public.np_sessions(player_id);
alter table public.np_accounts enable row level security;
alter table public.np_sessions enable row level security;
revoke all on public.np_accounts, public.np_sessions from anon, authenticated;

create or replace function public.np_check(p_id uuid, p_secret text)
 returns text language plpgsql stable security definer set search_path to 'public' as $$
declare nick text; h text := encode(sha256(convert_to(coalesce(p_secret,''), 'UTF8')), 'hex');
begin
  select p.nickname into nick from np_players p where p.id = p_id and (
    exists (select 1 from np_secrets s where s.id = p.id and s.secret_hash = h)
    or exists (select 1 from np_sessions x where x.player_id = p.id and x.secret_hash = h));
  if nick is null then raise exception 'not your player'; end if;
  return nick;
end $$;

create or replace function public.np_acc_norm(p_email text) returns text language plpgsql immutable as $$
declare e text := lower(btrim(coalesce(p_email,'')));
begin
  if char_length(e) > 120 or e !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'bad email'; end if;
  return e;
end $$;

create or replace function public.np_acc_pwcheck(p_pass text) returns void language plpgsql immutable as $$
begin if char_length(coalesce(p_pass,'')) < 6 or char_length(p_pass) > 72 then raise exception 'bad password'; end if; end $$;

create or replace function public.np_acc_link(p_id uuid, p_secret text, p_email text, p_pass text)
 returns text language plpgsql security definer set search_path to 'public', 'extensions' as $$
declare e text := np_acc_norm(p_email);
begin
  perform np_check(p_id, p_secret);
  perform np_acc_pwcheck(p_pass);
  if exists (select 1 from np_accounts where player_id = p_id) then raise exception 'already linked'; end if;
  if exists (select 1 from np_accounts where email = e) then raise exception 'email taken'; end if;
  insert into np_accounts (email, player_id, pass_hash) values (e, p_id, crypt(p_pass, gen_salt('bf', 8)));
  return e;
end $$;

create or replace function public.np_acc_register(p_nick text, p_branch text, p_email text, p_pass text)
 returns jsonb language plpgsql security definer set search_path to 'public', 'extensions' as $$
declare e text := np_acc_norm(p_email); sec text := encode(gen_random_bytes(24), 'hex'); nid uuid;
begin
  perform np_acc_pwcheck(p_pass);
  if exists (select 1 from np_accounts where email = e) then raise exception 'email taken'; end if;
  nid := np_register(p_nick, p_branch, sec);
  insert into np_accounts (email, player_id, pass_hash) values (e, nid, crypt(p_pass, gen_salt('bf', 8)));
  return jsonb_build_object('id', nid, 'secret', sec, 'email', e);
end $$;

create or replace function public.np_acc_login(p_email text, p_pass text)
 returns jsonb language plpgsql security definer set search_path to 'public', 'extensions' as $$
declare e text := lower(btrim(coalesce(p_email,''))); a np_accounts%rowtype; sec text; nick text;
begin
  select * into a from np_accounts where email = e;
  if not found then perform pg_sleep(0.3); raise exception 'wrong login'; end if;
  if a.locked_until is not null and a.locked_until > now() then raise exception 'locked'; end if;
  if a.pass_hash <> crypt(coalesce(p_pass,''), a.pass_hash) then
    update np_accounts set
      locked_until = case when fails + 1 >= 5 then now() + interval '10 minutes' else null end,
      fails = case when fails + 1 >= 5 then 0 else fails + 1 end
    where email = e;
    raise exception 'wrong login';
  end if;
  update np_accounts set fails = 0, locked_until = null where email = e;
  sec := encode(gen_random_bytes(24), 'hex');
  insert into np_sessions (secret_hash, player_id) values (encode(sha256(convert_to(sec, 'UTF8')), 'hex'), a.player_id);
  delete from np_sessions where player_id = a.player_id and secret_hash in (
    select secret_hash from np_sessions where player_id = a.player_id order by created_at desc offset 20);
  select nickname into nick from np_players where id = a.player_id;
  return jsonb_build_object('id', a.player_id, 'secret', sec, 'email', e, 'nick', nick);
end $$;

create or replace function public.np_acc_info(p_id uuid, p_secret text)
 returns text language plpgsql stable security definer set search_path to 'public' as $$
begin perform np_check(p_id, p_secret); return (select email from np_accounts where player_id = p_id); end $$;

create or replace function public.np_acc_logout(p_id uuid, p_secret text)
 returns void language plpgsql security definer set search_path to 'public' as $$
begin
  perform np_check(p_id, p_secret);
  delete from np_sessions where player_id = p_id and secret_hash = encode(sha256(convert_to(p_secret, 'UTF8')), 'hex');
end $$;

create or replace function public.np_acc_pass(p_id uuid, p_secret text, p_old text, p_new text)
 returns void language plpgsql security definer set search_path to 'public', 'extensions' as $$
declare a np_accounts%rowtype;
begin
  perform np_check(p_id, p_secret);
  perform np_acc_pwcheck(p_new);
  select * into a from np_accounts where player_id = p_id;
  if not found then raise exception 'no account'; end if;
  if a.pass_hash <> crypt(coalesce(p_old,''), a.pass_hash) then raise exception 'wrong password'; end if;
  update np_accounts set pass_hash = crypt(p_new, gen_salt('bf', 8)) where player_id = p_id;
end $$;

create or replace function public.np_admin_acc_reset(p_id uuid, p_secret text, p_player uuid, p_pass text)
 returns text language plpgsql security definer set search_path to 'public', 'extensions' as $$
declare e text;
begin
  perform np_is_admin(p_id, p_secret);
  perform np_acc_pwcheck(p_pass);
  update np_accounts set pass_hash = crypt(p_pass, gen_salt('bf', 8)), fails = 0, locked_until = null where player_id = p_player returning email into e;
  if e is null then raise exception 'no account'; end if;
  delete from np_sessions where player_id = p_player;
  return e;
end $$;

revoke execute on function public.np_acc_norm(text), public.np_acc_pwcheck(text) from anon, authenticated, public;
