-- Наша Пошта: онлайн-бекенд (Supabase, проєкт nsdjlohfagslhfaygstp). Знімок для довідки — правда в живій БД.
create table if not exists public.np_players (
  id uuid primary key default gen_random_uuid(), nickname text not null, branch text not null default 'Відділення №1',
  level int not null default 1, rating numeric(3,2) not null default 3.00, parcels bigint not null default 0,
  money bigint not null default 0, staff int not null default 0, days int not null default 0,
  last_seen timestamptz not null default now(), created_at timestamptz not null default now());
create unique index if not exists np_players_nick_uq on public.np_players (lower(nickname));
create table if not exists public.np_secrets (id uuid primary key references public.np_players(id) on delete cascade, secret_hash text not null);
create table if not exists public.np_saves (player_id uuid primary key references public.np_players(id) on delete cascade, state text not null, build bigint not null default 0, saved_at timestamptz not null default now());
create table if not exists public.np_chat (id bigserial primary key, at timestamptz not null default now(), from_id uuid not null, nick text not null, body text not null, active boolean not null default true);
create table if not exists public.np_admins (id uuid primary key);
-- RLS увімкнено на всіх np_* без політик: доступ тільки через SECURITY DEFINER функції нижче.
-- Функції: np_check(id, secret), np_register(nick, branch, secret), np_save(id, secret, state, build, stats),
-- np_load(id, secret), np_ping(id, secret), np_top(sort), np_chat_send(id, secret, body), np_chat_recent(after).
-- Повні визначення: select pg_get_functiondef(oid) from pg_proc where proname like 'np\_%';

-- v2 (2026-10-31): відгуки, подарунки, тижневий конкурс, оголошення, глобальні події, адмін-панель
-- np_players: + hall jsonb (оформлення залу, значки — бачать гості), + rank int (посада 0..3)
-- np_reviews(to_id, from_id, from_nick, stars 1..5, body, at)  PK(to_id, from_id)
-- np_gifts(id, from_id, from_nick, to_id, item, note, at, claimed)  item: coffee|plant|money|cake|flowers|toy або dev:money:N / dev:xp:N
-- np_week_res(wk 'IYYY-IW' UTC, player_id, parcels)  — пише np_save з p_stats.wk / wk_parcels
-- np_week_claims(player_id, wk, place)
-- np_announce(id, at, body, active);  np_global(k event|weather|insp|outage, v, until)
-- np_admins: власник (Демчак Дмитро) 8ea1caa6-a072-4e4d-ab69-4de31a1ca816
-- Функції: np_cur_wk(), np_top(sort) (+rank, hall, rev_avg, rev_n), np_reviews_for(to), np_review(id,secret,to,stars,body),
--   np_gift_send(id,secret,to,item,note) (≤10/добу), np_gifts_pull(id,secret), np_week_top(), np_week_claim(id,secret),
--   np_announce_recent(after), np_global_get(),
--   адмін (перевіряють np_admins через np_is_admin): np_admin_announce, np_admin_ann_off, np_admin_global(k,v,hours),
--   np_admin_gift(to|null=всім, 'dev:money:N'|'dev:xp:N', note), np_admin_stats, np_admin_chat_del(msg)
-- v5 (2026-11-01): тижневі категорії — див. sql/week_cats.sql
