import type { VoiceName } from '../../audio/sfx';

export interface Collectible {
  id: string;
  title: string;
  label: string;
  tagline: string;
  blurb: string;
  svg: string;
  /** key in motion/hovers.ts */
  hover: string;
  sfx: VoiceName;
}

export type PosterStyle = 'stack' | 'wide' | 'script' | 'shout' | 'quote';
export interface Poster {
  id: string;
  text: string;
  by: string;
  note: string;
  style: PosterStyle;
  /** grid columns out of 12; defaults per style */
  span?: 5 | 7 | 12;
}

export interface Moment {
  id: string;
  episode: string;
  title: string;
  caption: string;
  svg: string;
}

export interface Portrait {
  id: string;
  name: string;
  role: string;
  stat: string;
  quote: string;
  svg: string;
}

export interface HouseContent {
  objects: Collectible[];
  posters: Poster[];
  moments: Moment[];
  portraits: Portrait[];
  chapters: { shelf: string; posters: string; moments: string; portraits: string };
}
