// Наша Пошта — 3D зал відділення (Three.js).
// Збирається в ../hall3d.js командою: npx esbuild src/hall3d.js --bundle --minify --format=iife --outfile=hall3d.js
// Гра спілкується з цим модулем через window.NP3 (міст у index.html) і викликає window.Hall3D.mount/sync/reset/dispose.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, HemisphereLight, DirectionalLight, PointLight,
  BoxGeometry, CylinderGeometry, PlaneGeometry, CircleGeometry, ConeGeometry, CapsuleGeometry, SphereGeometry, TorusGeometry,
  MeshLambertMaterial, MeshBasicMaterial, Mesh, Group, Sprite, SpriteMaterial, CanvasTexture, InstancedMesh, Object3D,
  Raycaster, Vector2, Vector3, RepeatWrapping, SRGBColorSpace, BufferGeometry, Float32BufferAttribute, Points, PointsMaterial
} from 'three';

const B = () => window.NP3;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
let R = null;

/* ---------- розмітка відділення ---------- */
const WX = i => -5.2 + (i - 1) * 2.3;      // x віконця i (1..5; 5-те — після розширення)
const SERVE_Z = -0.8, OP_Z = -2.4;
const DOOR = {x: 7, z: 1.5};
const DOOR_IN = [6.0, 1.5], STREET = 8.4;
const RACK_X = i => -5.25 + i * 1.75;       // стелажі вздовж задньої стіни
const SHELF_Y = [0.19, 0.74, 1.29, 1.84];
const SLOT_X = [-0.57, -0.19, 0.19, 0.57];
const CHAIR = j => [-6.25, -0.1 + j * 0.5];
const CHAIR2 = j => [-4.6 + j * 0.75, 4.15];   // друга зала: ряд крісел біля вітрини
// підсобка за залом
const BACK_Z = -4.6, BACK_END = -11.2;
const DOOR_BACK = 6.2;                      // прохід зал ↔ склад (x)
const GATE_Z = -7.9;                        // ворота рампи (z) у правій стіні
const PILE = [5.6, -6.3], OUTCART = [5.6, -9.5];
const TRUCK_DOCK = 9.25, TRUCK_AWAY = 19;
const KITCHEN_DOOR = [-4.6, -7.6], WC_DOOR = [-2.0, -9.0];
const inKitchen = (x, z) => x < -3.85 && z < -7.6;
const inWC = (x, z) => x > -3.8 && x < -1.4 && z < -9.0;

/* ---------- кеші ---------- */
const cache = new Map();
const cached = (k, f) => { let v = cache.get(k); if (!v){ v = f(); cache.set(k, v); } return v; };
const boxG = (w, h, d) => cached(`b${w},${h},${d}`, () => new BoxGeometry(w, h, d));
const lam = (c, o) => cached(`m${c}${o ? JSON.stringify(o) : ''}`, () => new MeshLambertMaterial({color: c, ...(o || {})}));
function mesh(geo, mat, x = 0, y = 0, z = 0, parent){ const m = new Mesh(geo, mat); m.position.set(x, y, z); (parent || R.scene).add(m); return m; }
function blk(w, h, d, c, x, y0, z, parent, o){ return mesh(boxG(w, h, d), lam(c, o), x, y0 + h / 2, z, parent); }

function canvasTex(w, h, draw){
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d'); draw(ctx, w, h);
  const t = new CanvasTexture(cv); t.colorSpace = SRGBColorSpace; t.anisotropy = 4; return t;
}
const EMOJI_FONT = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Twemoji Mozilla",sans-serif';
function emojiTex(e){
  return cached('e' + e, () => canvasTex(128, 128, (c) => {
    c.font = `96px ${EMOJI_FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(e, 64, 70);
  }));
}
function emojiSprite(e, s){
  const sp = new Sprite(new SpriteMaterial({map: emojiTex(e), transparent: true, alphaTest: 0.1}));
  sp.scale.set(s, s, s); return sp;
}
function setEmoji(sp, e){ if (sp._e !== e){ sp._e = e; sp.material.map = emojiTex(e); sp.material.needsUpdate = true; } }
function rr(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function plateTex(text, {w = 512, h = 128, bg = '#d7262b', fg = '#fff', font = 'bold 60px system-ui,sans-serif', r = 18, border} = {}){
  return cached(`t${text}${w}${bg}${fg}${font}`, () => canvasTex(w, h, (c) => {
    c.fillStyle = bg; rr(c, 2, 2, w - 4, h - 4, r); c.fill();
    if (border){ c.lineWidth = 6; c.strokeStyle = border; c.stroke(); }
    c.fillStyle = fg; c.font = font; c.textAlign = 'center'; c.textBaseline = 'middle';
    const ls = String(text).split('\n'), lh = h / (ls.length + 0.6);
    ls.forEach((l, i) => c.fillText(l, w / 2, h / 2 + (i - (ls.length - 1) / 2) * lh));
  }));
}
function plane(w, h, tex, x, y, z, ry = 0, parent){
  const m = new Mesh(new PlaneGeometry(w, h), new MeshLambertMaterial({map: tex, transparent: true}));
  m.position.set(x, y, z); m.rotation.y = ry; (parent || R.scene).add(m); return m;
}
// детермінований рандом
function rng(seed){ let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
function hash(str){ let h = 2166136261; for (const ch of String(str)) h = Math.imul(h ^ ch.codePointAt(0), 16777619); return h >>> 0; }

/* ---------- кімната ---------- */
function buildRoom(){
  const S = R.scene;
  // плита-основа діорами
  blk(22.4, 0.5, 17.6, 0x4a3b2e, 3.3, -0.53, -3.4);
  // підлога-плитка
  const ft = canvasTex(128, 128, (c) => {
    c.fillStyle = '#e9e1d3'; c.fillRect(0, 0, 128, 128);
    c.fillStyle = '#ddd3c2'; c.fillRect(0, 0, 64, 64); c.fillRect(64, 64, 64, 64);
    c.strokeStyle = '#c9bea9'; c.lineWidth = 2; c.strokeRect(0, 0, 64, 64); c.strokeRect(64, 64, 64, 64); c.strokeRect(64, 0, 64, 64); c.strokeRect(0, 64, 64, 64);
  });
  ft.wrapS = ft.wrapT = RepeatWrapping; ft.repeat.set(14, 9);
  const fl = new Mesh(new PlaneGeometry(14, 9), new MeshLambertMaterial({map: ft})); fl.rotation.x = -Math.PI / 2; S.add(fl);
  // службова зона (сіра підлога)
  const sz = new Mesh(new PlaneGeometry(14, 2.9), lam(0xc8c2b8)); sz.rotation.x = -Math.PI / 2; sz.position.set(0, 0.004, -3.05); S.add(sz);
  // вулиця за дверима
  R.street = new Mesh(new PlaneGeometry(2.6, 10.4), new MeshLambertMaterial({color: 0x9a9a96})); R.street.rotation.x = -Math.PI / 2; R.street.position.set(8.5, 0.002, 0); S.add(R.street);
  for (let z = -4.6; z < 5; z += 1.3) blk(0.12, 0.02, 0.6, 0xe8e8e0, 9.55, 0, z);
  blk(0.25, 0.14, 10.4, 0x7d7d78, 9.75, 0, 0); // бордюр
  // стіни
  R.wallMat = new MeshLambertMaterial({color: 0xf1eee9});
  const wm = R.wallMat, H = 3.1, top = lam(0x3b2f26);
  const wall = (w, h, d, x, y0, z) => { mesh(boxG(w, h, d), wm, x, y0 + h / 2, z); mesh(boxG(w + 0.01, 0.04, d + 0.01), top, x, y0 + h + 0.02, z); };
  R.sep = new Group(); S.add(R.sep);
  const sepWall = (w, h, d, x, y0, z) => { mesh(boxG(w, h, d), wm, x, y0 + h / 2, z, R.sep); mesh(boxG(w + 0.01, 0.04, d + 0.01), top, x, y0 + h + 0.02, z, R.sep); };
  sepWall(12.8, H, 0.2, -0.8, 0, -4.6);
  sepWall(0.5, H, 0.2, 6.95, 0, -4.6);
  mesh(boxG(1.0, H - 2.3, 0.2), wm, DOOR_BACK, 2.3 + (H - 2.3) / 2, -4.6, R.sep);
  blk(1.04, 0.08, 0.26, 0x8f9aa3, DOOR_BACK, 2.22, -4.6, R.sep);
  plane(0.9, 0.2, plateTex('СКЛАД', {w: 256, h: 56, bg: '#1f3a5f', font: 'bold 38px system-ui,sans-serif', r: 8}), DOOR_BACK, 2.48, -4.48, 0, R.sep);
  wall(0.2, H, 9.2, -7.1, 0, 0);
  wall(0.2, H, 5.4, 7.1, 0, -1.9);          // права стіна до дверей
  wall(0.2, H, 2.3, 7.1, 0, 3.35);          // після дверей
  mesh(boxG(0.2, H - 2.35, 1.4), wm, 7.1, 2.35 + (H - 2.35) / 2, 1.5); // над дверима
  // червона смуга і плінтус
  const red = lam(0xd7262b), base = lam(0x6b5444);
  for (const [w, d, x, z] of [[12.7, 0.04, -0.85, -4.48], [0.04, 9, -6.98, 0], [0.04, 5.4, 6.98, -1.9], [0.04, 2.3, 6.98, 3.35]]){
    mesh(boxG(w, 0.14, d), red, x, 1.0, z, z === -4.48 ? R.sep : null); mesh(boxG(w, 0.12, d), base, x, 0.06, z, z === -4.48 ? R.sep : null);
  }
  // вивіска
  const sign = canvasTex(1024, 200, (c) => {
    c.fillStyle = '#fff'; rr(c, 4, 4, 1016, 192, 30); c.fill();
    c.fillStyle = '#d7262b'; rr(c, 24, 24, 152, 152, 22); c.fill();
    c.fillStyle = '#fff'; c.font = 'bold 84px system-ui,sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('НП', 100, 104);
    c.fillStyle = '#d7262b'; c.font = 'bold 104px system-ui,sans-serif'; c.textAlign = 'left'; c.fillText('НАША ПОШТА', 210, 106);
  });
  R.signMesh = plane(4.2, 0.82, sign, -0.4, 2.62, -4.48, 0, R.sep);
  R.tierText = plane(2.4, 0.3, plateTex('', {w: 512, h: 64}), -0.4, 2.05, -4.48, 0, R.sep); R.tierText.visible = false;
  // двері (розсувні)
  const glass = new MeshLambertMaterial({color: 0xbfe3f2, transparent: true, opacity: 0.38});
  const frame = lam(0x8f9aa3);
  blk(0.24, 0.1, 1.5, 0x8f9aa3, 7.1, 2.3, 1.5);
  R.doorL = mesh(boxG(0.06, 2.25, 0.7), glass, 7.06, 1.15, 1.15); R.doorR = mesh(boxG(0.06, 2.25, 0.7), glass, 7.14, 1.15, 1.85);
  for (const d of [R.doorL, R.doorR]) mesh(boxG(0.08, 2.25, 0.05), frame, 0, 0, 0.33, d);
  const mat = new Mesh(new PlaneGeometry(1.0, 1.5), lam(0x5a4a3c)); mat.rotation.x = -Math.PI / 2; mat.position.set(6.45, 0.006, 1.5); S.add(mat);
  plane(0.9, 0.22, plateTex('ВХІД', {w: 256, h: 64, bg: '#2e7d32', font: 'bold 40px system-ui,sans-serif', r: 10}), 7.22, 2.6, 1.5, Math.PI / 2);
}

/* ---------- стійка, віконця, бар'єр ---------- */
function buildCounter(){
  const S = R.scene;
  // корпус стійки
  blk(9.4, 1.0, 0.62, 0xf6f4f0, -1.75, 0, -1.6);
  blk(9.4, 0.12, 0.62, 0xd7262b, -1.75, 0.55, -1.285 + 0.0); // червона смуга спереду (тонка)
  blk(9.6, 0.06, 0.8, 0x9c7a55, -1.75, 1.0, -1.6);          // стільниця
  R.wins = [];
  // добудова стійки під 5-те віконце
  R.ext5 = new Group(); S.add(R.ext5);
  blk(2.1, 1.0, 0.62, 0xf6f4f0, 4.0, 0, -1.6, R.ext5); blk(2.1, 0.12, 0.62, 0xd7262b, 4.0, 0.55, -1.285, R.ext5); blk(2.2, 0.06, 0.8, 0x9c7a55, 4.0, 1.0, -1.6, R.ext5);
  for (let i = 1; i <= 5; i++){
    const x = WX(i), g = new Group(); g.position.set(x, 0, 0); S.add(g);
    const w = {g, x, i};
    // табличка з номером
    w.plate = new Mesh(new PlaneGeometry(0.55, 0.55), new MeshLambertMaterial({transparent: true}));
    w.plate.position.set(0, 2.25, -1.6); g.add(w.plate);
    mesh(new CylinderGeometry(0.01, 0.01, 0.6), lam(0x555555), 0, 2.82, -1.6, g);
    // монітор
    w.mon = new Group(); w.mon.position.set(0.32, 1.03, -1.78); g.add(w.mon);
    blk(0.06, 0.18, 0.06, 0x333333, 0, 0, 0, w.mon);
    blk(0.52, 0.34, 0.04, 0x222222, 0, 0.18, 0, w.mon);
    w.screen = new Mesh(new PlaneGeometry(0.46, 0.28), new MeshBasicMaterial({color: 0x6fb7e8})); w.screen.position.set(0, 0.35, -0.025); w.screen.rotation.y = Math.PI; w.mon.add(w.screen);
    // термінал оплати
    blk(0.12, 0.05, 0.18, 0x2b2b2b, -0.35, 1.03, -1.33, g); blk(0.1, 0.01, 0.06, 0x58d68d, -0.35, 1.08, -1.37, g);
    // скляні перегородки
    const gl = new MeshLambertMaterial({color: 0xcfeaf5, transparent: true, opacity: 0.25});
    mesh(boxG(0.03, 0.85, 0.5), gl, 1.15, 1.48, -1.55, g);
    // крісло оператора
    w.chair = new Group(); w.chair.position.set(0, 0, OP_Z); g.add(w.chair);
    blk(0.46, 0.08, 0.46, 0x2c3e50, 0, 0.56, 0, w.chair); blk(0.46, 0.55, 0.07, 0x2c3e50, 0, 0.6, -0.23, w.chair);
    mesh(new CylinderGeometry(0.04, 0.04, 0.56), lam(0x555555), 0, 0.28, 0, w.chair);
    // закрите віконце: штора
    w.closed = blk(2.0, 0.9, 0.03, 0xb0b5b9, 0, 1.06, -1.4, g);
    R.wins.push(w);
  }
  blk(0.03, 0.85, 0.5, 0xcfeaf5, WX(1) - 1.15, 1.03, -1.55, null, {transparent: true, opacity: 0.25});
  // ваги і сканер біля 1-го віконця
  const x1 = WX(1);
  blk(0.4, 0.05, 0.4, 0x9aa5ad, x1 - 0.75, 1.03, -1.55); blk(0.16, 0.12, 0.05, 0x333333, x1 - 0.75, 1.03, -1.78);
  R.scanner = new Group(); R.scanner.position.set(x1 + 0.7, 1.03, -1.65); S.add(R.scanner);
  blk(0.08, 0.16, 0.08, 0x333333, 0, 0, 0, R.scanner); blk(0.08, 0.08, 0.2, 0xf1c40f, 0, 0.14, 0.05, R.scanner);
  // принтер ТТН
  blk(0.3, 0.16, 0.26, 0xeeeeee, x1 + 0.75, 1.03, -1.85); blk(0.2, 0.01, 0.1, 0xffffff, x1 + 0.75, 1.19, -1.75);
  // бар'єр «тільки для персоналу» (коротшає, коли добудовано 5-те віконце)
  const barTex = plateTex('Тільки для персоналу', {w: 512, h: 88, bg: '#ffffff', fg: '#c0392b', font: 'bold 40px system-ui,sans-serif', border: '#c0392b', r: 10});
  R.barFull = new Group(); S.add(R.barFull);
  blk(4.1, 0.95, 0.08, 0x8f9aa3, 4.95, 0, -1.6, R.barFull); blk(4.1, 0.06, 0.14, 0x9c7a55, 4.95, 0.95, -1.6, R.barFull);
  plane(1.5, 0.26, barTex, 4.95, 0.6, -1.55, 0, R.barFull);
  R.barShort = new Group(); S.add(R.barShort); R.barShort.visible = false;
  blk(1.95, 0.95, 0.08, 0x8f9aa3, 6.03, 0, -1.6, R.barShort); blk(1.95, 0.06, 0.14, 0x9c7a55, 6.03, 0.95, -1.6, R.barShort);
  plane(1.5, 0.26, barTex, 6.03, 0.6, -1.55, 0, R.barShort);
}

/* ---------- склад ---------- */
const dummy = new Object3D();
function buildStore(){
  const S = R.scene, post = lam(0x5d6d7e), shelf = lam(0xb7a17f);
  R.racks = [];
  for (let i = 0; i < 5; i++){
    const g = new Group(); g.position.set(RACK_X(i), 0, -4.05); S.add(g);
    for (const x of [-0.78, 0.78]) for (const z of [-0.27, 0.27]) blk(0.05, 2.2, 0.05, 0x5d6d7e, x, 0, z, g);
    SHELF_Y.forEach(y => mesh(boxG(1.62, 0.04, 0.58), shelf, 0, y - 0.02, 0, g));
    plane(0.5, 0.18, plateTex(`${i + 1}-…`, {w: 160, h: 56, bg: '#1f3a5f', font: 'bold 34px system-ui,sans-serif', r: 8}), 0, 2.08, 0.3, 0, g);
    R.racks.push(g);
  }
  // габаритний стелаж
  const gb = new Group(); gb.position.set(3.6, 0, -4.0); S.add(gb);
  for (const x of [-0.62, 0.62]) for (const z of [-0.32, 0.32]) blk(0.07, 1.7, 0.07, 0x34495e, x, 0, z, gb);
  for (const y of [0.1, 0.9]) blk(1.3, 0.05, 0.7, 0x8e7b5f, 0, y, 0, gb);
  plane(0.5, 0.2, plateTex('Г-…', {w: 160, h: 64, bg: '#7d3c98', font: 'bold 38px system-ui,sans-serif', r: 8}), 0, 1.6, 0.36, 0, gb);
  // піддон для купи з машини і візок вихідних
  blk(1.3, 0.13, 1.0, 0xa98257, PILE[0], 0, PILE[1]);
  { const pl = plane(1.0, 0.22, plateTex('З машини', {w: 320, h: 70, bg: '#f39c12', font: 'bold 40px system-ui,sans-serif', r: 10}), PILE[0], 1.6, PILE[1] + 0.55); mesh(new CylinderGeometry(0.012, 0.012, 1.5), lam(0x555555), PILE[0] - 0.45, 0.75, PILE[1] + 0.52); void pl; }
  const cart = new Group(); cart.position.set(OUTCART[0], 0, OUTCART[1]); S.add(cart);
  blk(0.9, 0.05, 0.7, 0x7f8c8d, 0, 0.12, 0, cart);
  for (const x of [-0.4, 0.4]) for (const z of [-0.3, 0.3]) mesh(new CylinderGeometry(0.05, 0.05, 0.04, 8), lam(0x222222), x, 0.05, z, cart).rotation.z = Math.PI / 2;
  blk(0.04, 1.0, 0.7, 0x7f8c8d, 0.43, 0.15, 0, cart);
  R.cartTag = plane(0.7, 0.18, plateTex('Відправка', {w: 256, h: 64, bg: '#2980b9', font: 'bold 36px system-ui,sans-serif', r: 8}), 0, 1.3, 0, Math.PI / 2, cart);
  R.cartTag.position.x = 0.46;
  // коробки (інстанси)
  const mk = (n, w, h, d) => { const im = new InstancedMesh(new BoxGeometry(w, h, d), new MeshLambertMaterial({color: 0xffffff}), n); im.count = 0; S.add(im); return im; };
  R.boxSmall = mk(80, 0.32, 0.28, 0.38);
  R.boxBig = mk(10, 0.55, 0.5, 0.55);
  R.boxPile = mk(36, 0.36, 0.3, 0.36);
  R.boxOut = mk(24, 0.32, 0.26, 0.3);
  const tones = [0xc9a26b, 0xb98d56, 0xd4b483, 0xa87b4b, 0xe8e2d6, 0xc49a6c];
  const r = rng(7), col = new Color();
  for (const im of [R.boxSmall, R.boxBig, R.boxPile, R.boxOut]) for (let i = 0; i < im.instanceMatrix.count; i++){ col.set(tones[Math.floor(r() * tones.length)]); im.setColorAt(i, col); }
  // перемішаний порядок комірок, щоб посилки лежали «живо»
  R.slotOrder = [...Array(80).keys()]; const r2 = rng(11);
  for (let i = 79; i > 0; i--){ const j = Math.floor(r2() * (i + 1)); [R.slotOrder[i], R.slotOrder[j]] = [R.slotOrder[j], R.slotOrder[i]]; }
}
function placeBoxes(G){
  let small = 0, big = 0, pile = 0, out = 0;
  for (const p of G.parcels || []){
    if (p.state === 'cell'){ if (String(p.cell || '').startsWith('Г')) big++; else small++; }
    else if (p.state === 'pile') pile++;
    else if (p.state === 'outgoing') out++;
  }
  const racks = clamp(G.up.shelves || 1, 1, 5);
  R.racks.forEach((g, i) => { g.visible = i < racks; });
  const key = `${small},${big},${pile},${out},${racks}`;
  if (R.boxKey === key) return; R.boxKey = key;
  const r = rng(3);
  // малі: тільки слоти видимих стелажів
  const slots = R.slotOrder.filter(s => Math.floor(s / 16) < racks);
  const ns = Math.min(small, slots.length);
  for (let k = 0; k < ns; k++){
    const s = slots[k], rk = Math.floor(s / 16), sh = Math.floor((s % 16) / 4), sl = s % 4;
    dummy.position.set(RACK_X(rk) + SLOT_X[sl] + (r() - 0.5) * 0.05, SHELF_Y[sh] + 0.14, -4.05 + (r() - 0.5) * 0.08);
    dummy.rotation.set(0, (r() - 0.5) * 0.25, 0); dummy.scale.set(0.8 + r() * 0.3, 0.75 + r() * 0.45, 1); dummy.updateMatrix();
    R.boxSmall.setMatrixAt(k, dummy.matrix);
  }
  R.boxSmall.count = ns; R.boxSmall.instanceMatrix.needsUpdate = true;
  const bigSlots = [[-0.3, 0.13], [0.3, 0.13], [-0.3, 0.93], [0.3, 0.93], [0, 1.43], [-0.3, 1.43]];
  const nb = Math.min(big, bigSlots.length);
  for (let k = 0; k < nb; k++){
    dummy.position.set(3.6 + bigSlots[k][0], bigSlots[k][1] + 0.25, -4.0); dummy.rotation.set(0, (r() - 0.5) * 0.3, 0); dummy.scale.set(1, 0.8 + r() * 0.4, 1); dummy.updateMatrix();
    R.boxBig.setMatrixAt(k, dummy.matrix);
  }
  R.boxBig.count = nb; R.boxBig.instanceMatrix.needsUpdate = true;
  const np = Math.min(pile, 36);
  for (let k = 0; k < np; k++){
    const layer = Math.floor(k / 9), j = k % 9;
    dummy.position.set(PILE[0] + ((j % 3) - 1) * 0.39 + (r() - 0.5) * 0.06, 0.13 + 0.15 + layer * 0.3, PILE[1] + (Math.floor(j / 3) - 1) * 0.3); dummy.rotation.set(0, (r() - 0.5) * 0.5, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
    R.boxPile.setMatrixAt(k, dummy.matrix);
  }
  R.boxPile.count = np; R.boxPile.instanceMatrix.needsUpdate = true;
  const no = Math.min(out, 24);
  for (let k = 0; k < no; k++){
    const layer = Math.floor(k / 6), j = k % 6;
    dummy.position.set(OUTCART[0] + ((j % 2) - 0.5) * 0.36, 0.17 + 0.13 + layer * 0.27, OUTCART[1] + (Math.floor(j / 2) - 1) * 0.22); dummy.rotation.set(0, (r() - 0.5) * 0.4, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
    R.boxOut.setMatrixAt(k, dummy.matrix);
  }
  R.boxOut.count = no; R.boxOut.instanceMatrix.needsUpdate = true;
}

/* ---------- підсобка: склад, рампа, пакування, кухня, туалет ---------- */
function buildBack(){
  const S = R.scene, H = 3.1, wm = R.wallMat, top = lam(0x3b2f26);
  const wall = (w, h, d, x, y0, z, m) => { mesh(boxG(w, h, d), m || wm, x, y0 + h / 2, z); mesh(boxG(w + 0.01, 0.04, d + 0.01), top, x, y0 + h + 0.02, z); };
  const zc = (BACK_Z + BACK_END) / 2, depth = BACK_Z - BACK_END;
  // підлога: бетон складу
  const ct = canvasTex(128, 128, (c) => { c.fillStyle = '#b9b6b0'; c.fillRect(0, 0, 128, 128); c.strokeStyle = '#a7a39c'; c.lineWidth = 2; c.strokeRect(0, 0, 128, 128);
    for (let i = 0; i < 60; i++){ c.fillStyle = `rgba(80,70,60,${Math.random() * 0.08})`; c.fillRect(Math.random() * 128, Math.random() * 128, 3, 3); } });
  ct.wrapS = ct.wrapT = RepeatWrapping; ct.repeat.set(7, 3.3);
  const fl = new Mesh(new PlaneGeometry(14.2, depth), new MeshLambertMaterial({map: ct})); fl.rotation.x = -Math.PI / 2; fl.position.set(0, 0.001, zc); S.add(fl);
  // жовта розмітка проходу і зона рампи
  for (const [w, d, x, z] of [[8.4, 0.08, 2.8, -5.15], [0.08, 4.2, 4.6, -7.9], [2.4, 0.08, 5.8, -5.7], [2.4, 0.08, 5.8, -10.1]]) blk(w, 0.004, d, 0xf1c40f, x, 0.002, z);
  // зовнішні стіни підсобки
  wall(0.2, H, depth, -7.1, 0, zc);
  wall(14.4, H, 0.2, 0, 0, BACK_END);
  const gz0 = GATE_Z - 1.05, gz1 = GATE_Z + 1.05;               // проріз воріт
  wall(0.2, H, gz0 - BACK_END, 7.1, 0, (gz0 + BACK_END) / 2);
  wall(0.2, H, BACK_Z - gz1, 7.1, 0, (gz1 + BACK_Z) / 2);
  mesh(boxG(0.2, 0.55, 2.1), wm, 7.1, H - 0.275, GATE_Z);
  // ворота-ролета
  R.gate = mesh(boxG(0.08, 2.5, 2.08), lam(0x95a5a6), 7.15, 1.27, GATE_Z);
  R.gateLines = []; for (let y = 0.2; y < 2.5; y += 0.22) R.gateLines.push(blk(0.09, 0.02, 2.08, 0x7f8c8d, 0, y - 1.27, 0, R.gate));
  R.gateOpen = 0;
  plane(1.2, 0.24, plateTex('РАМПА', {w: 320, h: 64, bg: '#f39c12', font: 'bold 40px system-ui,sans-serif', r: 8}), 6.98, 2.75, GATE_Z, -Math.PI / 2);
  // світлофор рампи
  R.dockLight = mesh(new SphereGeometry(0.07, 8, 6), new MeshBasicMaterial({color: 0xe74c3c}), 6.97, 2.25, GATE_Z - 1.3);
  // --- склад: великі стелажі резерву вздовж задньої стіни
  const tones = [0xc9a26b, 0xb98d56, 0xd4b483, 0xa87b4b, 0xe8e2d6, 0xc49a6c], r = rng(21);
  for (let i = 0; i < 3; i++){
    const g = new Group(); g.position.set(-0.2 + i * 2.2, 0, -10.55); S.add(g);
    for (const x of [-0.95, 0.95]) for (const z of [-0.33, 0.33]) blk(0.08, 2.6, 0.08, 0x2471a3, x, 0, z, g);
    for (const y of [0.15, 0.95, 1.75]){
      blk(1.98, 0.06, 0.7, 0xe67e22, 0, y, 0, g);
      let x = -0.75; while (x < 0.8){ const w = 0.28 + r() * 0.25, h = 0.25 + r() * 0.4; if (r() < 0.85) mesh(boxG(w, h, 0.5), lam(tones[Math.floor(r() * tones.length)]), x + w / 2, y + 0.06 + h / 2, (r() - 0.5) * 0.1, g); x += w + 0.05; }
    }
    plane(0.7, 0.18, plateTex(`Резерв ${String.fromCharCode(65 + i)}`, {w: 256, h: 64, bg: '#2471a3', font: 'bold 34px system-ui,sans-serif', r: 8}), 0, 2.45, 0.36, 0, g);
  }
  // стіл сортування з роликовим конвеєром
  const sort = new Group(); sort.position.set(2.2, 0, -7.3); S.add(sort);
  blk(2.4, 0.06, 0.85, 0x7f8c8d, 0, 0.82, 0, sort);
  for (const x of [-1.1, 1.1]) for (const z of [-0.36, 0.36]) blk(0.06, 0.82, 0.06, 0x555555, x, 0, z, sort);
  for (let x = -1.1; x <= 1.1; x += 0.16) mesh(new CylinderGeometry(0.035, 0.035, 0.8, 8), lam(0xbdc3c7), x, 0.91, 0, sort).rotation.x = Math.PI / 2;
  R.sortBoxes = [0, 1, 2].map(i => { const b = blk(0.34, 0.26, 0.32, tones[i + 1], -0.8 + i * 0.7, 0.94, 0, sort); b._x = -0.8 + i * 0.7; return b; });
  plane(1.1, 0.22, plateTex('Сортування', {w: 320, h: 64, bg: '#16a085', font: 'bold 38px system-ui,sans-serif', r: 8}), 0, 1.75, -0.4, 0, sort);
  // рокла біля воріт
  const jack = new Group(); jack.position.set(4.4, 0, -9.0); jack.rotation.y = 0.4; S.add(jack);
  blk(0.55, 0.08, 1.1, 0xe74c3c, 0, 0.06, 0, jack); mesh(new CylinderGeometry(0.02, 0.02, 1.0), lam(0x333333), 0, 0.6, -0.6, jack).rotation.x = 0.25;
  // --- зона пакування
  const pz = new Mesh(new PlaneGeometry(5.6, 2.8), lam(0xd8cfc0)); pz.rotation.x = -Math.PI / 2; pz.position.set(-4.3, 0.003, -6.05); S.add(pz);
  plane(1.4, 0.26, plateTex('Пакування', {w: 384, h: 72, bg: '#8e44ad', font: 'bold 42px system-ui,sans-serif', r: 10}), -6.98, 2.4, -5.6, Math.PI / 2);
  for (const tx of [-5.6, -3.2]){
    const t = new Group(); t.position.set(tx, 0, -5.5); S.add(t);
    blk(1.6, 0.06, 0.8, 0xd5b98a, 0, 0.86, 0, t);
    for (const x of [-0.75, 0.75]) for (const z of [-0.35, 0.35]) blk(0.05, 0.86, 0.05, 0x6b5444, x, 0, z, t);
    blk(0.18, 0.12, 0.08, 0xc0392b, -0.55, 0.92, 0.2, t);                    // скотч
    mesh(new CylinderGeometry(0.16, 0.16, 0.5, 14), new MeshLambertMaterial({color: 0xd6eaf8, transparent: true, opacity: 0.8}), 0.5, 1.08, 0.15, t).rotation.z = Math.PI / 2; // плівка
    blk(0.5, 0.3, 0.4, 0xc9a26b, -0.05, 0.92, -0.05, t);
    blk(0.4, 0.04, 0.36, 0x9aa5ad, 0.55, 0.92, -0.2, t);                     // ваги
  }
  // стелаж з порожніми коробками
  const bx = new Group(); bx.position.set(-6.65, 0, -6.6); S.add(bx);
  for (const y of [0.05, 0.75, 1.45]){ blk(0.6, 0.04, 1.4, 0x8e7b5f, 0, y, 0, bx); for (let k = 0; k < 3; k++) blk(0.5, 0.06 + k * 0.02, 0.4, 0xc9a26b, 0, y + 0.04 + k * 0.08, -0.4 + k * 0.4, bx); }
  for (const z of [-0.68, 0.68]) blk(0.05, 1.7, 0.05, 0x5d6d7e, 0.28, 0, z, bx);
  // --- кухня
  const iw = (w, d, x, z) => wall(w, 2.3, d, x, 0, z);
  iw(2.1, 0.12, -6.05, -7.6); iw(0.4, 0.12, -4.05, -7.6);          // перегородка з дверима
  iw(0.12, 3.6, -3.85, -9.4);
  const kf = new Mesh(new PlaneGeometry(3.2, 3.6), lam(0xe8d8c3)); kf.rotation.x = -Math.PI / 2; kf.position.set(-5.5, 0.004, -9.4); S.add(kf);
  plane(1.0, 0.24, plateTex('☕ Кухня', {w: 320, h: 72, bg: '#d35400', font: 'bold 40px system-ui,sans-serif', r: 10}), -5.5, 2.15, -7.53);
  blk(0.75, 0.06, 0.75, 0xa0522d, -5.6, 0.74, -9.5); mesh(new CylinderGeometry(0.05, 0.05, 0.74, 8), lam(0x6b5444), -5.6, 0.37, -9.5);
  R.kChairs = [[-6.15, -9.5, Math.PI / 2], [-5.05, -9.5, -Math.PI / 2]].map(([x, z, ry]) => { const g = new Group(); g.position.set(x, 0, z); g.rotation.y = ry; S.add(g);
    blk(0.38, 0.05, 0.38, 0x2e86c1, 0, 0.45, 0, g); blk(0.38, 0.4, 0.05, 0x2e86c1, 0, 0.48, -0.17, g); for (const a of [-0.15, 0.15]) for (const b of [-0.15, 0.15]) blk(0.035, 0.45, 0.035, 0x555555, a, 0, b, g); return [x, z, ry]; });
  { const m = mesh(new CylinderGeometry(0.05, 0.04, 0.09, 10), lam(0xffffff), -5.5, 0.82, -9.4); void m; }
  blk(0.6, 1.8, 0.6, 0xf2f3f4, -6.7, 0, -10.75);                                 // холодильник
  blk(0.02, 0.5, 0.04, 0x95a5a6, -6.42, 1.1, -10.44);
  blk(2.0, 0.9, 0.6, 0xf6f4f0, -5.0, 0, -10.8); blk(2.05, 0.05, 0.64, 0x5d6d7e, -5.0, 0.9, -10.8); // тумба
  blk(0.45, 0.28, 0.32, 0x2c3e50, -5.45, 0.95, -10.85);                          // мікрохвильовка
  R.kettle = mesh(new CylinderGeometry(0.1, 0.12, 0.22, 12), lam(0xecf0f1), -4.6, 1.06, -10.8);
  R.steam = emojiSprite('💨', 0.3); R.steam.position.set(-4.6, 1.45, -10.8); R.steam.visible = false; S.add(R.steam);
  blk(0.4, 0.04, 0.3, 0xbdc3c7, -4.25, 0.94, -10.8);                              // мийка
  // --- туалет
  iw(1.55, 0.12, -3.05, -9.0); iw(0.25, 0.12, -1.5, -9.0); iw(0.12, 2.2, -1.4, -10.1);
  const tf = new Mesh(new PlaneGeometry(2.4, 2.2), lam(0xf2f4f4)); tf.rotation.x = -Math.PI / 2; tf.position.set(-2.6, 0.005, -10.1); S.add(tf);
  R.wcDoor = new Group(); R.wcDoor.position.set(-2.22, 0, -9.0); S.add(R.wcDoor);
  blk(0.5, 2.0, 0.05, 0x8d6e63, 0.25, 0, 0, R.wcDoor);
  R.wcSign = plane(0.5, 0.22, plateTex('🚻 вільно', {w: 220, h: 96, bg: '#2e7d32', font: 'bold 40px system-ui,sans-serif', r: 10}), -2.6, 2.05, -8.93);
  const toilet = new Group(); toilet.position.set(-2.9, 0, -10.75); S.add(toilet);
  mesh(new CylinderGeometry(0.2, 0.16, 0.4, 12), lam(0xffffff), 0, 0.2, 0.05, toilet); blk(0.42, 0.45, 0.18, 0xffffff, 0, 0.3, -0.18, toilet);
  blk(0.45, 0.06, 0.35, 0xffffff, -1.05 + 1.95, 0.8, 0.1, toilet);               // умивальник
  blk(0.4, 0.5, 0.02, 0xd6eaf8, 0.9, 1.25, -0.08, toilet);                       // дзеркало
  // двір і під’їзд для машини
  const yd = new Mesh(new PlaneGeometry(7, 7.6), lam(0x8c8c88)); yd.rotation.x = -Math.PI / 2; yd.position.set(10.7, 0.001, -8.4); S.add(yd);
  for (let x = 8.0; x < 14; x += 1.4) blk(0.6, 0.006, 0.1, 0xf5f5f5, x, 0, -6.7);
  blk(0.9, 0.5, 2.4, 0x5d6d7e, 7.6, 0, GATE_Z);                                   // рампа-платформа
  for (const z of [GATE_Z - 1.15, GATE_Z + 1.15]) blk(0.22, 0.32, 0.3, 0x1b1b1b, 8.05, 0.12, z); // відбійники
}
function buildTruck(){
  const T = R.truck = new Group(); R.scene.add(T);
  const body = new Group(); T.add(body);
  blk(3.5, 2.05, 2.0, 0xf6f6f6, 0, 0.62, 0, body);
  blk(3.52, 0.22, 2.02, 0xd7262b, 0, 0.62, 0, body);
  for (const sd of [-1.015, 1.015]){
    plane(2.4, 0.55, plateTex('НАША ПОШТА', {w: 640, h: 140, bg: '#ffffff', fg: '#d7262b', font: 'bold 96px system-ui,sans-serif', r: 6}), 0.2, 1.9, sd, sd > 0 ? 0 : Math.PI, body);
  }
  blk(3.6, 0.18, 1.6, 0x2c2c2c, 0.6, 0.38, 0, T);                                 // рама
  const cab = new Group(); cab.position.set(2.3, 0, 0); T.add(cab);
  blk(1.15, 1.55, 1.95, 0xd7262b, 0, 0.55, 0, cab);
  blk(0.04, 0.6, 1.7, 0x9fd3ea, 0.58, 1.35, 0, cab);
  for (const z of [-0.98, 0.98]) blk(0.6, 0.45, 0.02, 0x9fd3ea, 0.05, 1.4, z, cab);
  blk(0.1, 0.18, 1.6, 0x333333, 0.6, 0.6, 0, cab);
  R.wheels = [];
  for (const [x, z] of [[-1.0, -0.95], [-1.0, 0.95], [0.2, -0.95], [0.2, 0.95], [2.4, -0.95], [2.4, 0.95]]){
    const w = mesh(new CylinderGeometry(0.34, 0.34, 0.24, 14), lam(0x1b1b1b), x, 0.34, z, T); w.rotation.x = Math.PI / 2; R.wheels.push(w);
  }
  // задні двері
  R.tDoors = [-1, 1].map(h => { const p = new Group(); p.position.set(-1.77, 0.62, h); p._h = h; T.add(p);
    blk(0.04, 2.0, 0.99, 0xe5e5e5, 0, 0, -h * 0.495, p); return p; });
  // коробки в кузові
  R.truckBoxes = new InstancedMesh(new BoxGeometry(0.36, 0.3, 0.36), new MeshLambertMaterial({color: 0xffffff}), 40); R.truckBoxes.count = 0; T.add(R.truckBoxes);
  const tones = [0xc9a26b, 0xb98d56, 0xd4b483, 0xa87b4b, 0xe8e2d6], r = rng(31), col = new Color();
  for (let i = 0; i < 40; i++){ col.set(tones[Math.floor(r() * tones.length)]); R.truckBoxes.setColorAt(i, col); }
  // водій
  R.driver = makePerson('driver', '🧔', {seed: 42});
  R.driver.cap = blk(0.3, 0.06, 0.3, 0xd7262b, 0, 1.92, 0, R.driver.g);
  R.driver.g.visible = false;
  T.position.set(TRUCK_AWAY, 0, GATE_Z); T.visible = false;
  R.tx = TRUCK_AWAY; R.tState = 'away'; R.tDoor = 0;
}
function placeTruckBoxes(n){
  if (R._tbn === n) return; R._tbn = n;
  const r = rng(13), k = Math.min(n, 40);
  for (let i = 0; i < k; i++){
    const layer = Math.floor(i / 15), j = i % 15;
    dummy.position.set(-1.45 + Math.floor(j / 5) * 0.42 + (r() - 0.5) * 0.04, 0.8 + layer * 0.32, -0.75 + (j % 5) * 0.38); dummy.rotation.set(0, (r() - 0.5) * 0.3, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
    R.truckBoxes.setMatrixAt(i, dummy.matrix);
  }
  R.truckBoxes.count = k; R.truckBoxes.instanceMatrix.needsUpdate = true;
}

/* ---------- покращення і декор ---------- */
function buildExtras(){
  const S = R.scene, E = R.extras = {};
  const grp = (x, y, z) => { const g = new Group(); g.position.set(x, y, z); S.add(g); g.visible = false; return g; };
  // стільці зони очікування (до 9)
  E.chairs = [];
  for (let j = 0; j < 9; j++){
    const [x, z] = CHAIR(j), g = grp(x, 0, z);
    blk(0.44, 0.06, 0.44, 0x2e86c1, 0, 0.42, 0, g); blk(0.06, 0.45, 0.44, 0x2e86c1, -0.2, 0.45, 0, g);
    for (const a of [-0.17, 0.17]) for (const b of [-0.17, 0.17]) blk(0.04, 0.42, 0.04, 0x555555, a, 0, b, g);
    E.chairs.push(g);
  }
  // друга зала: крісла біля вітрини, обличчям до стійки
  E.chairs2 = [];
  for (let j = 0; j < 6; j++){
    const [x, z] = CHAIR2(j), g = grp(x, 0, z);
    blk(0.44, 0.06, 0.44, 0x16a085, 0, 0.42, 0, g); blk(0.44, 0.45, 0.06, 0x16a085, 0, 0.45, 0.2, g);
    for (const a of [-0.17, 0.17]) for (const b of [-0.17, 0.17]) blk(0.04, 0.42, 0.04, 0x555555, a, 0, b, g);
    E.chairs2.push(g);
  }
  // кавоапарат на столику
  E.coffee = grp(3.55, 0, -1.2);
  blk(0.7, 0.75, 0.45, 0x8d6e63, 0, 0, 0, E.coffee); blk(0.32, 0.45, 0.3, 0x2c2c2c, 0, 0.75, 0, E.coffee);
  blk(0.1, 0.08, 0.1, 0xffffff, 0.22, 0.75, 0.05, E.coffee); { const cs = emojiSprite('☕', 0.28); cs.position.set(0, 1.45, 0); E.coffee.add(cs); }
  // кондиціонер
  E.ac = grp(-3.6, 2.55, -4.42);
  blk(1.0, 0.32, 0.22, 0xfafafa, 0, 0, 0, E.ac); blk(0.9, 0.03, 0.02, 0x9aa5ad, 0, 0.06, 0.11, E.ac);
  // поштомат
  E.locker = grp(6.68, 0, 3.2);
  E.lockerBody = blk(0.55, 2.0, 1, 0xd7262b, 0, 0, 0, E.locker);
  E.lockerGrid = new Mesh(new PlaneGeometry(1, 1.5), new MeshLambertMaterial({transparent: true, map: canvasTex(128, 192, (c) => {
    c.strokeStyle = '#ffffffaa'; c.lineWidth = 3; for (let x = 0; x <= 128; x += 32) for (let y = 0; y <= 192; y += 32) c.strokeRect(x + 2, y + 2, 28, 28);
  })}));
  E.lockerGrid.position.set(-0.28, 1.15, 0); E.lockerGrid.rotation.y = -Math.PI / 2; E.locker.add(E.lockerGrid);
  E.lockerLbl = plane(0.8, 0.16, plateTex('ПОШТОМАТ', {w: 320, h: 64, bg: '#ffffff', fg: '#d7262b', font: 'bold 40px system-ui,sans-serif', r: 8}), -0.285, 1.85, 0, -Math.PI / 2, E.locker);
  blk(0.05, 0.3, 0.25, 0x222222, -0.28, 0.85, 0.3, E.locker);
  // вивіска «реклама» на вулиці
  E.ads = grp(8.9, 0, -0.6);
  blk(0.06, 1.2, 0.06, 0x555555, 0, 0, 0, E.ads);
  plane(0.9, 0.6, plateTex('НП\nвідкрито', {w: 256, h: 170, bg: '#d7262b', font: 'bold 56px system-ui,sans-serif', r: 14}), 0, 1.5, 0, -Math.PI / 2, E.ads);
  // генератор на вулиці
  E.gen = grp(8.6, 0, -3.6);
  blk(0.8, 0.55, 0.5, 0xf39c12, 0, 0, 0, E.gen); blk(0.6, 0.05, 0.3, 0x333333, 0, 0.55, 0, E.gen);

  // декор
  const D = R.decor = {};
  D.plant = grp(2.7, 0, 4.0); blk(0.32, 0.36, 0.32, 0xb5651d, 0, 0, 0, D.plant);
  for (const [x, y, z, s] of [[0, 0.55, 0, 0.26], [0.1, 0.72, 0.05, 0.18], [-0.08, 0.68, -0.06, 0.2]]) mesh(new SphereGeometry(s, 8, 6), lam(0x3f9b4b), x, y, z, D.plant);
  D.ficus = grp(-6.45, 0, 4.05); mesh(new CylinderGeometry(0.22, 0.17, 0.42, 10), lam(0x8b5a2b), 0, 0.21, 0, D.ficus);
  mesh(new CylinderGeometry(0.03, 0.04, 1.1, 6), lam(0x6d4c41), 0, 0.95, 0, D.ficus);
  for (const [x, y, z, s] of [[0, 1.55, 0, 0.36], [0.22, 1.3, 0.1, 0.26], [-0.2, 1.38, -0.08, 0.28], [0.05, 1.85, 0.08, 0.24]]) mesh(new SphereGeometry(s, 8, 6), lam(0x2e7d32), x, y, z, D.ficus);
  D.poster = grp(-6.97, 1.75, 2.6);
  plane(0.9, 1.2, plateTex('ОБЕРЕЖНО\nКРИХКЕ!\n📦🥚🍷', {w: 300, h: 400, bg: '#fff3c4', fg: '#c0392b', font: 'bold 52px system-ui,sans-serif', r: 12, border: '#c0392b'}), 0, 0, 0, Math.PI / 2, D.poster);
  D.tariff = grp(-6.97, 1.75, 1.1);
  plane(1.0, 1.25, canvasTex(320, 400, (c) => {
    c.fillStyle = '#1f3a5f'; rr(c, 2, 2, 316, 396, 14); c.fill(); c.fillStyle = '#fff'; c.font = 'bold 44px system-ui,sans-serif'; c.textAlign = 'center'; c.fillText('ТАРИФИ', 160, 62);
    c.font = '28px system-ui,sans-serif'; c.textAlign = 'left';
    [['Конверт', '45 ₴'], ['До 2 кг', '70 ₴'], ['До 10 кг', '110 ₴'], ['До 30 кг', '180 ₴'], ['Габарит', '250 ₴']].forEach(([a, b], i) => { c.fillText(a, 30, 130 + i * 52); c.textAlign = 'right'; c.fillText(b, 290, 130 + i * 52); c.textAlign = 'left'; });
  }), 0, 0, 0, Math.PI / 2, D.tariff);
  D.clock = grp(5.0, 2.6, -4.47);
  mesh(new CylinderGeometry(0.3, 0.3, 0.05, 24), lam(0x333333), 0, 0, 0, D.clock).rotation.x = Math.PI / 2;
  const face = mesh(new CircleGeometry(0.26, 24), lam(0xffffff), 0, 0, 0.03, D.clock);
  R.hourHand = new Group(); R.hourHand.position.z = 0.04; D.clock.add(R.hourHand); blk(0.03, 0.15, 0.01, 0x111111, 0, 0, 0, R.hourHand);
  R.minHand = new Group(); R.minHand.position.z = 0.045; D.clock.add(R.minHand); blk(0.02, 0.22, 0.01, 0x111111, 0, 0, 0, R.minHand);
  void face;
  D.flag = grp(-5.6, 2.6, -4.46);
  plane(0.9, 0.3, plateTex('', {w: 90, h: 30, bg: '#0057b7', r: 0}), 0, 0.15, 0, 0, D.flag);
  plane(0.9, 0.3, plateTex('', {w: 90, h: 30, bg: '#ffd700', r: 0}), 0, -0.15, 0, 0, D.flag);
  D.cooler = grp(-6.5, 0, -0.85);
  blk(0.4, 1.0, 0.4, 0xf5f5f5, 0, 0, 0, D.cooler);
  mesh(new CylinderGeometry(0.17, 0.17, 0.45, 14), new MeshLambertMaterial({color: 0x5dade2, transparent: true, opacity: 0.7}), 0, 1.23, 0, D.cooler);
  blk(0.06, 0.05, 0.05, 0x3498db, 0.18, 0.7, 0, D.cooler); blk(0.06, 0.05, 0.05, 0xe74c3c, 0.18, 0.7, 0.1, D.cooler);
  D.candy = grp(WX(1) - 0.32, 1.03, -1.38);
  mesh(new CylinderGeometry(0.1, 0.06, 0.07, 12), new MeshLambertMaterial({color: 0xd6eaf8, transparent: true, opacity: 0.8}), 0, 0.035, 0, D.candy);
  for (const [x, z, c] of [[0.03, 0, 0xe74c3c], [-0.03, 0.03, 0xf1c40f], [0, -0.04, 0x8e44ad]]) mesh(new SphereGeometry(0.03, 6, 4), lam(c), x, 0.07, z, D.candy);
  D.tv = grp(-6.94, 2.3, -0.05);
  blk(0.06, 0.72, 1.22, 0x111111, 0, -0.36, 0, D.tv);
  R.tvScreen = new Mesh(new PlaneGeometry(1.12, 0.62), new MeshBasicMaterial({color: 0x3498db})); R.tvScreen.position.set(0.04, 0, 0); R.tvScreen.rotation.y = Math.PI / 2; D.tv.add(R.tvScreen);
  D.aquarium = grp(6.6, 0, -0.75);
  blk(0.5, 0.8, 1.2, 0x5d4037, 0, 0, 0, D.aquarium);
  mesh(boxG(0.45, 0.5, 1.12), new MeshLambertMaterial({color: 0x7fc8e8, transparent: true, opacity: 0.45}), 0, 1.05, 0, D.aquarium);
  blk(0.44, 0.06, 1.1, 0xe0c58f, 0, 0.8, 0, D.aquarium);
  R.fish = [0xff7f27, 0xffc300, 0xe74c3c].map((c, i) => { const f = mesh(new SphereGeometry(0.05, 6, 4), lam(c), 0, 1.0 + i * 0.1, 0, D.aquarium); f.scale.set(0.6, 0.8, 1.4); f._p = i * 2; return f; });
  // кіт — окремий персонаж
  D.cat = grp(0, 0, 3);
  const cat = D.cat, oc = lam(0xe67e22);
  blk(0.2, 0.18, 0.42, 0xe67e22, 0, 0.1, 0, cat);
  const head = new Group(); head.position.set(0, 0.33, 0.24); cat.add(head);
  blk(0.2, 0.17, 0.17, 0xe67e22, 0, -0.08, 0, head);
  for (const x of [-0.06, 0.06]){ const e = mesh(new ConeGeometry(0.04, 0.08, 4), oc, x, 0.12, 0, head); e.rotation.y = Math.PI / 4; }
  for (const x of [-0.05, 0.05]) mesh(boxG(0.03, 0.03, 0.01), lam(0x1b1b1b), x, 0.0, 0.09, head);
  R.catTail = new Group(); R.catTail.position.set(0, 0.25, -0.2); cat.add(R.catTail);
  blk(0.04, 0.04, 0.3, 0xd35400, 0, 0, -0.14, R.catTail).rotation.x = -0.6;
  R.catLegs = [[-0.07, 0.15], [0.07, 0.15], [-0.07, -0.15], [0.07, -0.15]].map(([x, z]) => { const p = new Group(); p.position.set(x, 0.12, z); cat.add(p); blk(0.05, 0.12, 0.05, 0xd35400, 0, -0.12, 0, p); return p; });
  mesh(new CircleGeometry(0.22, 12), new MeshBasicMaterial({color: 0, transparent: true, opacity: 0.18}), 0, 0.01, 0, cat).rotation.x = -Math.PI / 2;
  R.catSt = {pos: new Vector3(-2, 0, 3), tgt: new Vector3(-2, 0, 3), wait: 2, yaw: 0, ph: 0, jump: 0};
  // святковий декор
  D.tree = grp(-6.3, 0, 3.6);
  mesh(new CylinderGeometry(0.08, 0.1, 0.3, 8), lam(0x6d4c41), 0, 0.15, 0, D.tree);
  [[0.75, 0.9, 0.5], [0.6, 0.75, 1.05], [0.42, 0.6, 1.55], [0.24, 0.45, 1.98]].forEach(([rr_, h, y]) => mesh(new ConeGeometry(rr_, h, 12), lam(0x1e8449), 0, y, 0, D.tree));
  { const st = emojiSprite('⭐', 0.35); st.position.set(0, 2.35, 0); D.tree.add(st); }
  R.treeBalls = [];
  for (let i = 0; i < 14; i++){ const a = i * 2.4, y = 0.45 + (i / 14) * 1.6, rad = 0.7 - (i / 14) * 0.5; const b = mesh(new SphereGeometry(0.055, 8, 6), new MeshBasicMaterial({color: [0xe74c3c, 0xf1c40f, 0x3498db, 0xecf0f1][i % 4]}), Math.cos(a) * rad, y, Math.sin(a) * rad, D.tree); R.treeBalls.push(b); }
  D.presents = grp(-5.65, 0, 3.95);
  [[0, 0, 0xe74c3c, 0.34], [0.36, 0.1, 0x3498db, 0.26], [0.1, 0.36, 0xf1c40f, 0.22]].forEach(([x, z, c, s_]) => { blk(s_, s_, s_, c, x, 0, z, D.presents); blk(s_ + 0.01, s_ + 0.01, 0.05, 0xffffff, x, 0, z, D.presents); });
  D.garland = grp(0, 0, 0);
  R.garland = [];
  for (let i = 0; i < 28; i++){ const x = -6.8 + i * 0.5, b = mesh(new SphereGeometry(0.045, 6, 4), new MeshBasicMaterial({color: [0xe74c3c, 0xf1c40f, 0x2ecc71, 0x3498db][i % 4]}), x, 2.95 - Math.abs(Math.sin(i * 0.9)) * 0.18, -1.32, D.garland); R.garland.push(b); }
  D.snowman = grp(8.1, 0, 3.4);
  for (const [y, r_] of [[0.3, 0.32], [0.82, 0.24], [1.22, 0.17]]) mesh(new SphereGeometry(r_, 12, 10), lam(0xffffff), 0, y, 0, D.snowman);
  { const n = mesh(new ConeGeometry(0.04, 0.18, 8), lam(0xe67e22), -0.17, 1.22, 0, D.snowman); n.rotation.z = Math.PI / 2; }
  blk(0.26, 0.2, 0.26, 0x222222, 0, 1.36, 0, D.snowman);
  // святкові кульки
  E.balloons = grp(2.95, 0, -1.3);
  [[0, 2.3, 0, 0xe74c3c], [0.25, 2.15, 0.12, 0xf1c40f], [-0.2, 2.2, 0.1, 0x3498db]].forEach(([x, y, z, c]) => {
    mesh(new SphereGeometry(0.17, 10, 8), lam(c), x, y, z, E.balloons).scale.y = 1.2;
    mesh(new CylinderGeometry(0.004, 0.004, y - 1.05), lam(0xffffff), x * 0.4, (y + 1.05) / 2 - 0.1, z * 0.4, E.balloons);
  });
  // бруд на підлозі
  R.dirt = []; const dr = rng(5), dm = new MeshBasicMaterial({color: 0x5b4a35, transparent: true, opacity: 0.28, depthWrite: false});
  for (let i = 0; i < 14; i++){
    const s = 0.2 + dr() * 0.35, d = new Mesh(new CircleGeometry(s, 10), dm);
    d.rotation.x = -Math.PI / 2; d.position.set(-5.5 + dr() * 11.5, 0.008 + i * 0.0003, -0.9 + dr() * 5.2); d.scale.y = 0.6 + dr() * 0.6; d.visible = false; S.add(d); R.dirt.push(d);
  }
  // дощ / сніг на вулиці
  const n = 160, pos = new Float32Array(n * 3); const pr = rng(9);
  for (let i = 0; i < n; i++){ pos[i * 3] = 7.3 + pr() * 2.5; pos[i * 3 + 1] = pr() * 3.5; pos[i * 3 + 2] = -5 + pr() * 10; }
  const pg = new BufferGeometry(); pg.setAttribute('position', new Float32BufferAttribute(pos, 3));
  R.precip = new Points(pg, new PointsMaterial({color: 0xaed6f1, size: 0.06, transparent: true, opacity: 0.8})); R.precip.visible = false; S.add(R.precip);
}

/* ---------- люди ---------- */
const BODY = [0x3b6ea5, 0xc0392b, 0x2e8b57, 0x8e44ad, 0xd35400, 0x16a085, 0x7f8c8d, 0x2c3e50, 0xb8860b, 0x9b59b6, 0x1f618d, 0xa04000, 0xe84393, 0x00897b];
const LEGS = [0x2c3e50, 0x34495e, 0x1b2631, 0x4a4a4a, 0x5d4037, 0x1a237e];
const capsule = () => cached('cap', () => new CapsuleGeometry(0.2, 0.4, 4, 10));
function makePerson(key, av, {seed = 0, uniform = false, reg = false, color = null, hat = '', badge = ''} = {}){
  const g = new Group(), r = rng(seed || hash(key));
  const bc = color != null ? color : uniform ? 0xd7262b : BODY[Math.floor(r() * BODY.length)], lc = uniform ? 0x2c3e50 : LEGS[Math.floor(r() * LEGS.length)];
  const body = mesh(capsule(), lam(bc), 0, 1.02, 0, g); body.scale.set(1, 1, 0.8);
  const legs = [-0.1, 0.1].map(x => { const p = new Group(); p.position.set(x, 0.72, 0); g.add(p); blk(0.13, 0.7, 0.15, lc, 0, -0.7, 0, p); return p; });
  const arms = [-0.27, 0.27].map(x => { const p = new Group(); p.position.set(x, 1.25, 0); g.add(p); blk(0.1, 0.48, 0.11, bc, 0, -0.46, 0, p); return p; });
  const head = emojiSprite(av, 0.62); head.position.y = 1.62; g.add(head); head._e = av;
  if (hat){ const h = emojiSprite(hat, 0.44); h.position.y = 1.98; g.add(h); }
  if (badge){ const b = plane(0.3, 0.09, plateTex(badge, {w: 256, h: 76, bg: '#ffffff', fg: '#222', font: 'bold 38px system-ui,sans-serif', r: 8}), 0.08, 1.2, 0.17, 0, g); b.renderOrder = 2; }
  const mood = emojiSprite('😐', 0.34); mood.position.y = 2.08; mood.visible = false; g.add(mood);
  const carry = blk(0.34, 0.26, 0.3, 0xc49a6c, 0, 0.92, 0.3, g); carry.visible = false;
  const receipt = mesh(new PlaneGeometry(0.14, 0.2), lam(0xffffff, {side: 2}), 0.27, 0.85, 0.12, g); receipt.rotation.x = -0.3; receipt.visible = false;
  const shadow = mesh(cached('shg', () => new CircleGeometry(0.32, 14)), cached('shm', () => new MeshBasicMaterial({color: 0, transparent: true, opacity: 0.2, depthWrite: false})), 0, 0.01, 0, g);
  shadow.rotation.x = -Math.PI / 2;
  let ring = null;
  if (reg){ ring = mesh(cached('rg', () => new TorusGeometry(0.36, 0.035, 6, 24)), lam(0xf5b041, {emissive: 0x7d5a00}), 0, 0.03, 0, g); ring.rotation.x = Math.PI / 2; }
  R.scene.add(g);
  const P = {key, g, body, head, legs, arms, mood, carry, receipt, ring, pos: new Vector3(), goal: null, path: [], yaw: 0, face: Math.PI, ph: r() * 6, walking: false, sit: false, speed: 1.5 + r() * 0.35, busy: false};
  body.userData.P = P; head.userData.P = P;
  return P;
}
function removePerson(P){ R.scene.remove(P.g); P.head.material.dispose(); P.mood.material.dispose(); }
function angTo(a, b, t){ let d = ((b - a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI; return a + d * t; }
function stepPerson(P, dt, speedMul){
  const tgt = P.path.length ? P.path[0] : P.goal;
  P.walking = false;
  if (tgt){
    const dx = tgt[0] - P.pos.x, dz = tgt[1] - P.pos.z, d = Math.hypot(dx, dz);
    if (d > 0.04){
      const s = Math.min(d, P.speed * dt * speedMul);
      P.pos.x += dx / d * s; P.pos.z += dz / d * s; P.walking = s > 0;
      P.yaw = angTo(P.yaw, Math.atan2(dx, dz), Math.min(1, dt * 10));
    } else if (P.path.length){ P.path.shift(); }
  }
  if (!P.walking) P.yaw = angTo(P.yaw, P.face, Math.min(1, dt * 6));
  const sit = P.sit && !P.walking && !P.path.length && P.goal && Math.hypot(P.goal[0] - P.pos.x, P.goal[1] - P.pos.z) < 0.08;
  if (P.walking) P.ph += dt * 9 * Math.min(2, speedMul);
  const sw = P.walking ? Math.sin(P.ph) : 0;
  P.legs[0].rotation.x = sit ? -1.5 : sw * 0.6; P.legs[1].rotation.x = sit ? -1.5 : -sw * 0.6;
  P.arms[0].rotation.x = P.busy ? -0.9 + Math.sin(R.t * 14) * 0.15 : -sw * 0.5 - (P.carry.visible ? 1.1 : 0);
  P.arms[1].rotation.x = P.busy ? -0.9 - Math.sin(R.t * 14) * 0.15 : sw * 0.5 - (P.carry.visible ? 1.1 : 0);
  P.g.position.set(P.pos.x, (sit ? -(P.drop ?? 0.28) : 0) + (P.walking ? Math.abs(sw) * 0.05 : 0), P.pos.z);
  P.g.rotation.y = P.yaw;
  P.g.scale.setScalar(P.hover ? 1.08 : 1);
}

/* ---------- черга: позиції ---------- */
function lineSpot(k){
  const row = Math.floor(k / 7), j = k % 7;
  if (row === 0) return [-0.6 + j * 0.8, 0.45];
  if (row === 1) return [4.2 - j * 0.8, 1.85];
  return [-0.6 + j * 0.8, 3.1 + (row - 2) * 0.8];
}
function faceAlong(a, b){ return Math.atan2(b[0] - a[0], b[1] - a[1]); }
function frontStaff(G){ return (G.staff || []).filter(s => (s.role === 'issue' || s.role === 'accept') && !s.training && !s.away && !s.brk).slice(0, Math.max(0, (G.up.windows || 1) - 1)); }

/* ---------- синхронізація зі станом гри ---------- */
function sync(){
  if (!R) return;
  const br = B(), G = br && br.g();
  if (!G) return;
  ensureLoop();
  const now = performance.now();
  const tab = br.tab();
  if (tab !== R.lastTab){ R.lastTab = tab; R.userMode = false; setMode(tab === 'store' || tab === 'ramp' ? 'back' : 'hall'); }
  // машина на рампі
  const tr = G.truck, tWant = tr ? (tr.kind === 'in' ? 'in' : 'out') : null;
  if (tWant && (R.tState === 'away' || R.tState === 'leaving')){ R.tState = 'arriving'; R.tKind = tWant; R.truck.visible = true; if (R.tx > 16) R.tx = TRUCK_AWAY; }
  if (!tWant && (R.tState === 'docked' || R.tState === 'arriving')) R.tState = 'leaving';
  R.tCount = (G.parcels || []).filter(p => p.state === (R.tKind === 'out' ? 'loaded' : 'truck')).length;
  const wins = clamp(G.up.windows || 1, 1, (G.up.space || 0) >= 1 ? 5 : 4), front = frontStaff(G);
  // віконця
  R.wins.forEach((w, k) => {
    const open = k < wins, st = k === 0 ? 'me' : front[k - 1];
    w.g.visible = k < 4 || (G.up.space || 0) >= 1;
    w.closed.visible = !open; w.mon.visible = open;
    const busy = k === 0 ? G.queue.some(c => c.by === 'me') : !!(st && st.cl);
    const pk = `${open}|${busy}|${k === 0 || !!st}`;
    if (w._pk !== pk){ w._pk = pk;
      w.plate.material.map = plateTex(String(k + 1), {w: 128, h: 128, r: 64, bg: open ? (busy ? '#d7262b' : (k === 0 || st ? '#2e7d32' : '#7f8c8d')) : '#bdc3c7', font: 'bold 80px system-ui,sans-serif'});
      w.plate.material.needsUpdate = true;
    }
  });
  // оператори
  const want = new Map();
  for (let k = 0; k < wins; k++){
    const L = G.look || {};
    const st = k === 0 ? {id: 'me', av: L.e || '🧑‍💼', cl: G.queue.some(c => c.by === 'me'), look: L} : front[k - 1];
    if (!st) continue;
    want.set(`op${k}:${st.id}:${st.av}` + (k === 0 ? `:${L.c || ''}:${L.hat || ''}:${L.badge !== false ? 1 : 0}` : ''), {kind: 'op', w: k, st});
  }
  // складські працівники
  (G.staff || []).filter(s => s.role === 'store' && !s.training && !s.away).slice(0, 4).forEach(s => want.set(`st${s.id}:${s.av}`, {kind: 'store', st: s}));
  // інспектор
  if (G.insp && G.insp.state === 'on') want.set('insp', {kind: 'insp'});
  // клієнти
  const free = G.queue.filter(c => !c.by), nCh = clamp((G.up.chairs || 0) * 3, 0, 9), nCh2 = (G.up.space || 0) >= 2 ? 6 : 0;
  G.queue.forEach(c => want.set('c' + c.id, {kind: 'client', c}));
  for (const [key, w] of want){
    let P = R.people.get(key);
    if (!P){
      if (w.kind === 'client'){
        P = makePerson(key, w.c.av, {reg: !!w.c.reg});
        const fromFront = Math.random() < 0.5;
        P.pos.set(STREET, 0, fromFront ? 5.2 : -5.2); P.yaw = fromFront ? Math.PI : 0;
        P.path = [[STREET, DOOR.z], DOOR_IN];
        P.kindC = w.c.kind;
        if (R.seen && br.tab() === 'hall') br.door();
      } else if (w.kind === 'op'){
        const L = w.st.look;
        P = makePerson(key, w.st.av, L ? {uniform: true, color: br.LOOKC(L.c), hat: L.hat || '', badge: L.badge !== false ? String(G.nick || '').slice(0, 14) : ''} : {uniform: true});
        P.pos.set(WX(w.w + 1), 0, OP_Z); P.yaw = 0; P.face = 0; P.sit = true; P.drop = 0.1; P.goal = [WX(w.w + 1), OP_Z];
      } else if (w.kind === 'store'){
        P = makePerson(key, w.st.av, {uniform: true});
        P.pos.set(2.0 + Math.random() * 2, 0, -3.2); P.wait = 0; P.zone = 'hall';
      } else {
        P = makePerson(key, '🕵️', {seed: 77}); P.pos.set(STREET, 0, -4); P.path = [[STREET, DOOR.z], DOOR_IN]; P.goal = [4.6, 3.6]; P.face = Math.PI;
        P.clip = blk(0.22, 0.3, 0.02, 0xffffff, 0.15, 1.0, 0.25, P.g); P.clip.rotation.x = -0.5;
      }
      R.people.set(key, P);
    }
    P.mark = now;
    if (w.kind === 'op'){ P.busy = !!w.st.cl; }
    if (w.kind === 'store'){ P.stRef = w.st; }
    if (w.kind === 'client'){
      const c = w.c;
      if (c.by){
        let wi = 1;
        if (c.by !== 'me'){ const k = front.findIndex(s => s.id === c.by); wi = k >= 0 ? k + 2 : 2; }
        P.goal = [WX(clamp(wi, 1, wins)), SERVE_Z]; P.face = Math.PI; P.sit = false;
      } else {
        const k = free.indexOf(c);
        let spot, face;
        if (k < 7 || k - 7 >= nCh + nCh2){
          const kk = k < 7 ? k : k - nCh - nCh2; spot = lineSpot(kk);
          face = kk === 0 ? Math.PI : faceAlong(spot, lineSpot(kk - 1)); P.sit = false;
        } else if (k - 7 < nCh){ spot = CHAIR(k - 7); spot = [spot[0] + 0.05, spot[1]]; face = Math.PI / 2; P.sit = true; }
        else { spot = CHAIR2(k - 7 - nCh); spot = [spot[0], spot[1] - 0.05]; face = Math.PI; P.sit = true; }
        P.goal = spot; P.face = face;
      }
      P.cid = c.by ? null : c.id;
      setEmoji(P.head, c.av);
      // настрій
      const r = c.pat / (c.max || 1), mood = c.by ? '' : r < 0.25 ? '😤' : r < 0.5 ? '😐' : '';
      P.mood.visible = !!mood; if (mood) setEmoji(P.mood, mood);
      P.carry.visible = c.kind === 'send' && !c.by;
    }
  }
  // хто пішов
  for (const [key, P] of R.people){
    if (P.mark === now || P.leaving) continue;
    if (key.startsWith('c') || key === 'insp'){
      const id = +key.slice(1), angry = key !== 'insp' && br.angry.delete(id);
      P.leaving = true; P.cid = null; P.sit = false; P.busy = false; P.mood.visible = angry;
      if (angry) setEmoji(P.mood, '😠');
      P.carry.visible = !angry && P.kindC === 'get';
      P.receipt.visible = !angry && P.kindC === 'send';
      const out = Math.random() < 0.5 ? 5.4 : -5.4;
      P.path = [DOOR_IN, [STREET, DOOR.z], [STREET, out]]; P.goal = null; P.exitZ = out;
    } else { removePerson(P); R.people.delete(key); }
  }
  R.seen = true;
  // склад, декор, покращення (рідше)
  if (now - (R.slow || 0) > 400){ R.slow = now; syncSlow(G, br); }
}
function syncSlow(G, br){
  placeBoxes(G);
  const wc = (br.WALLS[G.decor && G.decor.wall] || br.WALLS.cream)[1];
  if (R._wc !== wc){ R._wc = wc; R.wallMat.color.set(wc); }
  const items = (G.decor && G.decor.items) || {};
  for (const k in R.decor) R.decor[k].visible = !!items[k];
  const E = R.extras, U = G.up;
  if (R.mode !== 'hall'){ R.decor.clock.visible = false; R.decor.flag.visible = false; }
  E.chairs.forEach((c, j) => { c.visible = j < (U.chairs || 0) * 3; });
  const sp = U.space || 0;
  E.chairs2.forEach(c => { c.visible = sp >= 2; });
  R.ext5.visible = sp >= 1; R.barFull.visible = sp < 1; R.barShort.visible = sp >= 1;
  E.coffee.position.set(sp >= 1 ? 1.3 : 3.55, 0, sp >= 1 ? 4.1 : -1.2);
  E.coffee.visible = !!U.coffee; E.ac.visible = !!U.ac && R.mode === 'hall'; E.gen.visible = !!U.gen; E.ads.visible = !!U.ads;
  E.locker.visible = !!U.locker;
  if (U.locker){ const w = 0.6 + U.locker * 0.4; E.lockerBody.scale.z = w; E.lockerGrid.scale.x = w * 0.85; E.locker.position.z = 2.4 + w / 2; }
  R.scanner.visible = !!U.scanner;
  E.balloons.visible = !!(br.ev() || G.eve);
  const tier = U.tier || 0;
  R.tierText.visible = tier > 0;
  if (tier > 0){ R.tierText.material.map = plateTex(br.TIERS[tier] || '', {w: 512, h: 64, bg: '#1f3a5f', font: 'bold 36px system-ui,sans-serif', r: 10}); R.tierText.material.needsUpdate = true; }
  const nd = Math.round((G.dirt || 0) / 7);
  R.dirt.forEach((d, i) => { d.visible = i < nd; });
  const W = (br.WEATHER[G.weather] || {});
  const wet = !!W.wet, snow = G.weather === 'snow';
  R.precip.visible = wet; R.precip.material.color.set(snow ? 0xffffff : 0xaed6f1); R.precip.material.size = snow ? 0.09 : 0.05; R._snow = snow;
  R.street.material.color.set(snow ? 0xe8eef2 : wet ? 0x6f7275 : 0x9a9a96);
  R.manual = br.manual(); R.gen = !!(G.outage && G.outage.on && U.gen);
  R.time = G.time || 480;
}

/* ---------- анімація ---------- */
function animate(dt){
  const br = B(), G = br && br.g();
  R.t += dt;
  const spd = !G || br.paused() ? 0 : (G.settings.speed || 1);
  for (const [key, P] of R.people){
    stepPerson(P, dt, P.leaving ? Math.max(1, spd) : spd);
    if (key.startsWith('st')) storeAI(P, dt, spd);
    if (P.leaving && !P.path.length){ removePerson(P); R.people.delete(key); }
  }
  // двері
  let near = false;
  for (const P of R.people.values()) if (Math.hypot(P.pos.x - DOOR.x, P.pos.z - DOOR.z) < 1.6){ near = true; break; }
  R.doorOpen += ((near ? 1 : 0) - R.doorOpen) * Math.min(1, dt * 6);
  R.doorL.position.z = 1.15 - R.doorOpen * 0.62; R.doorR.position.z = 1.85 + R.doorOpen * 0.62;
  // кіт
  if (R.decor.cat.visible) catAI(dt, spd);
  // машина, ворота, рампа
  truckAnim(dt, spd);
  const gWant = (R.tState === 'docked' || (R.tState === 'arriving' && R.tx < 13)) ? 1 : 0;
  R.gateOpen += (gWant - R.gateOpen) * Math.min(1, dt * 2.5);
  { const sc = 1 - 0.88 * R.gateOpen; R.gate.scale.y = sc; R.gate.position.y = 2.52 - 1.25 * sc; }
  R.dockLight.material.color.set(R.tState === 'docked' ? 0x2ecc71 : 0xe74c3c);
  // кухня і туалет
  const kitchenBusy = [...R.people.values()].some(P => P.sit && inKitchen(P.pos.x, P.pos.z));
  R.steam.visible = kitchenBusy; if (kitchenBusy){ R.steam.position.y = 1.45 + (R.t * 0.4) % 0.3; R.steam.material.opacity = 1 - ((R.t * 0.4) % 0.3) / 0.3; }
  const wcBusy = [...R.people.values()].some(P => P.inWC === 2);
  R.wcDoor.rotation.y = wcBusy ? 0 : -1.3 * Math.min(1, 1);
  if (R._wcb !== wcBusy){ R._wcb = wcBusy; R.wcSign.material.map = plateTex(wcBusy ? '🚻 зайнято' : '🚻 вільно', {w: 220, h: 96, bg: wcBusy ? '#c0392b' : '#2e7d32', font: 'bold 40px system-ui,sans-serif', r: 10}); R.wcSign.material.needsUpdate = true; }
  // святкові вогники
  if (R.decor.garland.visible) R.garland.forEach((b, i) => { b.visible = Math.sin(R.t * 3 + i * 1.7) > -0.3; });
  if (R.decor.tree.visible) R.treeBalls.forEach((b, i) => { b.visible = Math.sin(R.t * 2.2 + i * 2.1) > -0.5; });
  // коробки на сортуванні їдуть по роликах
  R.sortBoxes.forEach((b, i) => { b.position.x = -1.0 + ((R.t * 0.25 * Math.max(spd, 0.2) + i * 0.7) % 2.1); });
  // риби
  if (R.decor.aquarium.visible) R.fish.forEach(f => { f._p += dt * (0.6 + f.id % 3 * 0.2); f.position.z = Math.sin(f._p) * 0.42; f.rotation.y = Math.cos(f._p) > 0 ? 0 : Math.PI; });
  // годинник
  const tm = R.time || 480;
  R.minHand.rotation.z = -((tm % 60) / 60) * Math.PI * 2; R.minHand.children[0].position.y = 0.1;
  R.hourHand.rotation.z = -(((tm / 60) % 12) / 12) * Math.PI * 2; R.hourHand.children[0].position.y = 0.07;
  // світло
  const dark = R.manual, flick = R.gen ? 0.85 + Math.sin(R.t * 23) * 0.05 : 1;
  const eve = clamp((tm - 1020) / 180, 0, 1);
  R.hemi.intensity = (dark ? 0.35 : 2.4) * flick; R.sun.intensity = (dark ? 0.12 : 1.5) * flick;
  R.sun.color.setRGB(1, 1 - eve * 0.15, 1 - eve * 0.35);
  R.torch.intensity = dark ? 9 : 0;
  R.scene.background.set(dark ? 0x101015 : eve > 0 ? 0x2d2621 : 0x2b2f36);
  const scr = dark ? 0x111111 : 0x6fb7e8;
  R.wins.forEach(w => w.screen.material.color.set(scr));
  R.tvScreen.material.color.setHSL(dark ? 0 : (R.t * 0.05) % 1, dark ? 0 : 0.6, dark ? 0.03 : 0.55);
  // опади
  if (R.precip.visible){
    const a = R.precip.geometry.attributes.position, v = R._snow ? 0.9 : 6;
    for (let i = 0; i < a.count; i++){ let y = a.getY(i) - v * dt; if (y < 0) y += 3.5; a.setY(i, y); if (R._snow) a.setX(i, a.getX(i) + Math.sin(R.t + i) * dt * 0.1); }
    a.needsUpdate = true;
  }
  // підказка
  if (R.hint && R.t > 6 && !R.hint.hidden){ R.hint.hidden = true; }
}
// маршрут через двері: зал ↔ склад, кухня, туалет
function routeTo(P, x, z){
  const fx = P.pos.x, fz = P.pos.z, path = [];
  if (inKitchen(fx, fz)) path.push([KITCHEN_DOOR[0], -8.2], [KITCHEN_DOOR[0], -7.1]);
  if (inWC(fx, fz)) path.push([WC_DOOR[0], -9.5], [WC_DOOR[0], -8.5]);
  const fHall = fz > BACK_Z, tHall = z > BACK_Z;
  if (fHall && !tHall) path.push([DOOR_BACK, -3.55], [DOOR_BACK, -5.4]);
  if (!fHall && tHall) path.push([DOOR_BACK, -5.4], [DOOR_BACK, -3.55]);
  if (inKitchen(x, z)) path.push([KITCHEN_DOOR[0], -7.1], [KITCHEN_DOOR[0], -8.2]);
  if (inWC(x, z)) path.push([WC_DOOR[0], -8.5], [WC_DOOR[0], -9.5]);
  P.path = path; P.goal = [x, z];
}
function chooseSpot(P){
  const G = B().g(), racks = clamp(G.up.shelves || 1, 1, 5), st = P.stRef || {};
  const docked = R.tState === 'docked', r = Math.random(), rnd = (a) => (Math.random() - 0.5) * a;
  const rack = () => ({x: RACK_X(Math.floor(Math.random() * racks)) + rnd(0.8), z: -3.35, face: Math.PI, carry: false});
  if (docked && R.tKind === 'in' && R.tCount > 0 && r < 0.75)
    return {x: 7.45, z: GATE_Z + rnd(0.9), face: Math.PI / 2, carry: false, wait: 0.7, chain: [{x: PILE[0] - 0.9, z: PILE[1] + rnd(0.5), face: Math.PI / 2, carry: true, wait: 0.5}]};
  const outN = (G.parcels || []).filter(p => p.state === 'outgoing').length;
  if (docked && R.tKind === 'out' && outN > 0 && r < 0.75)
    return {x: OUTCART[0] - 0.85, z: OUTCART[1] + rnd(0.4), face: Math.PI / 2, carry: false, wait: 0.5, chain: [{x: 7.45, z: GATE_Z + rnd(0.9), face: Math.PI / 2, carry: true, wait: 0.6}]};
  if (st.brk || ((st.fat || 0) > 55 && r < 0.3)){
    const used = new Set([...R.people.values()].filter(q => q !== P && q.goal).map(q => q.goal.join()));
    const ch = R.kChairs.find(c => !used.has(`${c[0]},${c[1]}`));
    if (ch) return {x: ch[0], z: ch[1], face: ch[2], carry: false, sit: true, mood: st.brk ? '🍽️' : '☕', wait: st.brk ? 3 : 5 + Math.random() * 4};
  }
  if (r < 0.05 && !R.wcBusy && ![...R.people.values()].some(q => q.inWC)) return {x: -2.85, z: -10.2, face: 0, carry: false, wc: true, wait: 3};
  const pool = [
    () => ({x: PILE[0] - 0.9, z: PILE[1] + rnd(0.5), face: Math.PI / 2, carry: false, wait: 0.8, chain: [{...rack(), carry: true}]}),
    rack, rack,
    () => ({x: 3.6 + rnd(0.6), z: -3.3, face: Math.PI, carry: false}),
    () => ({x: 2.2 + rnd(1.6), z: -6.65, face: Math.PI, carry: false, wait: 2 + Math.random() * 2}),
    () => ({x: -0.2 + Math.floor(Math.random() * 3) * 2.2 + rnd(0.8), z: -9.75, face: Math.PI, carry: false}),
    () => ({x: [-5.6, -3.2][Math.floor(Math.random() * 2)] + rnd(0.4), z: -4.95, face: Math.PI, carry: false, wait: 2 + Math.random() * 2}),
    () => ({x: OUTCART[0] - 0.85, z: OUTCART[1] + rnd(0.4), face: Math.PI / 2, carry: true}),
  ];
  return pool[Math.floor(Math.random() * pool.length)]();
}
function storeAI(P, dt, spd){
  const arrived = !P.path.length && (!P.goal || Math.hypot(P.goal[0] - P.pos.x, P.goal[1] - P.pos.z) <= 0.05);
  if (!arrived) return;
  if (P.inWC === 1){ P.inWC = 2; P.g.visible = false; }
  P.wait = (P.wait || 0) - dt * spd;
  if (P.wait > 0) return;
  if (P.inWC === 2){ P.inWC = 0; P.g.visible = true; }
  P.sit = false; P.mood.visible = false;
  const s = P.chain && P.chain.length ? P.chain.shift() : chooseSpot(P);
  if (s.chain) P.chain = s.chain;
  P.carry.visible = !!s.carry;
  routeTo(P, s.x, s.z); P.face = s.face; P.wait = s.wait ?? (1 + Math.random() * 2.5);
  if (s.sit){ P.sit = true; P.drop = 0.25; }
  if (s.mood){ P.mood.visible = true; setEmoji(P.mood, s.mood); }
  if (s.wc) P.inWC = 1;
}
function truckAnim(dt, spd){
  if (R.tState === 'away') return;
  const mv = Math.max(spd, 1);
  if (R.tState === 'arriving' || R.tState === 'docked'){
    const d = TRUCK_DOCK - R.tx;
    if (Math.abs(d) > 0.01){ R.tx += Math.sign(d) * Math.min(Math.abs(d), Math.max(0.5, Math.abs(d) * 1.4) * dt * mv); R.wheels.forEach(w => { w.rotation.y += dt * 6 * mv; }); }
    else { R.tx = TRUCK_DOCK; R.tState = 'docked'; }
    R.tDoor += ((R.tState === 'docked' ? 1 : 0) - R.tDoor) * Math.min(1, dt * 3);
  } else if (R.tState === 'leaving'){
    R.tDoor += (0 - R.tDoor) * Math.min(1, dt * 4);
    if (R.tDoor < 0.03){ R.tx += Math.max(0.6, (R.tx - TRUCK_DOCK) * 1.3 + 0.6) * dt * mv; R.wheels.forEach(w => { w.rotation.y -= dt * 6 * mv; }); }
    if (R.tx >= TRUCK_AWAY){ R.tx = TRUCK_AWAY; R.tState = 'away'; R.truck.visible = false; }
  }
  R.truck.position.x = R.tx;
  R.tDoors.forEach(p => { p.rotation.y = p._h * R.tDoor * 1.75; });
  const docked = R.tState === 'docked';
  placeTruckBoxes(docked || R.tState === 'arriving' ? R.tCount : (R._tbn || 0));
  R.driver.g.visible = docked;
  if (docked){ R.driver.g.position.set(R.tx + 1.4, 0, GATE_Z + 1.45); R.driver.g.rotation.y = -Math.PI / 2 + Math.sin(R.t * 0.7) * 0.3; }
}
function catAI(dt, spd){
  const C = R.catSt, g = R.decor.cat;
  const d = C.tgt.clone().sub(C.pos); d.y = 0; const dist = d.length();
  let walking = false;
  if (dist > 0.05){ const s = Math.min(dist, 0.55 * dt * Math.max(0.3, spd)); C.pos.addScaledVector(d.normalize(), s); C.yaw = angTo(C.yaw, Math.atan2(d.x, d.z), Math.min(1, dt * 6)); walking = true; }
  else { C.wait -= dt; if (C.wait <= 0){ C.tgt.set(-5.5 + Math.random() * 10, 0, 0.0 + Math.random() * 4.2); C.wait = 3 + Math.random() * 6; } }
  C.ph += dt * (walking ? 12 : 0);
  R.catLegs.forEach((l, i) => { l.rotation.x = walking ? Math.sin(C.ph + (i % 2 ? Math.PI : 0) + (i > 1 ? Math.PI : 0)) * 0.6 : 0; });
  R.catTail.rotation.y = Math.sin(R.t * 2) * 0.5;
  C.jump = Math.max(0, C.jump - dt * 2.5);
  g.position.set(C.pos.x, Math.sin(C.jump * Math.PI) * 0.45, C.pos.z); g.rotation.y = C.yaw;
}

/* ---------- камера і керування ---------- */
// режими камери: зал, підсобка (склад/рампа/кухня), все відділення
const VIEWS = {
  hall: {tg: [0.6, 0.5, 0.1], w: 8.2, wp: 6.6, h: 4.6, pitch: 0.78},
  back: {tg: [2.8, 0.5, -7.9], w: 10.6, wp: 9.0, h: 4.2, pitch: 0.98},
  all:  {tg: [2.6, 0.5, -3.4], w: 10.6, wp: 8.6, h: 7.4, pitch: 1.08},
};
function setMode(m){
  if (!R || !VIEWS[m]) return;
  R.mode = m; R.view.yaw = 0; R.view.pitch = VIEWS[m].pitch; R.view.zoom = 1;
  R.sep.visible = m === 'hall';
  if (R.ctl) R.ctl.querySelectorAll('[data-h3]').forEach(b => b.classList.toggle('on', b.dataset.h3 === m));
  R.slow = 0; placeCam();
}
function placeCam(){
  const cam = R.camera, V = R.view, M = VIEWS[R.mode] || VIEWS.hall;
  const vf = cam.fov * Math.PI / 180, hf = 2 * Math.atan(Math.tan(vf / 2) * cam.aspect);
  const need = Math.max((cam.aspect < 1.3 ? M.wp : M.w) / Math.tan(hf / 2), M.h / Math.tan(vf / 2));
  const dist = clamp(need, 9, 44) * V.zoom;
  const tg = new Vector3(...M.tg);
  cam.position.set(tg.x + dist * Math.sin(V.yaw) * Math.cos(V.pitch), tg.y + dist * Math.sin(V.pitch), tg.z + dist * Math.cos(V.yaw) * Math.cos(V.pitch));
  cam.lookAt(tg);
}
function resize(){
  if (!R) return;
  const w = R.el.clientWidth || 600, h = R.el.clientHeight || 260;
  R.renderer.setSize(w, h, false); R.camera.aspect = w / h; R.camera.updateProjectionMatrix(); placeCam();
}
function pick(ev){
  const rect = R.canvas.getBoundingClientRect();
  R.ptr.set(((ev.clientX - rect.left) / rect.width) * 2 - 1, -((ev.clientY - rect.top) / rect.height) * 2 + 1);
  R.ray.setFromCamera(R.ptr, R.camera);
  const objs = [];
  for (const P of R.people.values()) if (P.cid != null){ objs.push(P.body, P.head); }
  if (R.decor.cat.visible) objs.push(...R.decor.cat.children);
  const truckHit = R.tState === 'docked' && R.truck.visible;
  if (truckHit) objs.push(R.truckBoxes, ...R.truck.children[0].children);
  const hit = R.ray.intersectObjects(objs, false)[0];
  if (!hit) return null;
  if (hit.object.userData.P) return {P: hit.object.userData.P};
  if (truckHit && (hit.object === R.truckBoxes || R.truck.children[0].children.includes(hit.object))) return {truck: true};
  return {cat: true};
}
function bindInput(){
  const cv = R.canvas; let down = null;
  cv.addEventListener('pointerdown', e => { down = {x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId, yaw: R.view.yaw, pitch: R.view.pitch, moved: false}; });
  cv.addEventListener('pointermove', e => {
    if (down && down.id === e.pointerId){
      const dx = e.clientX - down.x, dy = e.clientY - down.y;
      if (Math.abs(dx) + Math.abs(dy) > 7) down.moved = true;
      if (down.moved){
        R.view.yaw = clamp(down.yaw - dx * 0.006, -1.0, 1.0);
        if (e.pointerType === 'mouse') R.view.pitch = clamp(down.pitch + dy * 0.004, 0.32, 1.35);
        placeCam(); if (R.hint) R.hint.hidden = true;
      }
    } else if (e.pointerType === 'mouse' && performance.now() - (R.hoverT || 0) > 60){
      R.hoverT = performance.now();
      const h = pick(e);
      for (const P of R.people.values()) P.hover = h && h.P === P;
      cv.style.cursor = h ? 'pointer' : 'grab';
    }
  });
  const up = e => {
    if (!down || down.id !== e.pointerId) return;
    const d = down; down = null;
    if (d.moved || performance.now() - d.t > 600) return;
    const h = pick(e);
    if (!h) return;
    if (h.truck){ B().act('unload3d', {dataset: {}}); return; }
    if (h.cat){ R.catSt.jump = 1; B().beep(880, 0.07, 'sine', 0.05); setTimeout(() => B().beep(660, 0.1, 'sine', 0.04), 90); return; }
    if (h.P.cid != null) B().act('serve', {dataset: {id: String(h.P.cid)}});
  };
  cv.addEventListener('pointerup', up);
  cv.addEventListener('pointercancel', () => { down = null; });
  cv.addEventListener('pointerleave', () => { for (const P of R.people.values()) P.hover = false; });
  R.ctl.addEventListener('click', e => {
    const b = e.target.closest('[data-h3]'); if (!b) return;
    e.stopPropagation();
    const k = b.dataset.h3;
    if (k === 'in') R.view.zoom = clamp(R.view.zoom * 0.85, 0.4, 1.4);
    else if (k === 'out') R.view.zoom = clamp(R.view.zoom / 0.85, 0.4, 1.4);
    else if (k === 'hall' || k === 'back' || k === 'all'){ setMode(k); R.userMode = true; return; }
    else { R.view.yaw = 0; R.view.pitch = VIEWS[R.mode].pitch; R.view.zoom = 1; }
    placeCam();
  });
}

/* ---------- життєвий цикл ---------- */
function loop(t){
  R.raf = 0;
  if (!R.el.isConnected || document.hidden){ R.running = false; return; }
  const dt = Math.min(0.05, (t - (R.last || t)) / 1000); R.last = t;
  animate(dt);
  R.renderer.render(R.scene, R.camera);
  R.raf = requestAnimationFrame(loop);
}
function ensureLoop(){ if (R && !R.running && R.el.isConnected && !document.hidden){ R.running = true; R.last = 0; R.raf = requestAnimationFrame(loop); } }

function ok(){
  if (ok.v === undefined){
    try { const c = document.createElement('canvas'); ok.v = !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); }
    catch (e){ ok.v = false; }
  }
  return ok.v;
}
function mount(el){
  if (R) dispose();
  const renderer = new WebGLRenderer({antialias: true, powerPreference: 'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  const canvas = renderer.domElement; canvas.className = 'h3d'; canvas.style.touchAction = 'pan-y';
  el.appendChild(canvas);
  const ctl = document.createElement('div'); ctl.className = 'h3dctl';
  ctl.innerHTML = '<button data-h3="hall" title="Зал">🏢</button><button data-h3="back" title="Склад і рампа">📦</button><button data-h3="all" title="Все відділення">🗺️</button><button data-h3="in" title="Ближче">＋</button><button data-h3="out" title="Далі">－</button><button data-h3="reset" title="Скинути камеру">⟲</button>';
  el.appendChild(ctl);
  const hint = document.createElement('div'); hint.className = 'h3dhint'; hint.textContent = '👆 Тапни клієнта, щоб обслужити · 📦 склад і рампа · тягни, щоб повернути камеру';
  el.appendChild(hint);
  const scene = new Scene(); scene.background = new Color(0x2b2f36);
  const camera = new PerspectiveCamera(38, 2, 0.5, 120);
  R = {el, renderer, canvas, ctl, hint, scene, camera, people: new Map(), view: {yaw: 0, pitch: 0.78, zoom: 1}, mode: 'hall', t: 0, doorOpen: 0, ray: new Raycaster(), ptr: new Vector2(), seen: false};
  R.hemi = new HemisphereLight(0xfff8ee, 0x9c8f7a, 2.4); scene.add(R.hemi);
  R.sun = new DirectionalLight(0xffffff, 1.5); R.sun.position.set(4, 10, 7); scene.add(R.sun);
  R.torch = new PointLight(0xffd59a, 0, 7, 1.6); R.torch.position.set(WX(1), 1.7, -1.0); scene.add(R.torch);
  buildRoom(); buildCounter(); buildStore(); buildBack(); buildExtras(); buildTruck();
  bindInput();
  R.ro = new ResizeObserver(resize); R.ro.observe(el);
  resize();
  document.addEventListener('visibilitychange', ensureLoop);
  sync();
}
function reset(){ if (!R) return; for (const P of R.people.values()) removePerson(P); R.people.clear(); R.seen = false; R.boxKey = null; R.tState = 'away'; R.tx = TRUCK_AWAY; R.truck.visible = false; R.tDoor = 0; R._tbn = -1; }
function dispose(){
  if (!R) return;
  if (R.raf) cancelAnimationFrame(R.raf);
  R.ro.disconnect(); document.removeEventListener('visibilitychange', ensureLoop);
  R.renderer.dispose(); try { R.renderer.forceContextLoss(); } catch (e){}
  R.canvas.remove(); R.ctl.remove(); R.hint.remove();
  cache.clear(); R = null;
}

// екранні координати клієнта (для тестів)
function screenOf(cid){
  if (!R) return null; const P = R.people.get('c' + cid); if (!P) return null;
  const v = new Vector3(P.pos.x, 1.0, P.pos.z).project(R.camera), r = R.canvas.getBoundingClientRect();
  return {x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height};
}
window.Hall3D = {ok, mount, sync, reset, dispose, screenOf, setMode: m => { if (R){ setMode(m); R.userMode = true; } }, get mode(){ return R && R.mode; }, get active(){ return !!R; }};
