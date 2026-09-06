const MONO = "'IBM Plex Mono', Menlo, monospace";

export const ponchoMallMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <g data-layer="1">
    <rect width="400" height="300" fill="#F3EBDD"/>
    <rect x="16" y="36" width="164" height="160" rx="4" fill="#7BC8C4" opacity=".55"/><rect x="16" y="36" width="164" height="26" fill="#14213D"/><text x="98" y="54" text-anchor="middle" font-family="${MONO}" font-weight="600" font-size="11" letter-spacing="2" fill="#F3EBDD">SHOES</text>
    <path d="M98 62v134M16 130h164" stroke="#F3EBDD" stroke-width="4"/>
    <rect x="220" y="36" width="164" height="160" rx="4" fill="#E5B25D" opacity=".45"/><rect x="220" y="36" width="164" height="26" fill="#D63384"/><text x="302" y="54" text-anchor="middle" font-family="${MONO}" font-weight="600" font-size="11" letter-spacing="2" fill="#F3EBDD">PRETZELS</text>
    <path d="M302 62v134M220 130h164" stroke="#F3EBDD" stroke-width="4"/>
    <rect y="196" width="400" height="104" fill="#D8CDB9"/>
    <g stroke="#C7BBA6" stroke-width="2">${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${i * 50 + 25} 196v104"/>`).join('')}<path d="M0 230h400M0 264h400"/></g>
  </g>
  <g data-layer="2">
    <circle cx="200" cy="112" r="20" fill="#E6B896"/>
    <path d="M180 110c0-22 40-26 40-2-6-6-12-8-20-6-8 2-14 4-20 8z" fill="#1F1610"/>
    <circle cx="193" cy="114" r="2.2" fill="#1F1610"/><circle cx="207" cy="114" r="2.2" fill="#1F1610"/><path d="M194 123q6 5 12 0" fill="none" stroke="#1F1610" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M200 130l-62 96h124z" fill="#D63384"/>
    <path d="M150 208h100" stroke="#E5B25D" stroke-width="8"/><path d="M160 190h80" stroke="#F3EBDD" stroke-width="5"/><path d="M172 172h56" stroke="#7BC8C4" stroke-width="6"/>
    <g stroke="#D63384" stroke-width="3">${Array.from({ length: 15 }, (_, i) => `<path d="M${140 + i * 8.5} 226v12"/>`).join('')}</g>
    <rect x="188" y="238" width="10" height="30" fill="#3A1E2A"/><rect x="204" y="238" width="10" height="30" fill="#3A1E2A"/>
    <g transform="rotate(-20 246 176)">${[0, 1, 2, 3, 4].map((i) => `<rect x="${234 + i * 6}" y="${168 + i * 3}" width="5" height="${28 - i * 3}" rx="1.5" fill="#C9A46A"/>`).join('')}</g>
  </g>
  <g data-layer="3">
    <circle cx="330" cy="120" r="17" fill="#EFC1A0"/><path d="M314 116c2-14 12-20 20-20 8 0 14 4 16 12-8-4-16-4-24-2-6 2-8 6-12 10z" fill="#B9B9B9"/>
    <path d="M304 226v-70c0-14 12-22 26-22s26 8 26 22v70z" fill="#14213D"/>
    <path d="M318 118c6-10 14-12 22-8" fill="none" stroke="#EFC1A0" stroke-width="9" stroke-linecap="round"/>
    <circle cx="82" cy="140" r="13" fill="#E8C4A0"/><path d="M70 138c0-16 24-20 24-4z" fill="#5A3A2A"/><path d="M68 226v-62c0-10 6-16 14-16s14 6 14 16v62z" fill="#7BC8C4"/>
    <g fill="#D63384"><path d="M236 92c0-6 8-6 8 0 0-6 8-6 8 0 0 6-8 12-8 12s-8-6-8-12z"/><path d="M256 72c0-4 6-4 6 0 0-4 6-4 6 0 0 5-6 9-6 9s-6-4-6-9z"/></g>
    <g fill="none" stroke="#E5B25D" stroke-width="2.4" stroke-linecap="round"><path d="M270 150v-16l8-2v14"/><circle cx="268" cy="150" r="3.5" fill="#E5B25D"/><circle cx="276" cy="147" r="3.5" fill="#E5B25D"/></g>
  </g>
</svg>`;

export const meetStellaMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <g data-layer="1">
    <rect width="400" height="300" fill="#14213D"/>
    <g stroke="#3D3128" stroke-width="3">${Array.from({ length: 14 }, (_, i) => `<path d="M0 ${20 + i * 14}h400"/>`).join('')}</g>
    <rect x="40" y="40" width="120" height="120" rx="3" fill="#E5B25D" opacity=".85"/><path d="M100 40v120M40 100h120" stroke="#14213D" stroke-width="6"/>
    <rect y="210" width="400" height="90" fill="#22335A"/><rect y="210" width="400" height="90" fill="url(#p-terrazzo)"/>
  </g>
  <g data-layer="2">
    <circle cx="290" cy="112" r="21" fill="#EFC1A0"/><path d="M270 108c2-18 14-24 24-24s18 6 20 16c-10-6-20-6-30-2-6 2-10 6-14 10z" fill="#B9B9B9"/>
    <path d="M280 112q6-5 12 0" fill="none" stroke="#7C7C7C" stroke-width="3" stroke-linecap="round"/>
    <path d="M254 226v-56c0-20 14-34 36-34s36 14 36 34v56z" fill="#3D5A9E"/><path d="M276 140l14 10 14-10" fill="none" stroke="#F3EBDD" stroke-width="5"/>
    <path d="M262 170c-16 6-28 20-34 36" fill="none" stroke="#EFC1A0" stroke-width="11" stroke-linecap="round"/>
    <path d="M254 226h72v10h-72z" fill="#2B2D42"/>
  </g>
  <g data-layer="3">
    <g transform="translate(110 190)">
      <ellipse cx="0" cy="18" rx="30" ry="18" fill="#E8D3B8"/><ellipse cx="6" cy="22" rx="16" ry="10" fill="#F7EFE3"/>
      <circle cx="30" cy="4" r="18" fill="#E8D3B8"/><ellipse cx="34" cy="10" rx="10" ry="7" fill="#F7EFE3"/>
      <path d="M18-8c-4-16 2-28 6-32 4 6 6 18 4 30zM40-8c4-16-2-28-6-32-4 6-6 18-4 30z" fill="#E8D3B8"/>
      <circle cx="24" cy="2" r="3" fill="#1F1610"/><circle cx="38" cy="2" r="3" fill="#1F1610"/><path d="M28 10c0-3 8-3 8 0s-2 4-4 4-4-1-4-4z" fill="#1F1610"/>
      <path d="M-14 30l-8 12M0 34l-2 14M14 34l4 14M-24 10l-12-4" stroke="#E8D3B8" stroke-width="7" stroke-linecap="round"/>
      <rect x="10" y="-2" width="30" height="6" rx="3" fill="#E5B25D" transform="rotate(-10 25 1)"/>
    </g>
    <g fill="#D63384"><path d="M180 140c0-6 8-6 8 0 0-6 8-6 8 0 0 6-8 12-8 12s-8-6-8-12z"/><path d="M204 118c0-4 6-4 6 0 0-4 6-4 6 0 0 5-6 9-6 9s-6-4-6-9z"/><path d="M160 122c0-3 4-3 4 0 0-3 4-3 4 0 0 4-4 6-4 6s-4-2-4-6z"/></g>
    <g stroke="#7BC8C4" stroke-width="3" stroke-linecap="round" opacity=".8"><path d="M50 200h20M40 214h26M52 228h18"/></g>
  </g>
</svg>`;

export const fulgencioMoment = `
<svg viewBox="0 0 400 300" aria-hidden="true">
  <g data-layer="1">
    <rect width="400" height="300" fill="#2B2D42"/>
    <path d="M140 200V110a60 60 0 0 1 120 0v90z" fill="#14213D"/>
    <g>
      <path d="M148 200v-86a52 52 0 0 1 52-52v138z" fill="#E5B25D" opacity=".8"/><path d="M200 62a52 52 0 0 1 52 52v86h-52z" fill="#D63384" opacity=".8"/>
      <path d="M148 140h104M148 170h104M200 62v138M174 78v122M226 78v122" stroke="#2B2D42" stroke-width="4"/>
      <circle cx="200" cy="112" r="16" fill="#7BC8C4" opacity=".9"/>
    </g>
    <g fill="#1B1D30">${[0, 1, 2].map((i) => `<rect x="20" y="${236 + i * 22}" width="120" height="12" rx="2"/><rect x="260" y="${236 + i * 22}" width="120" height="12" rx="2"/>`).join('')}</g>
  </g>
  <g data-layer="2">
    <path d="M176 236h48l-6-30h-36z" fill="#8F8A80"/><ellipse cx="200" cy="206" rx="30" ry="8" fill="#B9B9B9"/><ellipse cx="200" cy="205" rx="22" ry="5" fill="#7BC8C4"/>
    <circle cx="130" cy="136" r="18" fill="#EFC1A0"/><path d="M113 132c2-16 12-22 20-22s14 4 16 12c-8-4-16-4-24-2-4 2-8 6-12 12z" fill="#B9B9B9"/><path d="M104 236v-64c0-16 12-26 26-26s26 10 26 26v64z" fill="#3A2519"/><path d="M120 150l10 10 10-10" fill="none" stroke="#F3EBDD" stroke-width="4"/>
    <circle cx="272" cy="134" r="18" fill="#E0B08A"/><path d="M250 150c0-34 44-40 44-6-6-8-14-12-22-10-10 2-16 8-22 16z" fill="#2B1D16"/><path d="M246 236v-62c0-16 12-26 26-26s26 10 26 26v62z" fill="#D63384"/>
    <path d="M150 166c14 6 24 6 40 0M250 166c-14 6-24 6-40 0" fill="none" stroke="#EFC1A0" stroke-width="10" stroke-linecap="round"/>
    <ellipse cx="200" cy="170" rx="30" ry="16" fill="#F3EBDD"/><circle cx="200" cy="158" r="12" fill="#E8C4A0"/><g fill="#1F1610"><circle cx="192" cy="150" r="4"/><circle cx="200" cy="146" r="4"/><circle cx="208" cy="150" r="4"/></g><path d="M196 160q4 3 8 0" fill="none" stroke="#1F1610" stroke-width="1.5"/>
  </g>
  <g data-layer="3">
    <circle cx="200" cy="150" r="30" fill="none" stroke="#E5B25D" stroke-width="3" opacity=".8"/>
    <g fill="#E5B25D"><path d="M200 96l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/></g>
    <g fill="#D63384" opacity=".8"><circle cx="70" cy="60" r="3"/><circle cx="330" cy="50" r="3"/><circle cx="90" cy="90" r="2.4"/><circle cx="312" cy="96" r="2.4"/><circle cx="50" cy="130" r="2"/><circle cx="350" cy="140" r="2"/></g>
    <g fill="#7BC8C4" opacity=".8"><circle cx="110" cy="44" r="2.4"/><circle cx="290" cy="30" r="2.4"/><circle cx="360" cy="80" r="2"/></g>
    <rect x="150" y="256" width="100" height="22" rx="3" fill="#E5B25D"/><text x="200" y="271" text-anchor="middle" font-family="${MONO}" font-weight="600" font-size="10" letter-spacing="2" fill="#14213D">FULGENCIO</text>
  </g>
</svg>`;
