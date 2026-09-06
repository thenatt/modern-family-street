import { gsap } from 'gsap';
import { registerHovers, parts } from '../../motion/hovers';

const SERIF = "Fraunces, 'Iowan Old Style', Georgia, serif";
const MONO = "'IBM Plex Mono', Menlo, monospace";
const shadow = `<ellipse cx="120" cy="212" rx="78" ry="9" fill="#000" opacity=".28"/>`;

export const stellaSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <path d="M76 214c-4-40 14-72 44-72s48 32 44 72z" fill="#E8D3B8"/>
  <path d="M98 214c0-26 8-44 22-44s22 18 22 44z" fill="#F7EFE3"/>
  <ellipse cx="98" cy="212" rx="14" ry="7" fill="#F7EFE3"/><ellipse cx="142" cy="212" rx="14" ry="7" fill="#F7EFE3"/>
  <rect x="86" y="142" width="68" height="10" rx="5" fill="#E5B25D"/><circle cx="120" cy="157" r="5" fill="#D63384"/>
  <g data-part="ear-l"><path d="M70 104c-8-36 4-66 16-74 10 14 14 42 12 68z" fill="#E8D3B8"/><path d="M78 100c-4-26 2-46 8-56 6 10 8 30 6 52z" fill="#F2C6C2"/></g>
  <g data-part="ear-r"><path d="M170 104c8-36-4-66-16-74-10 14-14 42-12 68z" fill="#E8D3B8"/><path d="M162 100c4-26-2-46-8-56-6 10-8 30-6 52z" fill="#F2C6C2"/></g>
  <g data-part="head">
    <ellipse cx="120" cy="104" rx="50" ry="44" fill="#E8D3B8"/>
    <path d="M120 60c-20 0-36 14-40 36 14-6 26-8 40-8s26 2 40 8c-4-22-20-36-40-36z" fill="#D9BF9E" opacity=".6"/>
    <ellipse cx="120" cy="120" rx="26" ry="20" fill="#F7EFE3"/>
    <circle cx="100" cy="98" r="7" fill="#1F1610"/><circle cx="140" cy="98" r="7" fill="#1F1610"/><circle cx="102" cy="96" r="2.4" fill="#fff"/><circle cx="142" cy="96" r="2.4" fill="#fff"/>
    <path d="M110 112c0-6 20-6 20 0 0 6-6 10-10 10s-10-4-10-10z" fill="#1F1610"/>
    <path d="M120 122v6M112 130q8 6 16 0" stroke="#1F1610" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path data-part="tongue" d="M114 130h12v10a6 6 0 0 1-12 0z" fill="#D63384"/>
    <path d="M96 84q6-4 12 0M132 84q6-4 12 0" stroke="#D9BF9E" stroke-width="2" fill="none"/>
  </g>
  <g data-part="bark" fill="none" stroke="#E5B25D" stroke-width="3" stroke-linecap="round"><path d="M182 88q8 6 8 16M192 78q12 10 12 28"/></g>
</svg>`;

export const closetSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  <defs><clipPath id="cl-clip"><rect x="62" y="52" width="116" height="148"/></clipPath></defs>
  ${shadow}
  <rect x="52" y="28" width="136" height="18" rx="3" fill="#E5B25D"/>
  <text x="120" y="40.5" text-anchor="middle" font-family="${MONO}" font-weight="600" font-size="7.2" letter-spacing="1.2" fill="#14213D">PRITCHETT’S CLOSETS</text>
  <rect x="56" y="46" width="128" height="160" rx="4" fill="#3B2F2A"/>
  <rect x="62" y="52" width="116" height="148" fill="#1B2233"/>
  <rect data-part="light" x="62" y="52" width="116" height="148" fill="#E5B25D" opacity="0"/>
  <rect x="66" y="66" width="108" height="3" fill="#E5B25D"/>
  <g>
    ${['#D63384', '#F3EBDD', '#7BC8C4', '#E5B25D', '#3D5A9E'].map((c, i) => `<path d="M${76 + i * 20} 69v-4M${70 + i * 20} 74h12l6 40H64z" fill="${c}"/>`).join('')}
  </g>
  <rect x="62" y="126" width="116" height="4" fill="#5C4638"/>
  <g>${['#F3EBDD', '#7BC8C4', '#D63384'].map((c, i) => `<rect x="70" y="${134 + i * 12}" width="40" height="10" rx="2" fill="${c}"/>`).join('')}${['#E5B25D', '#F3EBDD', '#3D5A9E'].map((c, i) => `<rect x="126" y="${134 + i * 12}" width="40" height="10" rx="2" fill="${c}"/>`).join('')}</g>
  <rect x="62" y="172" width="116" height="4" fill="#5C4638"/>
  <g fill="#F3EBDD"><rect x="72" y="180" width="18" height="18" rx="2"/><rect x="96" y="180" width="18" height="18" rx="2"/><rect x="146" y="180" width="22" height="18" rx="2"/></g>
  <g clip-path="url(#cl-clip)">
    <g data-part="door-l"><rect x="62" y="52" width="58" height="148" fill="#6E5A48"/><g stroke="#5A4838" stroke-width="1.4">${Array.from({ length: 10 }, (_, i) => `<path d="M62 ${64 + i * 14}h58"/>`).join('')}</g><rect x="112" y="118" width="4" height="20" rx="2" fill="#E5B25D"/></g>
    <g data-part="door-r"><rect x="120" y="52" width="58" height="148" fill="#7A6654"/><g stroke="#65533F" stroke-width="1.4">${Array.from({ length: 10 }, (_, i) => `<path d="M120 ${64 + i * 14}h58"/>`).join('')}</g><rect x="124" y="118" width="4" height="20" rx="2" fill="#E5B25D"/></g>
  </g>
  <rect x="52" y="204" width="136" height="8" rx="2" fill="#3B2F2A"/>
</svg>`;

export const reclinerSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <g data-part="back"><path d="M64 62c0-9 7-16 16-16h44c9 0 16 7 16 16v70H64z" fill="#7A4A2E"/><path d="M74 60h56v62H74z" fill="#8F5A3A" opacity=".55"/><path d="M74 90h56" stroke="#5A3420" stroke-width="2" opacity=".5"/></g>
  <rect x="50" y="126" width="120" height="34" rx="8" fill="#8F5A3A"/>
  <path d="M60 143h100" stroke="#5A3420" stroke-width="2" opacity=".4"/>
  <rect x="38" y="108" width="22" height="62" rx="9" fill="#6B3F26"/><rect x="160" y="108" width="22" height="62" rx="9" fill="#6B3F26"/>
  <rect x="58" y="160" width="104" height="30" rx="6" fill="#5A3420"/>
  <g data-part="foot"><rect x="64" y="176" width="92" height="20" rx="6" fill="#7A4A2E"/></g>
  <g data-part="remote"><rect x="164" y="98" width="13" height="30" rx="3" fill="#1F1610"/><g fill="#E5B25D"><circle cx="170.5" cy="106" r="1.6"/><circle cx="170.5" cy="112" r="1.6"/><circle cx="170.5" cy="118" r="1.6"/></g></g>
  <rect x="192" y="170" width="34" height="5" rx="2" fill="#3B2F2A"/><rect x="207" y="175" width="4" height="34" fill="#3B2F2A"/>
  <g data-part="glass"><rect x="198" y="146" width="20" height="24" rx="2" fill="#F3EBDD" opacity=".55"/><rect x="200" y="158" width="16" height="10" fill="#E5B25D"/></g>
</svg>`;

export const ponchoSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <path d="M120 20c0-6 8-6 8 0s-8 6-8 12" fill="none" stroke="#E5B25D" stroke-width="3"/>
  <path d="M72 62l48-28 48 28" fill="none" stroke="#7A5343" stroke-width="5" stroke-linejoin="round"/>
  <g data-part="poncho">
    <path d="M120 46 44 152h152z" fill="#D63384"/>
    <path d="M58 134h124" stroke="#E5B25D" stroke-width="9"/>
    <path d="M70 118h100" stroke="#F3EBDD" stroke-width="5"/>
    <path d="M82 100h76" stroke="#7BC8C4" stroke-width="7"/>
    <path d="M94 84h52" stroke="#E5B25D" stroke-width="4"/>
    <g stroke="#D63384" stroke-width="3">${Array.from({ length: 19 }, (_, i) => `<path d="M${48 + i * 8} 152v14"/>`).join('')}</g>
    <ellipse cx="120" cy="54" rx="11" ry="6" fill="#1B2233"/>
  </g>
  <g data-part="flute" transform="rotate(-12 174 184)">
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${150 + i * 8}" y="${160 + i * 4}" width="6" height="${44 - i * 4}" rx="2" fill="#C9A46A"/>`).join('')}
    <rect x="148" y="176" width="50" height="6" fill="#7A5343"/>
  </g>
  <g data-part="note" fill="#E5B25D"><path d="M176 122v-18l10-3v16" stroke="#E5B25D" stroke-width="2.4" fill="none"/><circle cx="173" cy="122" r="4"/><circle cx="183" cy="119" r="4"/></g>
  <g data-part="note" fill="#7BC8C4"><path d="M200 100v-16" stroke="#7BC8C4" stroke-width="2.4"/><circle cx="197" cy="100" r="4"/><path d="M200 84c6 2 8 6 6 10" stroke="#7BC8C4" stroke-width="2.4" fill="none"/></g>
  <g data-part="note" fill="#F3EBDD"><path d="M160 96v-14" stroke="#F3EBDD" stroke-width="2.4"/><circle cx="157" cy="96" r="3.6"/><path d="M160 82c5 2 7 5 5 9" stroke="#F3EBDD" stroke-width="2.4" fill="none"/></g>
</svg>`;

export const hotsauceSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <g data-part="flame" fill="#E5B25D"><path d="M108 40c-10-12-2-24 6-30-2 10 6 12 8 6 6 10-2 24-14 24z"/></g>
  <g data-part="flame" fill="#D63384"><path d="M124 36c-8-10-2-20 4-24-1 8 6 10 8 4 4 8-2 20-12 20z"/></g>
  <g data-part="flame" fill="#E5B25D"><path d="M138 44c-6-8-2-16 3-19 0 6 5 8 6 3 3 6-2 16-9 16z"/></g>
  <g data-part="bottle">
    <rect x="108" y="50" width="24" height="30" fill="#8B3A2E"/>
    <rect x="104" y="40" width="32" height="18" rx="3" fill="#E5B25D"/><path d="M110 40v18M118 40v18M126 40v18" stroke="#C99A44" stroke-width="1.5"/>
    <path d="M96 80c0-6 4-8 8-8h32c4 0 8 2 8 8v108c0 8-6 14-14 14h-20c-8 0-14-6-14-14z" fill="#C4382B"/>
    <rect x="102" y="88" width="6" height="90" rx="3" fill="#fff" opacity=".16"/>
    <rect x="96" y="104" width="48" height="58" fill="#D63384"/>
    <rect x="96" y="104" width="48" height="58" fill="url(#p-linen)"/>
    <text x="120" y="122" text-anchor="middle" font-family="${SERIF}" font-style="italic" font-size="13" fill="#F3EBDD">Gloria’s</text>
    <text x="120" y="135" text-anchor="middle" font-family="${MONO}" font-weight="600" font-size="6.5" letter-spacing="1.4" fill="#F3EBDD">HOT SAUCE</text>
    <path d="M110 148c6-8 16-8 20 0-4 8-16 8-20 0z" fill="#E5B25D"/><path d="M120 144v-6" stroke="#7BC8C4" stroke-width="2"/>
    <text x="120" y="158" text-anchor="middle" font-family="${MONO}" font-size="4.6" letter-spacing="1.2" fill="#F3EBDD">COLOMBIAN HEAT</text>
  </g>
  <g data-part="drop" fill="#C4382B"><circle cx="158" cy="110" r="3"/></g>
  <g data-part="drop" fill="#C4382B"><circle cx="82" cy="126" r="2.4"/></g>
  <g data-part="drop" fill="#E5B25D"><circle cx="166" cy="146" r="2.2"/></g>
</svg>`;

export const notebookSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <g data-part="book">
    <rect x="34" y="62" width="164" height="120" rx="6" fill="#7A2E4A"/>
    <path d="M40 76c0-6 4-8 8-8h70v108H48c-4 0-8-2-8-8z" fill="#F3EBDD"/>
    <path d="M118 68h70c4 0 8 2 8 8v92c0 6-4 8-8 8h-70z" fill="#FAF4EA"/>
    <path d="M118 68v108" stroke="#D9CDB9" stroke-width="2"/>
    <g stroke="#E3D8C6" stroke-width="1">${[92, 108, 124, 140, 156].map((y) => `<path d="M54 ${y}h54M130 ${y}h54"/>`).join('')}</g>
    <path data-part="ink" d="M56 90q14-6 26 0t26 0M56 106q12 6 22 0t30 0M56 122q16-5 30 0t20 0M56 138q10 4 24 0" fill="none" stroke="#1B2233" stroke-width="1.7" stroke-linecap="round"/>
    <g data-part="pen" transform="rotate(-38 152 146)"><rect x="148" y="98" width="9" height="66" rx="3" fill="#1B2233"/><rect x="148" y="102" width="9" height="10" fill="#E5B25D"/><path d="M148 164l4.5 12 4.5-12z" fill="#E5B25D"/></g>
  </g>
  <g data-part="steam" fill="none" stroke="#F3EBDD" stroke-width="2.2" stroke-linecap="round" opacity="0"><path d="M188 168c-4-8 4-10 0-18M200 170c-4-8 4-10 0-18"/></g>
  <g data-part="cup"><path d="M178 178h36l-4 26h-28z" fill="#F3EBDD"/><ellipse cx="196" cy="178" rx="18" ry="4" fill="#3A2519"/><path d="M214 184h6a6 6 0 0 1 0 12h-6" fill="none" stroke="#F3EBDD" stroke-width="4"/><rect x="172" y="204" width="48" height="5" rx="2" fill="#F3EBDD"/></g>
</svg>`;

registerHovers({
  stella: (root, tl) => {
    const [el] = parts(root, 'ear-l'); const [er] = parts(root, 'ear-r'); const head = parts(root, 'head'); const tongue = parts(root, 'tongue'); const bark = parts(root, 'bark');
    gsap.set(tongue, { scaleY: 0, transformOrigin: '50% 0%' }); gsap.set(bark, { opacity: 0, scale: 0.6, transformOrigin: '0% 50%' });
    tl.to(el, { rotation: -14, transformOrigin: '80% 100%', duration: 0.25, yoyo: true, repeat: 3 }, 0)
      .to(er, { rotation: 14, transformOrigin: '20% 100%', duration: 0.25, yoyo: true, repeat: 3 }, 0.08)
      .to(head, { rotation: 7, y: -4, transformOrigin: '50% 90%', duration: 0.5, ease: 'back.out(2)' }, 0)
      .to(tongue, { scaleY: 1, duration: 0.35, ease: 'back.out(2)' }, 0.15)
      .to(bark, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 0.1);
  },
  closet: (root, tl) => {
    const [l] = parts(root, 'door-l'); const [r] = parts(root, 'door-r'); const light = parts(root, 'light');
    tl.to(l, { x: -58, duration: 0.7, ease: 'power3.inOut' }, 0)
      .to(r, { x: 58, duration: 0.7, ease: 'power3.inOut' }, 0)
      .to(light, { opacity: 0.16, duration: 0.6 }, 0.2);
  },
  recliner: (root, tl) => {
    const back = parts(root, 'back'); const foot = parts(root, 'foot'); const remote = parts(root, 'remote'); const glass = parts(root, 'glass');
    tl.to(back, { rotation: -22, transformOrigin: '50% 100%', duration: 0.7, ease: 'power3.inOut' }, 0)
      .to(foot, { y: -36, rotation: -8, transformOrigin: '0% 50%', duration: 0.6, ease: 'power3.out' }, 0.05)
      .to(remote, { y: -10, rotation: 14, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out' }, 0.1)
      .to(glass, { rotation: -4, duration: 0.3, yoyo: true, repeat: 1, transformOrigin: '50% 100%' }, 0.3);
  },
  poncho: (root, tl) => {
    const poncho = parts(root, 'poncho'); const flute = parts(root, 'flute'); const notes = parts(root, 'note');
    gsap.set(notes, { opacity: 0, y: 12 });
    tl.to(poncho, { keyframes: [{ rotation: 5 }, { rotation: -4 }, { rotation: 3 }, { rotation: 0 }], transformOrigin: '50% 0%', duration: 1.6, ease: 'sine.inOut' }, 0)
      .to(flute, { rotation: -22, y: -6, transformOrigin: '50% 100%', duration: 0.5, ease: 'power2.out' }, 0)
      .to(notes, { opacity: 1, y: -18, duration: 0.7, stagger: 0.16, ease: 'power2.out' }, 0.1)
      .to(notes, { opacity: 0, y: -34, duration: 0.5, stagger: 0.16 }, 0.7);
  },
  hotsauce: (root, tl) => {
    const bottle = parts(root, 'bottle'); const flames = parts(root, 'flame'); const drops = parts(root, 'drop');
    gsap.set(flames, { scale: 0, opacity: 0, transformOrigin: '50% 100%' }); gsap.set(drops, { opacity: 0, scale: 0.5 });
    tl.to(bottle, { keyframes: [{ x: -4, rotation: -3 }, { x: 4, rotation: 3 }, { x: -3, rotation: -2 }, { x: 3, rotation: 2 }, { x: 0, rotation: 0 }], transformOrigin: '50% 100%', duration: 0.55, ease: 'none' }, 0)
      .to(flames, { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(2)' }, 0.2)
      .to(flames, { scaleY: 1.25, duration: 0.18, yoyo: true, repeat: 5, stagger: 0.04, ease: 'sine.inOut' }, 0.5)
      .to(drops, { opacity: 1, scale: 1, x: (i: number) => (i % 2 ? -14 : 14), y: -10, duration: 0.5, stagger: 0.06, ease: 'power2.out' }, 0.15);
  },
  notebook: (root, tl) => {
    const ink = parts(root, 'ink')[0] as SVGPathElement | undefined; const pen = parts(root, 'pen'); const steam = parts(root, 'steam'); const cup = parts(root, 'cup');
    if (ink) { const len = ink.getTotalLength(); gsap.set(ink, { strokeDasharray: len, strokeDashoffset: len }); tl.to(ink, { strokeDashoffset: 0, duration: 1.4, ease: 'power1.inOut' }, 0); }
    tl.to(pen, { keyframes: [{ x: -70, y: -50 }, { x: -20, y: -34 }, { x: -60, y: -18 }, { x: -10, y: -2 }, { x: 0, y: 0 }], duration: 1.4, ease: 'power1.inOut' }, 0)
      .to(steam, { opacity: 0.85, y: -10, duration: 0.8, ease: 'power2.out' }, 0.2)
      .to(cup, { rotation: -3, transformOrigin: '50% 100%', duration: 0.3, yoyo: true, repeat: 1 }, 0.4);
  },
});
