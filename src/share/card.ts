import type { Character } from '../data/quiz';
import type { House, HouseId } from '../data/houses';

interface Palette { bg: string; surface: string; ink: string; ink2: string; ink3: string; accent: string; accent2: string; }
const PALETTES: Record<HouseId, Palette> = {
  dunphy: { bg: '#DCE3D0', surface: '#EAF0E1', ink: '#1F3E42', ink2: '#2F5D62', ink3: '#5F7F82', accent: '#E0A458', accent2: '#C4623A' },
  pritchett: { bg: '#14213D', surface: '#22335A', ink: '#F3EBDD', ink2: '#D8CDB9', ink3: '#9A9280', accent: '#E5B25D', accent2: '#D63384' },
  'tucker-pritchett': { bg: '#4A1F2E', surface: '#612C42', ink: '#FBF1EC', ink2: '#F2C6C2', ink3: '#C79A98', accent: '#BFD8CF', accent2: '#D9A441' },
};

const W = 1080; const H = 1350;
const SERIF = 'Fraunces, Georgia, serif';
const MONO = '"IBM Plex Mono", Menlo, monospace';

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(' '); const lines: string[] = []; let line = '';
  for (const w of words) { const t = line ? `${line} ${w}` : w; if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }
  if (line) lines.push(line);
  return lines;
}

function spaced(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, spacing: number, align: 'left' | 'center' = 'left') {
  const chars = Array.from(text);
  const total = chars.reduce((a, ch) => a + ctx.measureText(ch).width, 0) + spacing * (chars.length - 1);
  let cx = align === 'center' ? x - total / 2 : x;
  ctx.textAlign = 'left';
  for (const ch of chars) { ctx.fillText(ch, cx, y); cx += ctx.measureText(ch).width + spacing; }
}

async function svgToImage(svg: string): Promise<HTMLImageElement> {
  const clean = svg
    .replace(/<svg /, '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" ')
    .replace(/fill="url\(#[^)]*\)"/g, 'fill="none"');
  const url = URL.createObjectURL(new Blob([clean], { type: 'image/svg+xml' }));
  try {
    return await new Promise<HTMLImageElement>((res, rej) => { const img = new Image(); img.onload = () => res(img); img.onerror = rej; img.src = url; });
  } finally { setTimeout(() => URL.revokeObjectURL(url), 1000); }
}

/** Render a shareable 1080x1350 PNG of the quiz result. */
export async function renderShareCard(c: Character, h: House): Promise<Blob> {
  const p = PALETTES[h.id];
  await Promise.all([
    document.fonts.load(`500 90px ${SERIF}`), document.fonts.load(`italic 400 44px ${SERIF}`),
    document.fonts.load(`400 30px ${SERIF}`), document.fonts.load(`600 24px ${MONO}`),
  ]).catch(() => undefined);
  const portrait = await svgToImage(c.svg);

  const canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // background + texture
  ctx.fillStyle = p.bg; ctx.fillRect(0, 0, W, H);
  ctx.save(); ctx.globalAlpha = 0.14;
  if (h.id === 'pritchett') { for (let i = 0; i < 260; i++) { ctx.fillStyle = [p.accent, p.accent2, '#7BC8C4', '#F3EBDD'][i % 4]; ctx.beginPath(); ctx.ellipse((i * 137.5) % W, (i * 89.3) % H, 5 + (i % 4) * 2, 3 + (i % 3) * 2, (i % 7) * 0.4, 0, Math.PI * 2); ctx.fill(); } }
  else if (h.id === 'dunphy') { ctx.strokeStyle = p.ink; ctx.lineWidth = 1; for (let x = 0; x < W; x += 14) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); } for (let y = 0; y < H; y += 14) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); } }
  else { ctx.strokeStyle = p.ink2; ctx.lineWidth = 1.5; for (let y = 40; y < H; y += 120) for (let x = 40; x < W; x += 120) { ctx.beginPath(); ctx.ellipse(x, y, 34, 14, 0, 0, Math.PI * 2); ctx.stroke(); ctx.beginPath(); ctx.ellipse(x, y, 14, 34, 0, 0, Math.PI * 2); ctx.stroke(); } }
  ctx.restore();
  const glow = ctx.createRadialGradient(W * 0.78, 220, 10, W * 0.78, 220, 620);
  glow.addColorStop(0, `${p.accent}66`); glow.addColorStop(1, `${p.accent}00`);
  ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);

  // eyebrow
  ctx.fillStyle = p.ink3; ctx.font = `600 22px ${MONO}`; ctx.textBaseline = 'alphabetic';
  spaced(ctx, 'A MODERN FAMILY COLLECTIBLE ZONE', W / 2, 92, 6, 'center');

  // card
  const cx = 150, cy = 140, cw = 780, ch = 860;
  ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.45)'; ctx.shadowBlur = 70; ctx.shadowOffsetY = 40;
  ctx.fillStyle = p.surface; roundRect(ctx, cx, cy, cw, ch, 36); ctx.fill(); ctx.restore();
  ctx.save(); roundRect(ctx, cx, cy, cw, ch, 36); ctx.clip();
  ctx.drawImage(portrait, cx + (cw - 640) / 2, cy + 30, 640, 640);
  const scrim = ctx.createLinearGradient(0, cy + ch * 0.5, 0, cy + ch);
  scrim.addColorStop(0, `${p.surface}00`); scrim.addColorStop(0.55, p.surface);
  ctx.fillStyle = scrim; ctx.fillRect(cx, cy + ch * 0.5, cw, ch * 0.5);
  // foil stripe
  const foil = ctx.createLinearGradient(cx, cy, cx + cw, cy + ch);
  foil.addColorStop(0.3, 'rgba(255,255,255,0)'); foil.addColorStop(0.5, 'rgba(255,255,255,.14)'); foil.addColorStop(0.7, 'rgba(255,255,255,0)');
  ctx.fillStyle = foil; ctx.fillRect(cx, cy, cw, ch);
  ctx.strokeStyle = `${p.ink}22`; ctx.lineWidth = 2; roundRect(ctx, cx + 1, cy + 1, cw - 2, ch - 2, 35); ctx.stroke();
  ctx.restore();

  ctx.fillStyle = p.ink3; ctx.font = `600 22px ${MONO}`; spaced(ctx, 'YOU ARE', cx + 56, cy + ch - 190, 6);
  ctx.fillStyle = p.ink; ctx.font = `500 92px ${SERIF}`; ctx.textAlign = 'left'; ctx.fillText(c.name, cx + 52, cy + ch - 100);
  ctx.fillStyle = p.ink2; ctx.font = `600 22px ${MONO}`; spaced(ctx, c.role.toUpperCase(), cx + 56, cy + ch - 52, 5);

  // below the card
  let y = cy + ch + 96;
  ctx.fillStyle = p.accent; ctx.font = `italic 400 46px ${SERIF}`; ctx.textAlign = 'center'; ctx.fillText(h.name, W / 2, y);
  y += 62;
  ctx.fillStyle = p.ink2; ctx.font = `400 31px ${SERIF}`;
  for (const line of wrap(ctx, c.why, 820)) { ctx.fillText(line, W / 2, y); y += 44; }

  ctx.fillStyle = p.ink3; ctx.font = `600 20px ${MONO}`;
  spaced(ctx, 'WHICH HOUSEHOLD ARE YOU?  ·  SIX QUESTIONS  ·  ONE STREET', W / 2, H - 56, 5, 'center');

  return new Promise((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error('toBlob failed'))), 'image/png'));
}
