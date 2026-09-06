import { portrait } from './base';

const smile = (d: string, w = 2.2) => `<path d="${d}" fill="none" stroke="#1F2A33" stroke-width="${w}" stroke-linecap="round"/>`;

export const philPortrait = portrait({
  bg: '#E0A458', skin: '#F1C9A5', top: '#2F5D62',
  hairFront: `<path d="M66 86c-4-28 16-44 36-44 18 0 32 12 34 30-8-10-18-14-30-12-14 2-24 8-30 18-4 4-7 6-10 8z" fill="#6B4A3A"/>`,
  mouth: smile('M86 102q14 14 28 0'),
  extras: `<path d="M100 146l-7 8 7 30 7-30z" fill="#C4623A"/><path d="M84 146l16 12 16-12" fill="none" stroke="#F4EEE2" stroke-width="4"/>`,
});

export const clairePortrait = portrait({
  bg: '#2F5D62', skin: '#F3D3B6', top: '#1F3E42',
  hairBack: `<path d="M56 94c0-44 88-44 88 0v40c0 10-12 12-16 4V94H72v44c-4 8-16 6-16-4z" fill="#E7C57C"/>`,
  hairFront: `<path d="M64 88c2-26 22-38 44-34-14 4-24 12-28 24-6-2-10 2-16 10z" fill="#E7C57C"/>`,
  mouth: smile('M91 104q9 6 18 0'),
  extras: `<path d="M80 150q20 16 40 0" fill="none" stroke="#E0A458" stroke-width="2"/><circle cx="100" cy="164" r="3" fill="#E0A458"/>`,
});

export const haleyPortrait = portrait({
  bg: '#C4623A', skin: '#EDC3A0', top: '#F4EEE2',
  hairBack: `<path d="M54 98c0-46 92-46 92 0v80c0 12-12 18-18 8V108H72v78c-6 10-18 4-18-8z" fill="#4B2E22"/>`,
  hairFront: `<path d="M62 88c2-26 22-38 40-36 14 2 28 12 32 32-10-12-22-16-34-14-10 2-18 8-24 14-4 2-9 4-14 4z" fill="#4B2E22"/><circle cx="66" cy="108" r="7" fill="none" stroke="#E0A458" stroke-width="2.4"/><circle cx="134" cy="108" r="7" fill="none" stroke="#E0A458" stroke-width="2.4"/>`,
  mouth: smile('M93 105q7 4 14 0'),
});

export const alexPortrait = portrait({
  bg: '#1F3E42', skin: '#F1C9A5', top: '#7A5343',
  hairBack: `<path d="M64 90c0-32 72-32 72 0v10H64z" fill="#2B1D16"/><path d="M134 96c12 10 16 30 8 48-2-18-6-32-14-40z" fill="#2B1D16"/>`,
  hairFront: `<path d="M66 84c0-30 68-32 68-2-10-10-22-12-34-10-12 2-24 6-34 12z" fill="#2B1D16"/><g fill="none" stroke="#1F2A33" stroke-width="3"><circle cx="86" cy="90" r="11"/><circle cx="114" cy="90" r="11"/><path d="M97 90h6"/></g>`,
  mouth: smile('M92 106h16'),
});

export const lukePortrait = portrait({
  bg: '#7A5343', skin: '#F3D3B6', top: '#DCE3D0',
  hairFront: `<path d="M62 92c-2-34 74-42 78-6-4-6-10-6-14 0-6-8-14-8-22-2-8-6-16-4-22 4-6 0-12 2-20 4z" fill="#8A5A3C"/>`,
  mouth: `<path d="M86 102q14 16 28 0z" fill="#F4EEE2" stroke="#1F2A33" stroke-width="2" stroke-linejoin="round"/>`,
  extras: `<path d="M92 150v26M108 150v26" stroke="#F4EEE2" stroke-width="2.4" stroke-linecap="round"/>`,
});
