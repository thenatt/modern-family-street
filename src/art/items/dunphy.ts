import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { registerHovers, parts } from '../../motion/hovers';

gsap.registerPlugin(MotionPathPlugin);

const SERIF = "Fraunces, 'Iowan Old Style', Georgia, serif";
const MONO = "'IBM Plex Mono', Menlo, monospace";
const shadow = `<ellipse cx="120" cy="212" rx="78" ry="9" fill="#000" opacity=".16"/>`;

export const bookSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <rect x="78" y="46" width="112" height="156" rx="6" fill="#244A4E"/>
  <g data-part="pages">
    <rect x="86" y="50" width="104" height="148" rx="3" fill="#F4EEE2"/>
    <rect x="88" y="50" width="104" height="148" rx="3" fill="#E8DFCC"/>
    <rect x="90" y="50" width="104" height="148" rx="3" fill="#F4EEE2"/>
    <g fill="none" stroke="#B9B0A0" stroke-width="1.2" opacity=".7"><path d="M108 78h68M108 90h68M108 102h52M108 122h68M108 134h60M108 146h68M108 158h40"/></g>
  </g>
  <g data-part="cover">
    <rect x="72" y="42" width="118" height="160" rx="6" fill="#2F5D62"/>
    <rect x="72" y="42" width="118" height="160" rx="6" fill="url(#p-linen)"/>
    <rect x="72" y="42" width="14" height="160" rx="4" fill="#244A4E"/>
    <rect x="96" y="56" width="84" height="132" rx="2" fill="none" stroke="#A8C4C2" stroke-opacity=".55" stroke-width="1.2"/>
    <text x="106" y="94" font-family="${SERIF}" font-style="italic" font-size="24" fill="#F4EEE2">Phil’s</text>
    <text x="106" y="120" font-family="${SERIF}" font-style="italic" font-size="24" fill="#F4EEE2">-osophy</text>
    <text x="138" y="176" text-anchor="middle" font-family="${MONO}" font-size="7.5" letter-spacing="1.6" fill="#E0A458">PHIL DUNPHY</text>
  </g>
</svg>`;

export const signSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <rect x="50" y="36" width="10" height="180" rx="3" fill="#7A5343"/>
  <rect x="50" y="36" width="128" height="10" rx="3" fill="#7A5343"/>
  <rect x="168" y="36" width="10" height="18" rx="2" fill="#7A5343"/>
  <g data-part="board">
    <path d="M90 46v20M150 46v20" stroke="#5F7F82" stroke-width="2.4" stroke-dasharray="3 2.5"/>
    <rect x="66" y="66" width="108" height="76" rx="6" fill="#F4EEE2" stroke="#2F5D62" stroke-width="3"/>
    <rect x="72" y="72" width="96" height="64" rx="3" fill="none" stroke="#2F5D62" stroke-opacity=".25"/>
    <!-- Phil -->
    <circle cx="94" cy="100" r="14" fill="#F1C9A5"/>
    <path d="M80 98c0-12 8-18 16-17s13 6 13 12c-6-4-12-4-18-1-4 2-8 4-11 6z" fill="#6B4A3A"/>
    <circle cx="89" cy="100" r="1.5" fill="#1F2A33"/><circle cx="99" cy="100" r="1.5" fill="#1F2A33"/>
    <path d="M88 107q6 6 12 0" fill="none" stroke="#1F2A33" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M82 128c2-10 8-14 12-14s10 4 12 14z" fill="#2F5D62"/>
    <path d="M94 114l-3 6 3 8 3-8z" fill="#C4623A"/>
    <g data-part="thumb"><rect x="106" y="112" width="9" height="12" rx="3" fill="#F1C9A5"/><rect x="109" y="104" width="4" height="10" rx="2" fill="#F1C9A5"/></g>
    <text x="126" y="94" font-family="${MONO}" font-weight="600" font-size="9" letter-spacing=".8" fill="#2F5D62">PHIL</text>
    <text x="126" y="106" font-family="${MONO}" font-weight="600" font-size="9" letter-spacing=".8" fill="#2F5D62">DUNPHY</text>
    <text x="126" y="120" font-family="${MONO}" font-size="6.5" letter-spacing="1.4" fill="#C4623A">REALTOR</text>
    <text x="126" y="131" font-family="${SERIF}" font-style="italic" font-size="7.5" fill="#5F7F82">Homes. Sold. Fast-ish.</text>
  </g>
  <g fill="#3B7178"><path d="M40 216l6-14 6 14zM54 216l5-10 5 10zM178 216l6-14 6 14zM192 216l5-10 5 10z"/></g>
</svg>`;

export const hatSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  <defs><clipPath id="hat-clip"><rect x="40" y="0" width="160" height="72"/></clipPath></defs>
  ${shadow}
  <g clip-path="url(#hat-clip)">
    <g data-part="ears">
      <ellipse cx="104" cy="52" rx="9" ry="26" fill="#F4EEE2"/><ellipse cx="104" cy="54" rx="4.5" ry="18" fill="#F2C6C2"/>
      <ellipse cx="134" cy="50" rx="9" ry="26" fill="#F4EEE2" transform="rotate(8 134 50)"/><ellipse cx="134" cy="52" rx="4.5" ry="18" fill="#F2C6C2" transform="rotate(8 134 52)"/>
    </g>
  </g>
  <ellipse cx="120" cy="72" rx="42" ry="9" fill="#0F151B"/>
  <path d="M78 72h84v90H78z" fill="#1F2A33"/>
  <path d="M78 72h84c0 0-2 30-42 30S78 72 78 72z" fill="#141C23" opacity=".6"/>
  <rect x="78" y="132" width="84" height="15" fill="#C4623A"/>
  <ellipse cx="120" cy="164" rx="68" ry="15" fill="#141C23"/>
  <ellipse cx="120" cy="160" rx="68" ry="15" fill="#2C3A47"/>
  <path d="M78 160h84v4H78z" fill="#1F2A33"/>
  <g data-part="wand"><rect x="142" y="176" width="74" height="7" rx="3.5" fill="#1F2A33" transform="rotate(-28 179 179)"/><rect x="142" y="176" width="14" height="7" rx="3.5" fill="#F4EEE2" transform="rotate(-28 179 179)"/><rect x="202" y="176" width="14" height="7" rx="3.5" fill="#F4EEE2" transform="rotate(-28 179 179)"/></g>
  <g fill="#E0A458">
    <path data-part="sparkle" d="M70 46l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/>
    <path data-part="sparkle" d="M172 34l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z"/>
    <path data-part="sparkle" d="M186 88l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>
    <path data-part="sparkle" d="M56 108l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>
  </g>
</svg>`;

export const stepSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <rect x="196" y="40" width="8" height="170" rx="2" fill="#F4EEE2"/>
  <rect x="150" y="40" width="8" height="170" rx="2" fill="#F4EEE2" opacity=".0"/>
  <path d="M60 116 L204 40" stroke="#7A5343" stroke-width="8" stroke-linecap="round"/>
  <g stroke="#F4EEE2" stroke-width="5" stroke-linecap="round"><path d="M92 100v72M126 82v60M160 64v46"/></g>
  <rect x="36" y="172" width="170" height="36" fill="#7A5343"/><rect x="36" y="164" width="170" height="12" rx="2" fill="#A87C5E"/>
  <rect x="70" y="134" width="136" height="36" fill="#7A5343"/><rect x="70" y="126" width="136" height="12" rx="2" fill="#A87C5E"/>
  <rect x="104" y="96" width="102" height="36" fill="#5C3F32"/>
  <g data-part="loose">
    <rect x="104" y="88" width="102" height="12" rx="2" fill="#A87C5E"/>
    <rect x="104" y="96" width="102" height="10" fill="#7A5343"/>
    <circle cx="112" cy="94" r="1.6" fill="#3A2519"/><circle cx="198" cy="94" r="1.6" fill="#3A2519"/>
  </g>
  <g data-part="nail"><rect x="80" y="120" width="12" height="2.5" rx="1" fill="#8F8A80" transform="rotate(-20 86 121)"/></g>
  <g data-part="tag">
    <path d="M150 70l6 12" stroke="#5F7F82" stroke-width="1.5"/>
    <rect x="130" y="52" width="46" height="20" rx="3" fill="#E0A458" transform="rotate(-8 153 62)"/>
    <text x="153" y="65" text-anchor="middle" font-family="${MONO}" font-size="6.5" font-weight="600" letter-spacing=".6" fill="#1F2A33" transform="rotate(-8 153 62)">I’LL FIX IT</text>
  </g>
</svg>`;

export const celloSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <g data-part="cello">
    <rect x="115" y="26" width="10" height="80" rx="2" fill="#3A2519"/>
    <circle cx="120" cy="22" r="8" fill="#3A2519"/>
    <g fill="#1F1610"><rect x="106" y="28" width="9" height="3" rx="1.5"/><rect x="125" y="34" width="9" height="3" rx="1.5"/><rect x="106" y="40" width="9" height="3" rx="1.5"/><rect x="125" y="46" width="9" height="3" rx="1.5"/></g>
    <path d="M120 96c-30 0-46 20-42 44 4 18 14 18 14 30 0 22 8 40 28 44 20-4 28-22 28-44 0-12 10-12 14-30 4-24-12-44-42-44z" fill="#B0673A"/>
    <path d="M120 100c-24 0-38 16-35 36 3 14 11 16 12 26 0 18 6 32 23 36 17-4 23-18 23-36 1-10 9-12 12-26 3-20-11-36-35-36z" fill="#C4794A" opacity=".8"/>
    <g fill="#3A2519"><path d="M104 148c-3 6-2 14 2 18l2-2c-3-4-3-10 0-14zM136 148c3 6 2 14-2 18l-2-2c3-4 3-10 0-14z"/></g>
    <rect x="106" y="176" width="28" height="4" rx="1" fill="#3A2519"/>
    <path d="M114 214h12l3-24h-18z" fill="#3A2519"/>
    <g data-part="string" stroke="#F4EEE2" stroke-width="1.2"><path d="M114 30v182"/></g>
    <g data-part="string" stroke="#F4EEE2" stroke-width="1.1"><path d="M118 30v182"/></g>
    <g data-part="string" stroke="#F4EEE2" stroke-width="1"><path d="M122 30v182"/></g>
    <g data-part="string" stroke="#F4EEE2" stroke-width=".9"><path d="M126 30v182"/></g>
  </g>
  <g data-part="bow">
    <g transform="rotate(22 166 135)">
      <rect x="164" y="60" width="4" height="150" rx="2" fill="#3A2519"/>
      <path d="M160 64v142" stroke="#F4EEE2" stroke-width="1.2" opacity=".85"/>
      <rect x="163" y="200" width="6" height="12" rx="1" fill="#1F1610"/>
    </g>
  </g>
</svg>`;

export const planeSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <path data-part="loop" d="M60 150C60 90 180 90 180 150C180 196 60 196 60 150" fill="none" stroke="#2F5D62" stroke-width="2" stroke-dasharray="4 7" opacity=".45"/>
  <g data-part="plane">
    <path d="M84 118l-8-18h16l4 18z" fill="#F4EEE2"/>
    <rect x="72" y="118" width="24" height="6" rx="3" fill="#F4EEE2"/>
    <path d="M78 121c0-7 5-9 14-9h60c12 0 18 4 18 9s-6 9-18 9H92c-9 0-14-2-14-9z" fill="#C4623A"/>
    <rect x="112" y="112" width="8" height="18" fill="#F4EEE2"/>
    <rect x="98" y="104" width="50" height="9" rx="4.5" fill="#F4EEE2"/>
    <path d="M106 113v6M140 113v6" stroke="#1F2A33" stroke-width="2"/>
    <rect x="104" y="128" width="40" height="7" rx="3.5" fill="#F4EEE2"/>
    <circle cx="164" cy="121" r="8" fill="#F4EEE2"/>
    <g data-part="prop"><rect x="170" y="104" width="4" height="34" rx="2" fill="#1F2A33"/></g>
    <circle cx="100" cy="136" r="4" fill="#1F2A33"/><circle cx="130" cy="136" r="4" fill="#1F2A33"/>
    <circle cx="124" cy="112" r="6" fill="#2F5D62"/>
  </g>
</svg>`;

registerHovers({
  book: (root, tl) => {
    const cover = parts(root, 'cover'); const pages = root.querySelectorAll('[data-part="pages"] rect');
    tl.to(cover, { scaleX: 0.1, skewY: -7, transformOrigin: 'left center', duration: 0.7, ease: 'power3.inOut' }, 0)
      .to(pages, { skewY: -3, x: (i: number) => 6 + i * 5, transformOrigin: 'left center', duration: 0.6, stagger: 0.06, ease: 'power2.out' }, 0.15)
      .to(root.querySelector('svg'), { y: -6, duration: 0.6 }, 0);
  },
  sign: (root, tl) => {
    const board = parts(root, 'board'); const thumb = parts(root, 'thumb');
    tl.to(board, { keyframes: [{ rotation: 7 }, { rotation: -5 }, { rotation: 3 }, { rotation: -1.5 }, { rotation: 0 }], transformOrigin: '50% 0%', duration: 1.6, ease: 'sine.inOut' }, 0)
      .fromTo(thumb, { y: 0, rotation: 0 }, { y: -3, rotation: -12, transformOrigin: '50% 100%', duration: 0.3, yoyo: true, repeat: 1 }, 0.1);
  },
  hat: (root, tl) => {
    const ears = parts(root, 'ears'); const sparkles = parts(root, 'sparkle'); const wand = parts(root, 'wand');
    gsap.set(ears, { y: 56 }); gsap.set(sparkles, { scale: 0, transformOrigin: '50% 50%' });
    tl.to(ears, { y: 0, duration: 0.7, ease: 'back.out(1.8)' }, 0.05)
      .to(sparkles, { scale: 1, rotation: 90, duration: 0.5, stagger: 0.07, ease: 'back.out(2)' }, 0.15)
      .to(wand, { rotation: 12, y: -8, transformOrigin: '20% 50%', duration: 0.5, ease: 'power2.out' }, 0);
  },
  step: (root, tl) => {
    const loose = parts(root, 'loose'); const tag = parts(root, 'tag'); const nail = parts(root, 'nail');
    tl.to(loose, { keyframes: [{ rotation: -3, y: -2 }, { rotation: 4, y: 0 }, { rotation: -2 }, { rotation: 2.5 }, { rotation: 0 }], transformOrigin: '100% 100%', duration: 1.2, ease: 'sine.inOut' }, 0)
      .to(tag, { keyframes: [{ rotation: -12 }, { rotation: 6 }, { rotation: -4 }, { rotation: 0 }], transformOrigin: '50% 0%', duration: 1.2, ease: 'sine.inOut' }, 0)
      .to(nail, { y: -10, duration: 0.25, ease: 'power2.out', yoyo: true, repeat: 1 }, 0.05)
      .to(tag, { opacity: 0.35, duration: 0.08, yoyo: true, repeat: 5 }, 0.2);
  },
  cello: (root, tl) => {
    const strings = parts(root, 'string'); const bow = parts(root, 'bow'); const body = parts(root, 'cello');
    tl.fromTo(strings, { x: -1.3 }, { x: 1.3, duration: 0.05, yoyo: true, repeat: 15, ease: 'none', stagger: 0.012 }, 0.1)
      .to(bow, { y: 26, rotation: 6, transformOrigin: '50% 50%', duration: 0.55, ease: 'power2.inOut', yoyo: true, repeat: 1 }, 0)
      .to(body, { rotation: -4, transformOrigin: '50% 60%', duration: 0.6, ease: 'power2.out' }, 0);
  },
  plane: (root, tl) => {
    const plane = parts(root, 'plane')[0]; const prop = parts(root, 'prop'); const loop = parts(root, 'loop')[0];
    if (!plane || !loop) return;
    tl.to(plane, { motionPath: { path: loop as SVGPathElement, align: loop as SVGPathElement, alignOrigin: [0.5, 0.5], autoRotate: true }, duration: 1.7, ease: 'power1.inOut' }, 0)
      .to(prop, { rotation: 360 * 5, transformOrigin: '50% 50%', duration: 1.7, ease: 'none' }, 0);
  },
});
