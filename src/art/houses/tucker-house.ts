export const tuckerHouseSvg = `
<svg class="house-svg" viewBox="0 0 420 360" aria-hidden="true">
  <defs>
    <linearGradient id="th-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FA6A0"/><stop offset="1" stop-color="#6B8580"/></linearGradient>
    <linearGradient id="th-roof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A3140"/><stop offset="1" stop-color="#3A1E2A"/></linearGradient>
    <linearGradient id="th-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E3A57"/><stop offset="1" stop-color="#1D2538"/></linearGradient>
    <radialGradient id="th-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#F2C6C2" stop-opacity=".55"/><stop offset="1" stop-color="#F2C6C2" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="210" cy="344" rx="205" ry="10" fill="#0B1020" opacity=".4"/>
  <ellipse data-part="glow" cx="210" cy="240" rx="200" ry="140" fill="url(#th-glow)" opacity="0"/>

  <!-- main body -->
  <rect x="60" y="170" width="300" height="170" fill="url(#th-wall)"/>
  <g stroke="#5E756F" stroke-width="1.2" opacity=".7">${Array.from({ length: 15 }, (_, i) => `<path d="M60 ${180 + i * 11}h300"/>`).join('')}</g>
  <!-- roof: low pitch -->
  <path d="M40 176 210 86l170 90z" fill="url(#th-roof)"/>
  <path d="M40 176h340v8H40z" fill="#2B1520"/>
  <path d="M210 86l170 90h-16L210 104 66 176H50z" fill="#7A4D5E" opacity=".45"/>
  <!-- attic window (round) -->
  <circle cx="210" cy="140" r="14" fill="#2B1520"/><circle class="win" cx="210" cy="140" r="10" fill="url(#th-glass)"/><path d="M210 130v20M200 140h20" stroke="#2B1520" stroke-width="2"/>
  <!-- chimney + smoke -->
  <rect x="300" y="108" width="22" height="60" fill="#7A5A62"/><rect x="297" y="104" width="28" height="8" fill="#5A3140"/>
  <g data-part="smoke" fill="#EBDDE0" opacity="0"><circle cx="311" cy="94" r="6"/><circle cx="317" cy="80" r="8"/><circle cx="308" cy="64" r="10"/></g>

  <!-- porch roof (gable) -->
  <path d="M110 232 210 176l100 56z" fill="url(#th-roof)"/>
  <path d="M110 232h200v6H110z" fill="#2B1520"/>
  <!-- porch deck + columns -->
  <rect x="104" y="326" width="212" height="14" fill="#3A1E2A"/>
  <rect x="100" y="322" width="220" height="6" fill="#BFD8CF"/>
  <g fill="#F2E7E1"><path d="M118 238h24l4 84h-32z"/><path d="M278 238h24l4 84h-32z"/></g>
  <g fill="#D9A441"><rect x="114" y="236" width="32" height="6"/><rect x="274" y="236" width="32" height="6"/></g>
  <!-- festoon lights -->
  <path d="M146 244q64 22 128 0" fill="none" stroke="#2B1520" stroke-width="1.5"/>
  <g class="festoon" fill="#FFE9BE">${[160, 178, 196, 214, 232, 250, 268].map((x, i) => `<circle cx="${x}" cy="${251 + Math.sin((i / 6) * Math.PI) * 8}" r="3" style="--d:${i * 0.15}s"/>`).join('')}</g>
  <!-- railing -->
  <g stroke="#F2E7E1" stroke-width="3"><path d="M104 300h56M260 300h56"/>${[110, 124, 138, 152, 266, 280, 294, 308].map((x) => `<path d="M${x} 300v22"/>`).join('')}</g>

  <!-- windows with flower boxes -->
  <g data-part="windows">
    <g><rect class="win" x="70" y="250" width="34" height="54" rx="2" fill="url(#th-glass)"/><path d="M87 250v54M70 277h34" stroke="#2B1520" stroke-width="2"/></g>
    <g><rect class="win" x="316" y="250" width="34" height="54" rx="2" fill="url(#th-glass)"/><path d="M333 250v54M316 277h34" stroke="#2B1520" stroke-width="2"/></g>
    <g><rect class="win" x="160" y="252" width="40" height="56" rx="2" fill="url(#th-glass)"/><path d="M180 252v56M160 280h40" stroke="#2B1520" stroke-width="2"/></g>
  </g>
  <!-- striped awning over left window (a hint of Fizbo) -->
  <path d="M62 250h50l6 14H56z" fill="url(#p-stripes)"/>
  <path d="M56 264h68" stroke="#FBF1EC" stroke-width="2"/>
  <!-- flower boxes -->
  <g><rect x="66" y="304" width="42" height="10" rx="2" fill="#D9A441"/><g fill="#E6473C"><circle cx="74" cy="302" r="4"/><circle cx="98" cy="301" r="4"/></g><g fill="#F2C6C2"><circle cx="86" cy="300" r="4.5"/></g></g>
  <g><rect x="312" y="304" width="42" height="10" rx="2" fill="#D9A441"/><g fill="#F2C6C2"><circle cx="320" cy="302" r="4"/><circle cx="344" cy="301" r="4"/></g><g fill="#E6473C"><circle cx="332" cy="300" r="4.5"/></g></g>

  <!-- door: mint with brass -->
  <rect data-part="doorway" x="216" y="250" width="46" height="72" fill="#F2C6C2" opacity="0"/>
  <g data-part="door" style="transform-origin:216px 286px;transform-box:view-box">
    <rect x="216" y="250" width="46" height="72" rx="2" fill="#BFD8CF"/>
    <rect x="222" y="256" width="34" height="20" rx="10" fill="#8FB8AA"/>
    <rect x="222" y="282" width="34" height="34" rx="1" fill="#A9CBC0"/>
    <circle cx="254" cy="290" r="2.8" fill="#D9A441"/>
    <ellipse cx="239" cy="245" rx="16" ry="5" fill="#F2C6C2"/>
  </g>
  <!-- a clown shoe by the door -->
  <g data-part="shoe"><path d="M266 322c0-6 6-10 14-10h8c4 0 8 4 8 10z" fill="#E6473C"/><rect x="266" y="318" width="30" height="4" fill="#FBF1EC"/><circle cx="273" cy="316" r="2" fill="#D9A441"/></g>
  <!-- steps -->
  <rect x="196" y="333" width="86" height="7" fill="#F2E7E1"/>
  <!-- hedges -->
  <ellipse cx="86" cy="336" rx="30" ry="12" fill="#2F6B5B"/><ellipse cx="338" cy="336" rx="30" ry="12" fill="#2F6B5B"/>
</svg>`;
