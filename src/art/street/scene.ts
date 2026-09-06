/** Layered dusk street scene. Each layer is its own SVG so it can parallax independently. */

const stars = Array.from({ length: 70 }, (_, i) => {
  const x = (i * 137.5) % 1600; const y = ((i * 89.3) % 380) + 10; const r = 0.6 + ((i * 7) % 5) * 0.28;
  return `<circle class="star" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" style="--d:${(i % 7) * 0.45}s"/>`;
}).join('');

export const skySvg = `
<svg class="scene__sky" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <linearGradient id="sky-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0F1526"/>
      <stop offset="0.42" stop-color="#1F2A4A"/>
      <stop offset="0.72" stop-color="#5A4467"/>
      <stop offset="0.88" stop-color="#C97B4E"/>
      <stop offset="1" stop-color="#E0A458"/>
    </linearGradient>
    <radialGradient id="sun-g" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#FFE6B0"/><stop offset="0.6" stop-color="#F6C46A"/><stop offset="1" stop-color="#E0A458" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky-g)"/>
  <g fill="#F6D9A0">${stars}</g>
  <circle class="scene__sun" cx="1180" cy="700" r="150" fill="url(#sun-g)" opacity=".9"/>
  <circle cx="1180" cy="700" r="62" fill="#FFE2A8"/>
</svg>`;

const cloud = (x: number, y: number, s: number, o: number) => `
  <g class="cloud" transform="translate(${x} ${y}) scale(${s})" opacity="${o}">
    <ellipse cx="0" cy="0" rx="90" ry="26" fill="#6E5A7A"/>
    <ellipse cx="-40" cy="-10" rx="46" ry="26" fill="#7B6588"/>
    <ellipse cx="20" cy="-16" rx="56" ry="32" fill="#7B6588"/>
    <ellipse cx="60" cy="-4" rx="40" ry="22" fill="#6E5A7A"/>
    <ellipse cx="10" cy="6" rx="100" ry="14" fill="#D68A5C" opacity=".35"/>
  </g>`;

export const cloudsSvg = `
<svg class="scene__clouds" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  ${cloud(240, 300, 1, 0.8)}${cloud(700, 220, 0.7, 0.6)}${cloud(1250, 330, 1.2, 0.85)}${cloud(1500, 180, 0.55, 0.5)}${cloud(20, 420, 0.8, 0.6)}
</svg>`;

export const hillsSvg = `
<svg class="scene__hills" viewBox="0 0 1600 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
  <path d="M0 240C180 200 300 140 520 170S900 260 1120 200 1450 120 1600 180V420H0Z" fill="#3B2F52"/>
  <path d="M0 300C200 250 380 220 600 250S980 330 1200 280 1450 240 1600 270V420H0Z" fill="#2A2340"/>
  <g fill="#211B33">
    <path d="M60 300l10-22 10 22zM90 305l8-18 8 18zM1380 285l10-24 10 24zM1410 290l8-18 8 18zM1450 280l12-26 12 26z"/>
  </g>
</svg>`;

const lamp = (x: number) => `
  <g class="lamp" transform="translate(${x} 0)">
    <rect x="-3" y="60" width="6" height="150" fill="#1A1622"/>
    <rect x="-10" y="205" width="20" height="10" rx="2" fill="#1A1622"/>
    <path d="M-14 62h28l-4-14h-20z" fill="#1A1622"/>
    <circle class="lamp__glow" cx="0" cy="54" r="46" fill="#F6D9A0" opacity=".12"/>
    <circle class="lamp__glow2" cx="0" cy="54" r="14" fill="#FFE9BE" opacity=".9"/>
    <circle cx="0" cy="54" r="7" fill="#FFF7E4"/>
  </g>`;

export const streetSvg = `
<svg class="scene__street" viewBox="0 0 1600 220" preserveAspectRatio="none" aria-hidden="true">
  <rect width="1600" height="60" fill="#26304A"/>
  <rect y="58" width="1600" height="6" fill="#141A2C"/>
  <rect y="64" width="1600" height="156" fill="#1B2233"/>
  <g stroke="#E0A458" stroke-opacity=".5" stroke-width="4" stroke-dasharray="46 40"><path d="M0 142H1600"/></g>
  <g fill="#9BA4B8" opacity=".18"><rect y="60" width="1600" height="2"/></g>
</svg>`;

export const lampsSvg = `
<svg class="scene__lamps" viewBox="0 0 1600 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
  ${lamp(120)}${lamp(560)}${lamp(1040)}${lamp(1480)}
</svg>`;

export const foregroundSvg = `
<svg class="scene__fg" viewBox="0 0 1600 120" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
  <g fill="#0F1320">
    <path d="M0 120V70h1600v50z"/>
    <g>
      ${Array.from({ length: 40 }, (_, i) => `<rect x="${i * 40 + 6}" y="46" width="12" height="40" rx="2"/>`).join('')}
      <rect y="56" width="1600" height="6"/><rect y="74" width="1600" height="6"/>
    </g>
    <g transform="translate(330 30)"><rect x="-4" y="10" width="8" height="60"/><rect x="-22" y="-6" width="44" height="26" rx="6"/><rect x="18" y="-14" width="4" height="12"/></g>
    <g transform="translate(1290 30)"><rect x="-4" y="10" width="8" height="60"/><rect x="-22" y="-6" width="44" height="26" rx="6"/></g>
  </g>
</svg>`;

export const firefliesHtml = Array.from({ length: 22 }, (_, i) => {
  const x = (i * 61) % 100; const y = 30 + ((i * 37) % 55); const d = 5 + (i % 5) * 1.6; const delay = (i * 0.7) % 6;
  return `<span class="firefly" style="--x:${x}%;--y:${y}%;--d:${d}s;--delay:${delay}s"></span>`;
}).join('');
