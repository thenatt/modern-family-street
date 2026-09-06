import { gsap } from 'gsap';
import { registerHovers, parts } from '../../motion/hovers';

const SERIF = "Fraunces, 'Iowan Old Style', Georgia, serif";
const MONO = "'IBM Plex Mono', Menlo, monospace";
const shadow = `<ellipse cx="120" cy="212" rx="78" ry="9" fill="#000" opacity=".28"/>`;

const shoe = (mirror: boolean) => `
  <g data-part="${mirror ? 'shoe-r' : 'shoe-l'}" ${mirror ? 'transform="matrix(-1 0 0 1 240 0)"' : ''}>
    <rect x="34" y="196" width="82" height="9" rx="4" fill="#FBF1EC"/>
    <rect x="60" y="164" width="52" height="36" rx="10" fill="#E6473C"/>
    <ellipse cx="52" cy="186" rx="22" ry="15" fill="#E6473C"/>
    <ellipse cx="44" cy="186" rx="11" ry="9" fill="#D9A441"/>
    <path d="M78 172l10 8-10 8M96 172l-10 8 10 8" fill="none" stroke="#FBF1EC" stroke-width="2.4" stroke-linecap="round"/>
    <rect x="100" y="160" width="14" height="10" rx="3" fill="#FBF1EC"/>
  </g>`;

export const fizboSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  ${shoe(false)}${shoe(true)}
  <g fill="none" stroke-width="7" stroke-linecap="round"><path d="M70 70c-6-16 4-30 18-30" stroke="#D9A441"/><path d="M170 70c6-16-4-30-18-30" stroke="#7BC8C4"/><path d="M92 46c-2-14 12-22 22-16" stroke="#D63384"/><path d="M148 46c2-14-12-22-22-16" stroke="#BFD8CF"/></g>
  <g data-part="nose"><circle cx="120" cy="98" r="30" fill="#E6473C"/><circle cx="108" cy="86" r="9" fill="#fff" opacity=".35"/><circle cx="130" cy="110" r="14" fill="#C4382B" opacity=".4"/></g>
</svg>`;

export const lionKingSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <g data-part="rays">${Array.from({ length: 10 }, (_, i) => `<path d="M120 110l-6-90h12z" fill="#F2C6C2" opacity=".55" transform="rotate(${i * 36} 120 110)"/>`).join('')}</g>
  <circle data-part="sun" cx="120" cy="110" r="52" fill="#D9A441"/>
  <path d="M16 214l54-56 68-10 32 40 54 26z" fill="#3A1624"/>
  <path d="M26 214l50-46 62-8 26 34 40 20z" fill="#4A1F2E"/>
  <path d="M100 168c-6-18 2-38 16-52M140 168c6-18-2-38-16-52" fill="none" stroke="#A9CBC0" stroke-width="15" stroke-linecap="round"/>
  <circle cx="114" cy="112" r="9" fill="#E8C4A0"/><circle cx="126" cy="112" r="9" fill="#E8C4A0"/>
  <g data-part="lily">
    <ellipse cx="120" cy="92" rx="20" ry="13" fill="#F2C6C2"/>
    <circle cx="120" cy="74" r="13" fill="#E8C4A0"/>
    <path d="M108 72c0-10 24-12 24-2-4-4-8-5-12-4-4 0-8 2-12 6z" fill="#1F1610"/>
    <path d="M114 78q3 2 6 0M120 78q3 2 6 0" fill="none" stroke="#1F1610" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M110 92h20" stroke="#E6473C" stroke-width="2"/>
    <circle cx="132" cy="64" r="3.5" fill="#E6473C"/>
  </g>
</svg>`;

export const footballSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <rect x="34" y="50" width="4" height="80" fill="#8F8A80"/>
  <g data-part="pennant"><path d="M38 58l160 24-160 24z" fill="#BFD8CF"/><text x="62" y="88" font-family="${MONO}" font-weight="600" font-size="11" letter-spacing="1.6" fill="#4A1F2E" transform="rotate(8.5 62 88)">DOLPHINS</text></g>
  <path d="M196 96c-10-30 0-58 14-70" fill="none" stroke="#E6473C" stroke-width="3"/>
  <g data-part="whistle"><rect x="178" y="94" width="36" height="16" rx="8" fill="#C9CDD6"/><circle cx="186" cy="114" r="11" fill="#C9CDD6"/><circle cx="186" cy="114" r="4" fill="#4A1F2E"/><rect x="206" y="98" width="6" height="8" rx="1" fill="#8F8A80"/></g>
  <g data-part="ball">
    <g transform="rotate(-20 120 160)">
      <ellipse cx="120" cy="160" rx="56" ry="33" fill="#8A4B2E"/>
      <ellipse cx="120" cy="160" rx="56" ry="33" fill="url(#p-linen)"/>
      <path d="M78 148c4 8 4 16 0 24M162 148c-4 8-4 16 0 24" fill="none" stroke="#FBF1EC" stroke-width="4"/>
      <path d="M100 160h40" stroke="#FBF1EC" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M108 154v12M116 153v14M124 153v14M132 154v12" stroke="#FBF1EC" stroke-width="2.6" stroke-linecap="round"/>
    </g>
  </g>
</svg>`;

export const briefcaseSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <rect x="46" y="104" width="148" height="92" rx="8" fill="#6B3A2E"/>
  <rect x="52" y="104" width="136" height="14" fill="#3A1E2A"/>
  <g data-part="paper"><rect x="70" y="92" width="100" height="40" rx="2" fill="#FBF1EC"/><g stroke="#C9C3B6" stroke-width="1.5"><path d="M80 104h70M80 112h56M80 120h64"/></g></g>
  <g data-part="paper"><rect x="76" y="96" width="92" height="36" rx="2" fill="#F2E7E1"/><g stroke="#C9C3B6" stroke-width="1.5"><path d="M86 108h60M86 116h48"/></g></g>
  <g data-part="paper"><rect x="66" y="98" width="104" height="34" rx="2" fill="#FBF1EC"/><path d="M76 110h70M76 118h40" stroke="#C9C3B6" stroke-width="1.5"/><rect x="150" y="104" width="12" height="12" fill="#E6473C" opacity=".7"/></g>
  <g data-part="lid">
    <rect x="46" y="64" width="148" height="52" rx="8" fill="#7A4535"/>
    <rect x="46" y="64" width="148" height="52" rx="8" fill="url(#p-linen)"/>
    <path d="M56 72h128M56 108h128" stroke="#5A2E24" stroke-width="1.5" stroke-dasharray="3 3"/>
    <path d="M102 64v-10a18 8 0 0 1 36 0v10" fill="none" stroke="#3A1E2A" stroke-width="8" stroke-linecap="round"/>
    <rect x="150" y="82" width="30" height="14" rx="2" fill="#D9A441"/><text x="165" y="92.5" text-anchor="middle" font-family="${SERIF}" font-style="italic" font-size="9.5" fill="#4A1F2E">M.P.</text>
  </g>
  <g data-part="clasp"><rect x="78" y="110" width="16" height="12" rx="2" fill="#D9A441"/></g>
  <g data-part="clasp"><rect x="146" y="110" width="16" height="12" rx="2" fill="#D9A441"/></g>
  <path d="M46 150h148" stroke="#5A2E24" stroke-width="1.5" opacity=".6"/>
</svg>`;

const skate = (part: string, decal: string, lace: string) => `
  <g data-part="${part}">
    <path d="M56 176v-64c0-8 6-12 14-12h26l18 30h20c8 0 12 4 12 12v34z" fill="#FBF1EC"/>
    <path d="M60 178h84c4 0 8 3 8 7H70c-6 0-10-3-10-7z" fill="#C9CDD6"/>
    <path d="M70 184v8M136 184v8" stroke="#C9CDD6" stroke-width="4"/>
    <g stroke="${lace}" stroke-width="2.2" stroke-linecap="round"><path d="M74 112l16 8-16 8 16 8-16 8 16 8"/></g>
    ${decal}
  </g>`;

export const skatesSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <g data-part="trail" fill="#D9A441"><path d="M40 60l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/></g>
  <g data-part="trail" fill="#F2C6C2"><path d="M200 50l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z"/></g>
  <g data-part="trail" fill="#BFD8CF"><path d="M60 40l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></g>
  <g data-part="trail" fill="#D9A441"><path d="M190 100l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></g>
  <g transform="translate(-10 24) rotate(-8 120 150)">
    ${skate('skate-a', `<path d="M112 160c-8-12 0-22 6-26-2 8 6 10 8 4 4 10-2 22-14 22z" fill="#E6473C"/><text x="70" y="168" font-family="${MONO}" font-weight="600" font-size="7" letter-spacing="1" fill="#E6473C">FIRE</text>`, '#E6473C')}
  </g>
  <g transform="translate(44 -6) rotate(10 120 150)">
    ${skate('skate-b', `<g fill="none" stroke="#7BC8C4" stroke-width="2.4" stroke-linecap="round"><path d="M118 134v22M108 139l20 12M128 139l-20 12"/></g><text x="70" y="168" font-family="${MONO}" font-weight="600" font-size="7" letter-spacing="1" fill="#7BC8C4">NICE</text>`, '#BFD8CF')}
  </g>
</svg>`;

export const drumsSvg = `
<svg viewBox="0 0 240 240" aria-hidden="true">
  ${shadow}
  <rect x="62" y="90" width="4" height="120" fill="#C9CDD6"/>
  <g data-part="cymbal"><ellipse cx="64" cy="86" rx="42" ry="8" fill="#D9A441"/><ellipse cx="64" cy="84" rx="12" ry="3" fill="#F2C6C2" opacity=".7"/><ellipse cx="64" cy="86" rx="42" ry="8" fill="url(#p-linen)"/></g>
  <rect x="178" y="112" width="4" height="98" fill="#C9CDD6"/>
  <g data-part="snare"><rect x="150" y="96" width="60" height="26" rx="4" fill="#E6473C"/><ellipse cx="180" cy="96" rx="30" ry="7" fill="#FBF1EC"/><path d="M150 108h60" stroke="#C4382B" stroke-width="2"/></g>
  <g data-part="kick">
    <circle cx="120" cy="152" r="56" fill="#BFD8CF"/>
    <circle cx="120" cy="152" r="48" fill="#FBF1EC"/>
    <circle cx="120" cy="152" r="48" fill="url(#p-linen)"/>
    <g fill="#4A1F2E">${Array.from({ length: 8 }, (_, i) => `<circle cx="${(120 + 52 * Math.cos((i / 8) * Math.PI * 2)).toFixed(1)}" cy="${(152 + 52 * Math.sin((i / 8) * Math.PI * 2)).toFixed(1)}" r="3"/>`).join('')}</g>
    <text x="120" y="160" text-anchor="middle" font-family="${SERIF}" font-style="italic" font-size="26" fill="#4A1F2E">C.T.</text>
    <text x="120" y="176" text-anchor="middle" font-family="${MONO}" font-size="6" letter-spacing="2" fill="#4A1F2E">LOUD SINCE ’83</text>
  </g>
  <g data-part="stick"><rect x="186" y="50" width="5" height="70" rx="2.5" fill="#C9A46A" transform="rotate(30 188 120)"/></g>
  <g data-part="stick"><rect x="200" y="60" width="5" height="64" rx="2.5" fill="#C9A46A" transform="rotate(50 202 124)"/></g>
  <rect x="100" y="204" width="40" height="6" rx="2" fill="#C9CDD6"/>
</svg>`;

registerHovers({
  fizbo: (root, tl) => {
    const nose = parts(root, 'nose'); const [l] = parts(root, 'shoe-l'); const [r] = parts(root, 'shoe-r');
    tl.to(nose, { keyframes: [{ scaleX: 1.3, scaleY: 0.78 }, { scaleX: 0.9, scaleY: 1.15 }, { scaleX: 1.08, scaleY: 0.95 }, { scaleX: 1, scaleY: 1 }], transformOrigin: '50% 60%', duration: 0.7, ease: 'sine.inOut' }, 0)
      .to(l, { rotation: -16, transformOrigin: '90% 100%', duration: 0.25, yoyo: true, repeat: 3, ease: 'power2.inOut' }, 0)
      .to(r, { rotation: -16, transformOrigin: '90% 100%', duration: 0.25, yoyo: true, repeat: 3, ease: 'power2.inOut' }, 0.12);
  },
  lionking: (root, tl) => {
    const lily = parts(root, 'lily'); const rays = parts(root, 'rays'); const sun = parts(root, 'sun');
    gsap.set(rays, { opacity: 0, scale: 0.7, svgOrigin: '120 110' });
    tl.to(lily, { y: -16, duration: 0.8, ease: 'power3.out' }, 0)
      .to(rays, { opacity: 1, scale: 1, rotation: 24, duration: 1.2, ease: 'power2.out' }, 0)
      .to(sun, { scale: 1.06, svgOrigin: '120 110', duration: 0.8, ease: 'sine.inOut' }, 0);
  },
  football: (root, tl) => {
    const ball = parts(root, 'ball'); const whistle = parts(root, 'whistle'); const pennant = parts(root, 'pennant');
    tl.to(ball, { rotation: 360, transformOrigin: '50% 50%', duration: 1, ease: 'power2.inOut' }, 0)
      .to(ball, { y: -30, duration: 0.5, ease: 'power2.out', yoyo: true, repeat: 1 }, 0)
      .to(whistle, { rotation: 12, transformOrigin: '80% 0%', duration: 0.2, yoyo: true, repeat: 5, ease: 'sine.inOut' }, 0)
      .to(pennant, { keyframes: [{ skewY: -4 }, { skewY: 4 }, { skewY: -2 }, { skewY: 0 }], transformOrigin: '0% 50%', duration: 1, ease: 'sine.inOut' }, 0);
  },
  briefcase: (root, tl) => {
    const lid = parts(root, 'lid'); const clasps = parts(root, 'clasp'); const papers = parts(root, 'paper');
    tl.to(clasps, { rotationX: 180, transformOrigin: '50% 0%', duration: 0.25, stagger: 0.08 }, 0)
      .to(lid, { rotation: -74, transformOrigin: '50% 100%', duration: 0.7, ease: 'power3.inOut' }, 0.2)
      .to(papers, { y: (i: number) => -22 - i * 8, rotation: (i: number) => [-6, 5, -2][i], transformOrigin: '50% 100%', duration: 0.6, stagger: 0.07, ease: 'power3.out' }, 0.45);
  },
  skates: (root, tl) => {
    const [a] = parts(root, 'skate-a'); const [b] = parts(root, 'skate-b'); const trail = parts(root, 'trail');
    gsap.set(trail, { scale: 0, transformOrigin: '50% 50%' });
    tl.to(a, { x: -14, y: -6, rotation: -6, transformOrigin: '50% 100%', duration: 0.5, ease: 'power2.inOut', yoyo: true, repeat: 1 }, 0)
      .to(b, { x: 14, y: -6, rotation: 6, transformOrigin: '50% 100%', duration: 0.5, ease: 'power2.inOut', yoyo: true, repeat: 1 }, 0.1)
      .to(trail, { scale: 1, rotation: 90, duration: 0.45, stagger: 0.08, ease: 'back.out(2)' }, 0.1);
  },
  drums: (root, tl) => {
    const cymbal = parts(root, 'cymbal'); const sticks = parts(root, 'stick'); const kick = parts(root, 'kick'); const snare = parts(root, 'snare');
    tl.to(sticks, { rotation: -22, transformOrigin: '50% 10%', duration: 0.12, yoyo: true, repeat: 3, stagger: 0.06, ease: 'power1.inOut' }, 0)
      .to(cymbal, { keyframes: [{ rotation: 7 }, { rotation: -6 }, { rotation: 4 }, { rotation: -3 }, { rotation: 1.5 }, { rotation: 0 }], transformOrigin: '50% 50%', duration: 1.3, ease: 'sine.inOut' }, 0.05)
      .to(kick, { scale: 1.04, transformOrigin: '50% 50%', duration: 0.12, yoyo: true, repeat: 3, ease: 'power1.inOut' }, 0.1)
      .to(snare, { y: 3, duration: 0.1, yoyo: true, repeat: 3 }, 0.05);
  },
});
