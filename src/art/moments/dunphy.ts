const MONO = "'IBM Plex Mono', Menlo, monospace";

export const banisterMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <g data-layer="1">
    <rect width="400" height="300" fill="#DCE3D0"/>
    <rect width="400" height="300" fill="url(#p-linen)"/>
    <rect x="262" y="38" width="98" height="108" rx="4" fill="#8FB0AC"/><rect x="268" y="44" width="86" height="96" fill="#C7DAD6"/><path d="M311 44v96M268 92h86" stroke="#F4EEE2" stroke-width="4"/>
    <rect x="40" y="58" width="60" height="74" rx="3" fill="#7A5343"/><rect x="46" y="64" width="48" height="62" fill="#E0A458"/><circle cx="70" cy="86" r="9" fill="#F1C9A5"/><path d="M56 122c2-14 8-20 14-20s12 6 14 20z" fill="#2F5D62"/>
    <rect y="236" width="400" height="64" fill="#B0866A"/><path d="M0 240h400" stroke="#8E6B52" stroke-width="3"/>
  </g>
  <g data-layer="2">
    <path d="M120 236V206h56v-30h56v-30h56v-30h56V86h56v150z" fill="#C7A27F"/>
    <g fill="#A87C5E"><rect x="120" y="206" width="56" height="6"/><rect x="176" y="176" width="56" height="6"/><rect x="232" y="146" width="56" height="6"/><rect x="288" y="116" width="56" height="6"/><rect x="344" y="86" width="56" height="6"/></g>
    <!-- Luke, behind the posts -->
    <rect x="216" y="172" width="34" height="40" rx="8" fill="#C4623A"/><path d="M216 184h34M216 196h34" stroke="#F4EEE2" stroke-width="5"/>
    <circle cx="232" cy="150" r="27" fill="#F3D3B6"/>
    <path d="M203 150c-2-30 60-38 58-6-4-6-10-6-14 0-6-8-14-8-22-2-8-6-14-4-22 8z" fill="#8A5A3C"/>
    <circle cx="222" cy="152" r="5" fill="#F4EEE2"/><circle cx="242" cy="152" r="5" fill="#F4EEE2"/><circle cx="223" cy="153" r="2.4" fill="#1F2A33"/><circle cx="243" cy="153" r="2.4" fill="#1F2A33"/>
    <ellipse cx="232" cy="168" rx="4" ry="5" fill="#1F2A33"/>
    <path d="M120 178L400 24" stroke="#7A5343" stroke-width="9" stroke-linecap="round"/>
    <g stroke="#F4EEE2" stroke-width="7" stroke-linecap="round"><path d="M148 206v-44M204 176v-44M260 146v-44M316 116v-44M372 86v-44"/></g>
  </g>
  <g data-layer="3">
    <g stroke="#2F5D62" stroke-width="3" stroke-linecap="round"><path d="M270 118l10-8M276 132l12-2M262 108l4-12"/></g>
    <text x="300" y="112" font-family="${MONO}" font-weight="600" font-size="22" fill="#C4623A">!</text>
    <path d="M60 176c10-16 26-18 40-10l-10 14c-8-4-16-4-24 2z" fill="#F1C9A5"/><path d="M40 190c6-12 14-16 22-14l-6 14c-6 0-10 0-16 0z" fill="#2F5D62"/>
  </g>
</svg>`;

export const bbGunMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <defs><linearGradient id="bb-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3D9A8"/><stop offset="1" stop-color="#E9B27A"/></linearGradient></defs>
  <g data-layer="1">
    <rect width="400" height="300" fill="url(#bb-sky)"/>
    <circle cx="80" cy="70" r="26" fill="#FFE9BE"/>
    <rect y="150" width="400" height="90" fill="#A87C5E"/>
    <g stroke="#8E6B52" stroke-width="3">${Array.from({ length: 16 }, (_, i) => `<path d="M${i * 26 + 12} 150v90"/>`).join('')}</g>
    <rect y="146" width="400" height="8" fill="#7A5343"/>
    <rect y="236" width="400" height="64" fill="#6F8F6A"/>
  </g>
  <g data-layer="2">
    <circle cx="200" cy="118" r="66" fill="#F4EEE2" stroke="#2F5D62" stroke-width="7"/>
    <g stroke="#2F5D62" stroke-width="3" stroke-linecap="round"><path d="M200 60v10M258 118h-10M200 176v-10M142 118h10"/></g>
    <path d="M200 118l32 25" stroke="#1F2A33" stroke-width="6" stroke-linecap="round"/>
    <path d="M200 118h50" stroke="#1F2A33" stroke-width="4" stroke-linecap="round"/>
    <circle cx="200" cy="118" r="5" fill="#C4623A"/>
    <rect x="164" y="196" width="72" height="24" rx="4" fill="#2F5D62"/>
    <text x="200" y="213" text-anchor="middle" font-family="${MONO}" font-weight="600" font-size="13" letter-spacing="1" fill="#F4EEE2">4:15 PM</text>
  </g>
  <g data-layer="3" fill="#1F3E42">
    <circle cx="336" cy="150" r="15"/><path d="M314 236v-52c0-12 10-20 22-20s22 8 22 20v52z"/>
    <rect x="258" y="176" width="66" height="7" rx="3"/><rect x="316" y="170" width="16" height="16" rx="4"/>
    <circle cx="66" cy="194" r="10"/><path d="M52 236l4-30c2-6 6-8 10-8s8 2 10 8l4 30h-8l-6-16-6 16z"/><path d="M42 214l12-8M96 216l-12-10" stroke="#1F3E42" stroke-width="5" stroke-linecap="round"/>
    <g stroke="#1F3E42" stroke-width="2" stroke-dasharray="2 6"><path d="M256 180L120 198"/></g>
  </g>
</svg>`;

export const stepFixedMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <g data-layer="1">
    <rect width="400" height="300" fill="#DCE3D0"/>
    <rect width="400" height="300" fill="url(#p-linen)"/>
    <rect x="300" y="50" width="60" height="74" rx="3" fill="#7A5343"/><rect x="306" y="56" width="48" height="62" fill="#2F5D62"/><g fill="#F1C9A5"><circle cx="322" cy="86" r="6"/><circle cx="340" cy="86" r="6"/><circle cx="331" cy="100" r="5"/></g>
    <rect y="236" width="400" height="64" fill="#B0866A"/><path d="M0 240h400" stroke="#8E6B52" stroke-width="3"/>
  </g>
  <g data-layer="2">
    <path d="M0 236V206h56v-30h56v-30h56v-30h56V86h56v150z" fill="#C7A27F"/>
    <g fill="#A87C5E"><rect x="0" y="206" width="56" height="6"/><rect x="56" y="176" width="56" height="6"/><rect x="112" y="146" width="56" height="6"/><rect x="168" y="116" width="56" height="6"/><rect x="224" y="86" width="56" height="6"/></g>
    <rect x="300" y="196" width="76" height="40" rx="5" fill="#C4623A"/><rect x="326" y="186" width="24" height="12" rx="4" fill="none" stroke="#1F2A33" stroke-width="4"/><rect x="300" y="210" width="76" height="4" fill="#8B3A2E"/>
    <rect x="286" y="180" width="6" height="56" rx="2" fill="#7A5343" transform="rotate(-16 289 208)"/><rect x="272" y="170" width="30" height="14" rx="3" fill="#8F8A80" transform="rotate(-16 287 177)"/>
  </g>
  <g data-layer="3">
    <rect x="110" y="142" width="60" height="12" rx="2" fill="none" stroke="#E0A458" stroke-width="4"/>
    <g fill="#E0A458">
      <path d="M96 132l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/><path d="M182 126l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z"/><path d="M146 120l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>
    </g>
    <rect x="112" y="100" width="56" height="20" rx="3" fill="#2F5D62"/><text x="140" y="114" text-anchor="middle" font-family="${MONO}" font-weight="600" font-size="10" letter-spacing="1.5" fill="#F4EEE2">FIXED</text>
    <g transform="translate(30 150)"><rect x="0" y="16" width="30" height="26" rx="8" fill="#F1C9A5"/><rect x="8" y="0" width="10" height="22" rx="5" fill="#F1C9A5"/><rect x="-10" y="26" width="14" height="16" rx="4" fill="#2F5D62"/></g>
  </g>
</svg>`;
