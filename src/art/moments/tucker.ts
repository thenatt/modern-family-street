const MONO = "'IBM Plex Mono', Menlo, monospace";

const noteG = (x: number, y: number, c: string) => `<g fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round"><path d="M${x} ${y}v-18l9-3v16"/><circle cx="${x - 3}" cy="${y}" r="4" fill="${c}"/><circle cx="${x + 6}" cy="${y - 3}" r="4" fill="${c}"/></g>`;

export const circleOfLifeMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <g data-layer="1">
    <rect width="400" height="300" fill="#2A1520"/>
    <path d="M200-10L40 300h320z" fill="#D9A441" opacity=".16"/>
    <path d="M200-10L120 300h160z" fill="#D9A441" opacity=".14"/>
    <rect x="20" y="70" width="90" height="120" rx="3" fill="#3A1624"/><path d="M20 110h90M20 150h90" stroke="#4A1F2E" stroke-width="3"/>
  </g>
  <g data-layer="2">
    <circle cx="200" cy="112" r="24" fill="#F3D3B6"/>
    <path d="M176 108c-2-28 22-42 44-38 12 2 20 10 22 24-10-8-20-10-30-8-16 2-26 10-36 22z" fill="#A8794D"/>
    <circle cx="192" cy="114" r="2.6" fill="#1F2A33"/><circle cx="208" cy="114" r="2.6" fill="#1F2A33"/><path d="M190 124q10 10 20 0" fill="none" stroke="#1F2A33" stroke-width="2" stroke-linecap="round"/>
    <path d="M150 252v-90c0-20 22-30 50-30s50 10 50 30v90z" fill="#A9CBC0"/>
    <g stroke="#7BA1B8" stroke-width="2" opacity=".7"><path d="M150 180h100M150 210h100M175 136v116M200 132v120M225 136v116"/></g>
    <path d="M166 150c-6-30 4-60 22-80M234 150c6-30-4-60-22-80" fill="none" stroke="#A9CBC0" stroke-width="18" stroke-linecap="round"/>
    <circle cx="186" cy="66" r="10" fill="#F3D3B6"/><circle cx="214" cy="66" r="10" fill="#F3D3B6"/>
    <ellipse cx="200" cy="50" rx="24" ry="14" fill="#F2C6C2"/><circle cx="200" cy="30" r="14" fill="#E8C4A0"/><path d="M186 28c0-12 28-14 28-2-4-4-9-5-14-4-5 0-9 2-14 6z" fill="#1F1610"/><path d="M194 34q3 2 6 0M200 34q3 2 6 0" fill="none" stroke="#1F1610" stroke-width="1.4" stroke-linecap="round"/><circle cx="214" cy="20" r="4" fill="#E6473C"/>
  </g>
  <g data-layer="3">
    <g fill="#1B0B12">
      <circle cx="50" cy="262" r="24"/><path d="M10 300c0-20 18-30 40-30s40 10 40 30z"/>
      <circle cx="130" cy="272" r="24"/><path d="M90 300c0-16 18-24 40-24s40 8 40 24z"/>
      <circle cx="270" cy="272" r="24"/><path d="M230 300c0-16 18-24 40-24s40 8 40 24z"/>
      <circle cx="350" cy="262" r="24"/><path d="M310 300c0-20 18-30 40-30s40 10 40 30z"/>
    </g>
    ${noteG(300, 70, '#D9A441')}${noteG(96, 60, '#F2C6C2')}${noteG(330, 130, '#BFD8CF')}
  </g>
</svg>`;

export const fizboPartyMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <g data-layer="1">
    <rect width="400" height="300" fill="#BFD8CF"/>
    <rect y="206" width="400" height="94" fill="#6F8F6A"/>
    <path d="M0 40q100 40 200 0t200 0" fill="none" stroke="#4A1F2E" stroke-width="2"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => { const x = i * 42 + 10; const y = 40 + Math.sin((i / 9) * Math.PI) * 20; const c = ['#E6473C', '#D9A441', '#D63384', '#7BC8C4', '#FBF1EC'][i % 5]; return `<path d="M${x} ${y}l10 18 10-18z" fill="${c}"/>`; }).join('')}
    <g><circle cx="52" cy="120" r="18" fill="#E6473C"/><path d="M52 138v40" stroke="#4A1F2E" stroke-width="1.5"/><circle cx="76" cy="104" r="16" fill="#D9A441"/><path d="M76 120v58" stroke="#4A1F2E" stroke-width="1.5"/><circle cx="348" cy="112" r="18" fill="#D63384"/><path d="M348 130v48" stroke="#4A1F2E" stroke-width="1.5"/></g>
  </g>
  <g data-layer="2">
    <rect x="150" y="226" width="34" height="8" rx="4" fill="#FBF1EC"/><rect x="216" y="226" width="34" height="8" rx="4" fill="#FBF1EC"/>
    <ellipse cx="160" cy="220" rx="18" ry="11" fill="#E6473C"/><ellipse cx="240" cy="220" rx="18" ry="11" fill="#E6473C"/>
    <path d="M150 220v-60c0-30 20-46 50-46s50 16 50 46v60z" fill="#D9A441"/>
    <g fill="#E6473C"><circle cx="176" cy="150" r="5"/><circle cx="214" cy="140" r="5"/><circle cx="196" cy="176" r="5"/><circle cx="230" cy="184" r="5"/><circle cx="166" cy="192" r="5"/></g>
    <path d="M168 128c10-8 24-6 32-2s22 4 32-2" fill="none" stroke="#FBF1EC" stroke-width="10" stroke-linecap="round"/>
    <circle cx="200" cy="92" r="30" fill="#FBF1EC"/>
    <g fill="none" stroke-width="9" stroke-linecap="round"><path d="M170 74c-4-16 6-28 20-30" stroke="#E6473C"/><path d="M186 60c2-14 16-18 26-12" stroke="#D9A441"/><path d="M214 60c8-10 22-6 26 6" stroke="#7BC8C4"/><path d="M230 76c8-6 16 0 16 10" stroke="#D63384"/></g>
    <circle cx="188" cy="88" r="4" fill="#1F2A33"/><circle cx="212" cy="88" r="4" fill="#1F2A33"/><path d="M184 84l-6-6M216 84l6-6" stroke="#4A1F2E" stroke-width="2"/>
    <circle cx="200" cy="98" r="8" fill="#E6473C"/>
    <path d="M186 108q14 12 28 0" fill="none" stroke="#E6473C" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g data-layer="3">
    <g><circle cx="60" cy="196" r="12" fill="#E8C4A0"/><path d="M48 236v-30c0-8 5-12 12-12s12 4 12 12v30z" fill="#7BC8C4"/></g>
    <g><circle cx="96" cy="200" r="11" fill="#F3D3B6"/><path d="M86 236v-26c0-8 4-11 10-11s10 3 10 11v26z" fill="#D63384"/></g>
    <g><circle cx="330" cy="198" r="12" fill="#F6DCC6"/><path d="M318 236v-28c0-8 5-12 12-12s12 4 12 12v28z" fill="#E6473C"/></g>
    <g><rect x="352" y="206" width="40" height="18" rx="3" fill="#F2C6C2"/><rect x="356" y="196" width="32" height="12" rx="3" fill="#FBF1EC"/><path d="M366 196v-10M376 196v-10" stroke="#D9A441" stroke-width="3"/><circle cx="366" cy="184" r="2" fill="#E6473C"/><circle cx="376" cy="184" r="2" fill="#E6473C"/></g>
    <g fill="#E6473C" opacity=".85"><rect x="120" y="60" width="6" height="6" transform="rotate(20 123 63)"/><rect x="300" y="80" width="6" height="6" transform="rotate(-30 303 83)"/><rect x="260" y="40" width="5" height="5" transform="rotate(45 262 42)"/></g>
    <g fill="#D9A441" opacity=".85"><rect x="140" y="30" width="5" height="5" transform="rotate(10 142 32)"/><rect x="280" y="120" width="6" height="6" transform="rotate(30 283 123)"/><rect x="110" y="110" width="5" height="5"/></g>
  </g>
</svg>`;

export const flashMobMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <g data-layer="1">
    <rect width="400" height="300" fill="#F3EBDD"/>
    <rect x="20" y="30" width="360" height="130" rx="4" fill="#7BC8C4" opacity=".4"/><path d="M110 30v130M200 30v130M290 30v130M20 96h360" stroke="#F3EBDD" stroke-width="4"/>
    <rect x="20" y="30" width="360" height="22" fill="#4A1F2E"/><text x="200" y="46" text-anchor="middle" font-family="${MONO}" font-weight="600" font-size="10" letter-spacing="3" fill="#F3EBDD">FOOD COURT</text>
    <rect y="200" width="400" height="100" fill="#D8CDB9"/><g stroke="#C7BBA6" stroke-width="2">${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${i * 50 + 25} 200v100"/>`).join('')}<path d="M0 234h400M0 268h400"/></g>
  </g>
  <g data-layer="2">
    ${[60, 120, 280, 340].map((x, i) => `<g><circle cx="${x}" cy="${138}" r="14" fill="${['#E8C4A0', '#F6DCC6', '#E0B08A', '#F3D3B6'][i]}"/><path d="M${x - 16} 236v-64c0-12 8-20 16-20s16 8 16 20v64z" fill="#BFD8CF"/><path d="M${x - 14} 160l-18-${20 + i * 6}M${x + 14} 160l18-${28 - i * 4}" fill="none" stroke="${['#E8C4A0', '#F6DCC6', '#E0B08A', '#F3D3B6'][i]}" stroke-width="8" stroke-linecap="round"/><rect x="${x - 14}" y="200" width="10" height="36" fill="#2B2D42"/><rect x="${x + 4}" y="200" width="10" height="36" fill="#2B2D42"/></g>`).join('')}
  </g>
  <g data-layer="3">
    <g>
      <circle cx="200" cy="130" r="22" fill="#F6DCC6"/>
      <path d="M178 126c0-22 14-34 22-34 10 0 22 12 22 32-6-8-12-10-22-6-8-4-14-2-22 8z" fill="#C4623A"/>
      <path d="M182 136c2 14 8 22 18 22s16-8 18-22c-6 8-12 10-18 10s-12-2-18-10z" fill="#C4623A"/>
      <circle cx="192" cy="130" r="2.6" fill="#1F2A33"/><circle cx="208" cy="130" r="2.6" fill="#1F2A33"/>
      <path d="M176 240v-72c0-14 10-22 24-22s24 8 24 22v72z" fill="#BFD8CF"/>
      <path d="M178 156l-22-40M222 156l22-40" fill="none" stroke="#F6DCC6" stroke-width="10" stroke-linecap="round"/>
      <rect x="180" y="206" width="14" height="34" fill="#2B2D42"/><rect x="206" y="206" width="14" height="34" fill="#2B2D42"/>
    </g>
    <g transform="translate(360 150)">
      <circle cx="0" cy="0" r="14" fill="#F3D3B6"/><path d="M-14-2c0-16 10-24 16-22 8 0 14 8 14 20-6-6-12-6-16-4-4-2-8-2-14 6z" fill="#A8794D"/>
      <path d="M-14 86v-56c0-12 6-18 14-18s14 6 14 18v56z" fill="#A9CBC0"/>
      <path d="M-2 4a4 4 0 1 0 8 0" fill="#1F2A33"/>
      <path d="M12 26l10 6" stroke="#F3D3B6" stroke-width="7" stroke-linecap="round"/><rect x="18" y="34" width="18" height="24" rx="2" fill="#D63384"/>
    </g>
    <g fill="#E6473C"><path d="M150 84c0-6 8-6 8 0 0-6 8-6 8 0 0 6-8 12-8 12s-8-6-8-12z"/></g>
    <g stroke="#4A1F2E" stroke-width="2.5" stroke-linecap="round" opacity=".7"><path d="M130 100l-8-10M270 98l8-10M120 120l-10-2M280 118l10-2"/></g>
  </g>
</svg>`;
