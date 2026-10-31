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
