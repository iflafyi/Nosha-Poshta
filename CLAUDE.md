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

## Deploy
```
python3 build.py && git add -A && git commit -m "..." && git push origin main
```

## Backend: Supabase project `nsdjlohfagslhfaygstp` (shared with the cat shelter game; this game uses only `np_*`)
- Tables: `np_players` (leaderboard stats, last_seen), `np_secrets` (sha256 of player secret), `np_saves` (state JSON + build), `np_chat`, `np_admins` (empty for now — put owner's player id there for future dev tools).
- All access via SECURITY DEFINER RPCs: `np_register(nick, branch, secret)`, `np_save(id, secret, state, build, stats)` (rejects older build → client reloads), `np_load`, `np_ping`, `np_top(sort)`, `np_chat_send`, `np_chat_recent(after)`. Client calls them with plain fetch (`rpc()`), only `apikey` header.
- Realtime broadcast channel `np-chat` (event `m`) for instant chat; polling as fallback.
- Save code in Settings = `NP-` + base64({i: player id, s: secret}) to move to another device.

## Game model (quick map)
- Save `G` (localStorage `np-save-v1`, cloud every 60 s / day end / tab hidden). New fields: add to `newGame()`; `migrate()` fills them in old saves.
- Day: 08:00–20:00, `MIN_PER_SEC` = 1.8 game minutes per real second, speed ×1/×2/×3. Trucks: 08:00 and 13:00 bring parcels (`truckArrive('m'|'d')`), 18:00 takes outgoing ('e'). `endDay()` pays salaries, finishes training, returns parcels stored ≥5 days, shows summary; night = management.
- Parcel states: truck → pile → cell → (issued, removed); outgoing → loaded → (gone with evening truck). Cells: small racks `1-01…` (cap 3, sizes Конверт/S/M), `Г-01…` габарит (cap 2, L/XL). `targetCell()` picks the cell.
- Clients `G.queue`: kind get/send, patience bar; player serving = `FLOW` (not saved): get = phone search → fetch from cell → pay (card / cash with change) → give; send = per item pack (+bubble wrap for fragile) → weigh → city, then pay → print TTN.
- Regulars `REGS` (unlock by level, hearts 0–5 raise tips), staff (roles issue/accept/store/rest, lvl 1–5, training costs 400×lvl, front staff need windows), upgrades `UPS` (start, costs, need level).
- Rendering: full `render()` on `dirty`, postponed while a pointer is down so taps aren't lost; `liveUpdate()` updates clock/patience bars.

## Ideas for later (owner wants to keep improving)
Dev panel for the owner, visiting other branches, events (holidays rush), returns/огляд посилки, poshtomat refill mini-game, achievements, sounds/music, PWA install.
