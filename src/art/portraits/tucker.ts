import { portrait } from './base';

const line = (d: string, w = 2.2) => `<path d="${d}" fill="none" stroke="#1F2A33" stroke-width="${w}" stroke-linecap="round"/>`;

export const camPortrait = portrait({
  bg: '#D9A441', skin: '#F3D3B6', top: '#A9CBC0',
  hairFront: `<path d="M64 84c-2-30 20-46 40-44 18 2 32 14 34 32-8-12-18-16-30-14-14 2-24 8-32 18-4 4-8 6-12 8z" fill="#A8794D"/>`,
  mouth: line('M86 102q14 14 28 0', 2.6),
  extras: `<g stroke="#7BA1B8" stroke-width="2" opacity=".7"><path d="M52 176h96M46 190h108M70 150v50M100 146v54M130 150v50"/></g><path d="M84 146l16 14 16-14" fill="none" stroke="#FBF1EC" stroke-width="5"/>`,
});

export const mitchellPortrait = portrait({
  bg: '#E6473C', skin: '#F6DCC6', top: '#4A1F2E',
  hairFront: `<path d="M66 82c0-26 16-40 34-40 20 0 34 14 34 38-6-8-12-12-20-12-6 0-10 4-14 4s-8-4-14-4c-8 0-14 6-20 14z" fill="#C4623A"/><path d="M72 96c2 18 12 30 28 30s26-12 28-30c-6 12-16 16-28 16s-22-4-28-16z" fill="#C4623A"/>`,
  mouth: line('M93 106q7 3 14 0'),
  extras: `<path d="M84 146l16 12 16-12" fill="none" stroke="#FBF1EC" stroke-width="5"/><path d="M100 158v42" stroke="#FBF1EC" stroke-width="2"/><path d="M76 78q6-2 12 2M112 80q6-4 12-2" fill="none" stroke="#C4623A" stroke-width="3" stroke-linecap="round"/>`,
  brows: false,
});

export const lilyPortrait = portrait({
  bg: '#BFD8CF', skin: '#EFC7A6', top: '#F2C6C2',
  hairBack: `<path d="M60 96c0-40 80-40 80 0v70c0 12-10 16-14 8V100H74v74c-4 8-14 4-14-8z" fill="#1F1610"/>`,
  hairFront: `<path d="M64 84c0-32 72-32 72 0v4c-12-6-60-6-72 0z" fill="#1F1610"/>`,
  mouth: line('M92 106h16'),
  extras: `<path d="M84 150q16 8 32 0" fill="none" stroke="#E6473C" stroke-width="2.5"/><circle cx="66" cy="112" r="3" fill="#D9A441"/><circle cx="134" cy="112" r="3" fill="#D9A441"/>`,
});
