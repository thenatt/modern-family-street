export const pritchettHouseSvg = `
<svg class="house-svg" viewBox="0 0 420 360" aria-hidden="true">
  <defs>
    <linearGradient id="ph-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6E5A48"/><stop offset="1" stop-color="#4E3E31"/></linearGradient>
    <linearGradient id="ph-slab" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F3EBDD"/><stop offset="1" stop-color="#CFC3AE"/></linearGradient>
    <linearGradient id="ph-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E3A57"/><stop offset="1" stop-color="#1D2538"/></linearGradient>
    <linearGradient id="ph-pool" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7BC8C4"/><stop offset="1" stop-color="#3E9A9A"/></linearGradient>
    <radialGradient id="ph-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#E5B25D" stop-opacity=".55"/><stop offset="1" stop-color="#E5B25D" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="210" cy="344" rx="215" ry="10" fill="#0B1020" opacity=".4"/>
  <ellipse data-part="glow" cx="230" cy="240" rx="210" ry="140" fill="url(#ph-glow)" opacity="0"/>

  <!-- pool glimpse + low wall, right -->
  <rect x="330" y="322" width="90" height="18" fill="url(#ph-pool)"/>
  <g class="ripple" fill="none" stroke="#F3EBDD" stroke-opacity=".5" stroke-width="1.5"><path d="M340 331q8-3 16 0t16 0"/><path d="M380 336q8-3 16 0t14 0"/></g>
  <rect x="322" y="300" width="98" height="24" fill="#3D3128"/><rect x="322" y="298" width="98" height="4" fill="#8A7861"/>

  <!-- palm -->
  <path d="M392 300c-6-50 6-90 14-120" fill="none" stroke="#5A4634" stroke-width="7" stroke-linecap="round"/>
  <g fill="#2F6B5B">
    <path d="M406 180c-28-10-52 6-60 26 30-6 48-12 60-26z"/><path d="M406 180c30-6 50 12 54 34-24-14-42-22-54-34z"/>
    <path d="M406 180c-4-30 12-46 30-52-8 20-18 38-30 52z"/><path d="M406 180c8-26 34-34 54-26-24 6-40 14-54 26z"/><path d="M406 180c-24-22-46-20-62-8 24 0 44 2 62 8z"/>
  </g>

  <!-- clerestory volume -->
  <rect x="120" y="120" width="220" height="60" fill="#3D3128"/>
  <g data-part="windows"><rect class="win" x="132" y="130" width="196" height="30" rx="1" fill="url(#ph-glass)"/></g>
  <path d="M110 124h250v8H110z" fill="url(#ph-slab)"/>
  <!-- main volume -->
  <rect x="40" y="176" width="340" height="164" fill="url(#ph-wall)"/>
  <g stroke="#3A2E24" stroke-width="1.4" opacity=".8">${Array.from({ length: 14 }, (_, i) => `<path d="M40 ${186 + i * 11}h340"/>`).join('')}</g>
  <path d="M20 170h380v10H20z" fill="url(#ph-slab)"/>
  <path d="M20 180h380v4H20z" fill="#2B2D42" opacity=".5"/>

  <!-- stone pillar -->
  <rect x="60" y="176" width="54" height="164" fill="#8A7E6B"/>
  <g fill="#7A6E5C">${[186, 206, 226, 246, 266, 286, 306, 326].map((y, i) => `<rect x="${i % 2 ? 66 : 62}" y="${y}" width="${i % 2 ? 22 : 30}" height="12" rx="2"/><rect x="${i % 2 ? 94 : 98}" y="${y}" width="${i % 2 ? 16 : 12}" height="12" rx="2"/>`).join('')}</g>
  <!-- house number plate -->
  <rect x="70" y="200" width="34" height="14" rx="2" fill="#E5B25D"/><text x="87" y="210.5" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" font-weight="600" fill="#14213D">PRITCHETT</text>

  <!-- glass wall -->
  <g data-part="windows">
    <rect class="win" x="196" y="190" width="160" height="150" fill="url(#ph-glass)"/>
    <g stroke="#3D3128" stroke-width="4"><path d="M250 190v150M304 190v150M196 260h160"/></g>
    <!-- interior silhouettes: floor lamp + recliner -->
    <g fill="#14213D" opacity=".85"><rect x="318" y="220" width="3" height="60"/><path d="M306 222h27l-4-14h-19z"/><path d="M214 300h50v30h-50zM214 270h14v30h-14z" /><rect x="222" y="286" width="46" height="14" rx="4"/></g>
  </g>

  <!-- door: fuchsia, Gloria's touch -->
  <rect data-part="doorway" x="134" y="256" width="52" height="84" fill="#E5B25D" opacity="0"/>
  <g data-part="door" style="transform-origin:134px 298px;transform-box:view-box">
    <rect x="134" y="256" width="52" height="84" rx="1" fill="#D63384"/>
    <rect x="134" y="256" width="52" height="84" fill="url(#p-linen)"/>
    <circle cx="176" cy="300" r="3.2" fill="#E5B25D"/>
    <rect x="140" y="262" width="40" height="4" fill="#B5286E"/>
  </g>
  <!-- planter with agave -->
  <rect x="140" y="322" width="44" height="18" fill="#2B2D42"/><rect x="138" y="320" width="48" height="4" fill="#E5B25D"/>
  <g fill="#3E9A9A"><path d="M162 322l-16-26 8 2zM162 322l-4-30 6 1zM162 322l6-30 4 3zM162 322l16-24-3 8zM162 322l-22-14 8-3zM162 322l22-12-6-3z"/></g>
  <!-- steps + path -->
  <rect x="120" y="333" width="80" height="7" fill="#CFC3AE"/>
</svg>`;
