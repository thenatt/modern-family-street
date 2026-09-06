import { portrait } from './base';

const line = (d: string, w = 2.2) => `<path d="${d}" fill="none" stroke="#1F2A33" stroke-width="${w}" stroke-linecap="round"/>`;

export const jayPortrait = portrait({
  bg: '#E5B25D', skin: '#EFC1A0', top: '#14213D',
  hairFront: `<path d="M68 76c4-16 16-24 32-24 14 0 26 8 30 22-10-8-20-10-30-8-12 2-22 6-32 10z" fill="#B9B9B9"/>`,
  mouth: line('M92 108q8-4 16 0'),
  brows: false,
  extras: `<path d="M80 150l20 12 20-12" fill="none" stroke="#F3EBDD" stroke-width="5"/><path d="M80 78q6-6 14-1M106 77q8-5 14 1" fill="none" stroke="#7C7C7C" stroke-width="4" stroke-linecap="round"/>`,
});

export const gloriaPortrait = portrait({
  bg: '#D63384', skin: '#E0B08A', top: '#E5B25D',
  hairBack: `<path d="M50 100c0-50 100-50 100 0v66c0 14-12 22-20 12-4 10-16 12-22 0-4 12-18 12-22 0-6 12-20 10-24-2-6 10-18 6-14-6z" fill="#2B1D16"/>`,
  hairFront: `<path d="M58 92c0-30 24-44 46-42 18 2 34 14 38 36-12-14-26-18-38-14-14 4-24 12-30 20-6 0-12 0-16 0z" fill="#2B1D16"/><circle cx="64" cy="112" r="10" fill="none" stroke="#E5B25D" stroke-width="3"/><circle cx="136" cy="112" r="10" fill="none" stroke="#E5B25D" stroke-width="3"/>`,
  mouth: `<path d="M90 104q10 10 20 0q-10-5-20 0z" fill="#C4382B"/>`,
  extras: `<path d="M84 152q16 12 32 0" fill="none" stroke="#F3EBDD" stroke-width="2"/>`,
});

export const mannyPortrait = portrait({
  bg: '#7BC8C4', skin: '#E6B896', top: '#7A2E4A',
  hairFront: `<path d="M66 84c0-30 68-36 68-4-8-8-18-10-28-8-14 2-28 6-40 12z" fill="#1F1610"/>`,
  mouth: line('M92 105q8 5 16 0'),
  extras: `<path d="M78 148l22 30 22-30-6-4-16 20-16-20z" fill="#F3EBDD"/><path d="M100 178l-12-30 12 8 12-8z" fill="#3A1E2A"/><rect x="128" y="160" width="14" height="8" rx="1" fill="#E5B25D" transform="rotate(-12 135 164)"/>`,
});

export const joePortrait = portrait({
  bg: '#F3EBDD', skin: '#E8C4A0', top: '#7BC8C4',
  hairFront: `<g fill="#1F1610"><circle cx="72" cy="66" r="9"/><circle cx="86" cy="56" r="10"/><circle cx="102" cy="52" r="10"/><circle cx="118" cy="56" r="10"/><circle cx="130" cy="66" r="9"/><path d="M68 72c6-14 20-22 34-22s28 8 34 22c-10-6-22-8-34-8s-24 2-34 8z"/></g>`,
  mouth: `<path d="M88 102q12 14 24 0z" fill="#F4EEE2" stroke="#1F2A33" stroke-width="2" stroke-linejoin="round"/>`,
  extras: `<g stroke="#F3EBDD" stroke-width="7"><path d="M40 176h120M46 190h108"/></g><circle cx="80" cy="96" r="4" fill="#F2C6C2" opacity=".7"/><circle cx="120" cy="96" r="4" fill="#F2C6C2" opacity=".7"/>`,
});

export const stellaPortrait = `
<svg viewBox="0 0 200 200" aria-hidden="true">
  <circle cx="100" cy="100" r="92" fill="#2B2D42"/>
  <circle cx="100" cy="100" r="92" fill="url(#p-terrazzo)" opacity=".7"/>
  <path d="M40 200c0-34 26-50 60-50s60 16 60 50z" fill="#E8D3B8"/>
  <path d="M74 200c0-22 10-36 26-36s26 14 26 36z" fill="#F7EFE3"/>
  <rect x="68" y="146" width="64" height="9" rx="4.5" fill="#E5B25D"/><circle cx="100" cy="159" r="5" fill="#D63384"/>
  <path d="M56 104c-8-32 4-58 14-66 10 12 14 38 12 60z" fill="#E8D3B8"/><path d="M63 100c-3-22 2-40 7-48 5 8 7 26 5 46z" fill="#F2C6C2"/>
  <path d="M144 104c8-32-4-58-14-66-10 12-14 38-12 60z" fill="#E8D3B8"/><path d="M137 100c3-22-2-40-7-48-5 8-7 26-5 46z" fill="#F2C6C2"/>
  <ellipse cx="100" cy="106" rx="46" ry="42" fill="#E8D3B8"/>
  <ellipse cx="100" cy="122" rx="24" ry="18" fill="#F7EFE3"/>
  <circle cx="82" cy="100" r="6.5" fill="#1F1610"/><circle cx="118" cy="100" r="6.5" fill="#1F1610"/><circle cx="84" cy="98" r="2.2" fill="#fff"/><circle cx="120" cy="98" r="2.2" fill="#fff"/>
  <path d="M91 114c0-6 18-6 18 0 0 5-5 9-9 9s-9-4-9-9z" fill="#1F1610"/>
  <path d="M100 123v5M93 130q7 5 14 0" stroke="#1F1610" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`;
