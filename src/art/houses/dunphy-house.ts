export const dunphyHouseSvg = `
<svg class="house-svg" viewBox="0 0 420 360" aria-hidden="true">
  <defs>
    <linearGradient id="dh-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D9CDB6"/><stop offset="1" stop-color="#BDAD92"/></linearGradient>
    <linearGradient id="dh-roof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7A5343"/><stop offset="1" stop-color="#4E3327"/></linearGradient>
    <linearGradient id="dh-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E3A57"/><stop offset="1" stop-color="#1D2538"/></linearGradient>
    <radialGradient id="dh-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#F6D9A0" stop-opacity=".55"/><stop offset="1" stop-color="#F6D9A0" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="210" cy="344" rx="215" ry="10" fill="#0B1020" opacity=".4"/>
  <ellipse data-part="glow" cx="255" cy="230" rx="200" ry="150" fill="url(#dh-glow)" opacity="0"/>

  <!-- garage -->
  <rect x="24" y="212" width="132" height="128" fill="url(#dh-wall)"/>
  <path d="M8 216 88 152l80 64z" fill="url(#dh-roof)"/>
  <path d="M8 216h160v6H8z" fill="#3A2519"/>
  <rect x="42" y="256" width="96" height="84" rx="2" fill="#B4A487"/>
  <g fill="#9E8E71"><rect x="48" y="264" width="84" height="14" rx="1"/><rect x="48" y="284" width="84" height="14" rx="1"/><rect x="48" y="304" width="84" height="14" rx="1"/></g>
  <rect x="42" y="256" width="96" height="84" rx="2" fill="url(#p-blinds)"/>
  <!-- hoop -->
  <rect x="150" y="196" width="4" height="144" fill="#3A3A3A"/><rect x="138" y="180" width="30" height="22" rx="2" fill="#EDE6D6"/><path d="M146 202h14l-2 8h-10z" fill="none" stroke="#E0A458" stroke-width="2"/>

  <!-- main block -->
  <rect x="152" y="126" width="252" height="214" fill="url(#dh-wall)"/>
  <rect x="152" y="126" width="252" height="214" fill="url(#p-linen)"/>
  <rect x="152" y="296" width="252" height="44" fill="#8A7E6B"/>
  <g fill="#7A6E5C"><rect x="160" y="302" width="26" height="10" rx="2"/><rect x="192" y="302" width="18" height="10" rx="2"/><rect x="216" y="302" width="30" height="10" rx="2"/><rect x="164" y="318" width="20" height="10" rx="2"/><rect x="190" y="318" width="34" height="10" rx="2"/><rect x="320" y="302" width="26" height="10" rx="2"/><rect x="352" y="302" width="20" height="10" rx="2"/><rect x="378" y="302" width="20" height="10" rx="2"/><rect x="326" y="318" width="34" height="10" rx="2"/><rect x="366" y="318" width="26" height="10" rx="2"/></g>
  <!-- roof -->
  <path d="M136 132 278 44l142 88z" fill="url(#dh-roof)"/>
  <path d="M136 132h284v8H136z" fill="#3A2519"/>
  <path d="M278 44l142 88h-14L278 60 150 132h-14z" fill="#8C6350" opacity=".5"/>
  <!-- chimney + smoke -->
  <rect x="352" y="62" width="26" height="70" fill="#7A6250"/><rect x="349" y="58" width="32" height="8" fill="#5C4638"/>
  <g data-part="smoke" fill="#DAD3C4" opacity=".0"><circle cx="365" cy="48" r="6"/><circle cx="371" cy="34" r="8"/><circle cx="362" cy="18" r="10"/></g>
  <!-- windows -->
  <g data-part="windows">
    <g><rect class="win" x="176" y="154" width="36" height="46" rx="2" fill="url(#dh-glass)"/><path d="M194 154v46M176 177h36" stroke="#3A2519" stroke-width="2"/><rect x="172" y="200" width="44" height="4" fill="#EDE6D6"/></g>
    <g><rect class="win" x="260" y="154" width="36" height="46" rx="2" fill="url(#dh-glass)"/><path d="M278 154v46M260 177h36" stroke="#3A2519" stroke-width="2"/><rect x="256" y="200" width="44" height="4" fill="#EDE6D6"/></g>
    <g><rect class="win" x="344" y="154" width="36" height="46" rx="2" fill="url(#dh-glass)"/><path d="M362 154v46M344 177h36" stroke="#3A2519" stroke-width="2"/><rect x="340" y="200" width="44" height="4" fill="#EDE6D6"/></g>
    <g><rect class="win" x="170" y="236" width="52" height="54" rx="2" fill="url(#dh-glass)"/><path d="M196 236v54M170 263h52" stroke="#3A2519" stroke-width="2"/><rect x="166" y="290" width="60" height="4" fill="#EDE6D6"/></g>
    <g><rect class="win" x="334" y="236" width="52" height="54" rx="2" fill="url(#dh-glass)"/><path d="M360 236v54M334 263h52" stroke="#3A2519" stroke-width="2"/><rect x="330" y="290" width="60" height="4" fill="#EDE6D6"/></g>
  </g>
  <!-- arched porch + door -->
  <path d="M240 340V262a38 38 0 0 1 76 0v78z" fill="#3B2A22"/>
  <rect data-part="doorway" x="254" y="262" width="48" height="78" fill="#F6D9A0" opacity="0"/>
  <g data-part="door" style="transform-origin:254px 300px;transform-box:view-box">
    <rect x="254" y="262" width="48" height="78" rx="2" fill="#8B3A2E"/>
    <rect x="260" y="270" width="36" height="28" rx="1" fill="#7A3227"/><rect x="260" y="304" width="36" height="28" rx="1" fill="#7A3227"/>
    <circle cx="294" cy="302" r="2.6" fill="#E5B25D"/>
  </g>
  <rect x="236" y="333" width="84" height="7" rx="1" fill="#A29684"/>
  <!-- porch lights -->
  <circle cx="236" cy="270" r="4" fill="#FFE9BE" class="porch-light"/><circle cx="320" cy="270" r="4" fill="#FFE9BE" class="porch-light"/>
  <!-- realtor sign -->
  <g data-part="sign" transform="translate(30 0)">
    <rect x="376" y="286" width="4" height="54" fill="#5C4638"/>
    <rect x="352" y="276" width="52" height="30" rx="2" fill="#F4EEE2" stroke="#2F5D62" stroke-width="2"/>
    <text x="378" y="288" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="6.5" font-weight="600" fill="#2F5D62" letter-spacing=".5">PHIL DUNPHY</text>
    <text x="378" y="298" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="5.5" fill="#C4623A" letter-spacing="1">REALTOR</text>
  </g>
  <!-- shrubs -->
  <ellipse cx="200" cy="336" rx="26" ry="12" fill="#2F5D62"/><ellipse cx="226" cy="338" rx="16" ry="9" fill="#3B7178"/>
  <ellipse cx="335" cy="337" rx="22" ry="11" fill="#2F5D62"/>
</svg>`;
