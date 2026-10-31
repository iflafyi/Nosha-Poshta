# Наша Пошта — notes for Claude

Browser game: simulator of a parcel branch, inspired by the owner's nostalgia for his old job as a branch operator at a Ukrainian parcel company. Original name «Наша Пошта» — do not use the real company's logo/branding.
Owner: GitHub `iflafyi`. Talk to him in Ukrainian. Live site: https://iflafyi.github.io/Nosha-Poshta/ (GitHub Pages from `main`, repo root).

## Owner's preferences
- Deploy straight to the site (commit + push to `main`), no test copies in chat.
- Bundle requested features into one update when possible.
- When the chat gets long, tell him to open a new chat; before switching, update this file.
- Short summaries at the end.

## Layout
- `index.html` — the whole game (HTML + CSS + one script). Edit it directly.
- `build.py [BUILD_ID]` — stamps `GAME_BUILD` in index.html and writes `version.json` (players get an "update available" bar). Run before every deploy.
- `config.js` — Supabase URL + publishable key.
- `sql/schema.sql` — snapshot of the online backend (reference; live DB is the truth).
- PWA: `manifest.webmanifest`, `sw.js` (network-first, cache fallback; never caches Supabase or version.json), `icon-192/512.png`, `apple-touch-icon.png`.

## Deploy
```
python3 build.py && git add -A && git commit -m "..." && git push origin main
```

## Backend: Supabase project `nsdjlohfagslhfaygstp` (shared with the cat shelter game; this game uses only `np_*`)
- Tables: `np_players` (leaderboard stats, last_seen, `hall` jsonb shown to visitors, `rank`), `np_secrets` (sha256 of player secret), `np_saves` (state JSON + build), `np_chat`, `np_admins` (owner «Демчак Дмитро» `8ea1caa6-a072-4e4d-ab69-4de31a1ca816`), `np_reviews`, `np_gifts`, `np_week_res`/`np_week_claims` (weekly contest, ISO week UTC), `np_announce`, `np_global` (event/weather/insp/outage set by dev).
- All access via SECURITY DEFINER RPCs: `np_register(nick, branch, secret)`, `np_save(id, secret, state, build, stats)` (rejects older build → client reloads), `np_load`, `np_ping`, `np_top(sort)`, `np_chat_send`, `np_chat_recent(after)`. Client calls them with plain fetch (`rpc()`), only `apikey` header.
- v2 RPCs: `np_top` (+rank, hall, rev_avg, rev_n), `np_reviews_for`, `np_review`, `np_gift_send` (≤10/day), `np_gifts_pull`, `np_week_top`, `np_week_claim`, `np_announce_recent`, `np_global_get`; admin (`np_is_admin` check): `np_admin_announce`, `np_admin_ann_off`, `np_admin_global`, `np_admin_gift` (`dev:money:N`/`dev:xp:N`, to one or all), `np_admin_stats`, `np_admin_chat_del`. `np_load` returns `admin` → dev panel tab «🛠 Розробник» in Онлайн.
- Realtime broadcast channel `np-chat` (event `m`) for instant chat; polling as fallback.
- Save code in Settings = `NP-` + base64({i: player id, s: secret}) to move to another device.

## Game model (quick map)
- Save `G` (localStorage `np-save-v1`, cloud every 60 s / day end / tab hidden). New fields: add to `newGame()`; `migrate()` fills them in old saves.
- Day: 08:00–20:00, `MIN_PER_SEC` = 1.8 game minutes per real second, speed ×1/×2/×3. Trucks: 08:00 and 13:00 bring parcels (`truckArrive('m'|'d')`), 18:00 takes outgoing ('e'). `endDay()` pays salaries, finishes training, returns parcels stored ≥5 days, shows summary; night = management.
- Parcel states: truck → pile → cell → (issued, removed); outgoing → loaded → (gone with evening truck). Cells: small racks `1-01…` (cap 3, sizes Конверт/S/M), `Г-01…` габарит (cap 2, L/XL). `targetCell()` picks the cell.
- Clients `G.queue`: kind get/send, patience bar; player serving = `FLOW` (not saved): get = phone search → fetch from cell → pay (card / cash with change) → give; send = per item pack (+bubble wrap for fragile) → weigh → city, then pay → print TTN.
- Regulars `REGS` (unlock by level, hearts 0–5 raise tips), staff (roles issue/accept/store/rest, lvl 1–5, training costs 400×lvl, front staff need windows), upgrades `UPS` (start, costs, need level).
- Rendering: full `render()` on `dirty`, postponed while a pointer is down so taps aren't lost; `liveUpdate()` updates clock/patience bars.
- Counter situations (get clients, `specialGet`): `c.inspect` (open before paying → refuse → `returnParcel` to sender), `c.redir` (city/person/back → `redirectParcel`, fee `REDIR_FEE`), `c.proxy` (doc/app legit vs noDoc/wrongName/expired fraud), `p.lost` (cell empty → search grid). Get steps from `getSteps(c)`; send items with `val` (from `ITEMS[].v`) get a 'value' step + `valFee`.
- Barcode scanner: `bcHTML(code, scanAct, id)` + hold/hover ~0.35 s → `act(scanAct)`. Used for pile take, cell contents (`pickscan`), client app code (`appscan`).
- Day events (`rollDay`): `EVENTS` every 7th day (`EV_CYCLE` by day%28) + random sale, eve = queue to door; `WEATHER` flow multiplier; inspection `G.insp` (scores clean/speed/errors, bonus); outage `G.outage` → `manualMode()` (paper journal, no scanner/cards, flashlight overlay `#dark`), `UPS.gen`. Hall dirt `G.dirt` + 🧹 clean; store staff clean when idle.
- Progression: `G.tasks` (3/day from `TASK_T`, `countTask(k, n, set)`), `ACH` + `checkAch()`, `RANKS`/`G.rank` (promote in «Кар’єра» tab, daily bonus), extra branches `G.others` (snapshots of `BR_KEYS`, switch at night, auto-sim in `simOthers()` at day end), decor `G.decor` (`WALLS`, `DECOR` give patience/sat/tips), staff `traits`/`mood`/`fat` (`staffMul`), 💵 bonus.
- Online extras: visits (`showPlayer`: hall preview + reviews + 🎁), gifts arrive as parcels named after the player → special client 🙋 → `giftResult`/`applyGift`; weekly contest (`weekParcels`, claim on boot → badge in `G.badges`); announcements (`G.seenAnn`); globals (`NET.gev`, `NET.gweather`, insp/outage flags).
- Atmosphere: animated hall `#scene` (persistent element re-attached into `#sceneSlot`, `updScene()` every tick), sounds `sDoor`, `sPrinter`, `sayNext` (speechSynthesis uk), ambient noise (`AMB`), settings toggles sound/ambient/voice.

## Status / next steps
- v1 released 2026-10-31 (build 202610311910): full day loop, regulars, staff, upgrades, online (register, cloud save, leaderboard, chat). Owner liked it.
- v2 released 2026-10-31 in 5 deploys: all 22 ideas from `IDEAS.md` implemented (counter situations + scanner, events/weather/inspection/outage, tasks/achievements/career/branches/decor/staff traits, visits/gifts/weekly contest/dev panel, animated hall/sounds/PWA).
- Next: ask the owner for feedback and real situations from his operator job to turn into mechanics; balance (event frequency, rank requirements, branch income) may need tuning after he plays.
- Test locally: `python3 -m http.server` in the repo + Playwright; block `supabase.co` in tests (or delete test players from `np_players`/`np_chat` afterwards).
