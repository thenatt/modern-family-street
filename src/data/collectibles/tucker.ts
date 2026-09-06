import type { HouseContent } from './types';
import { fizboSvg, lionKingSvg, footballSvg, briefcaseSvg, skatesSvg, drumsSvg } from '../../art/items/tucker';
import { circleOfLifeMoment, fizboPartyMoment, flashMobMoment } from '../../art/moments/tucker';
import { camPortrait, mitchellPortrait, lilyPortrait } from '../../art/portraits/tucker';

export const tuckerContent: HouseContent = {
  chapters: {
    shelf: 'Props from the <em>production</em>',
    posters: 'Cam, <em>projecting</em>',
    moments: 'Scenes we <em>rewind</em>',
    portraits: 'The <em>household</em>',
  },
  objects: [
    { id: 'fizbo', label: 'The alter ego', title: 'Fizbo’s nose & shoes', tagline: 'Clown mode: engaged.', blurb: 'Cam has been Fizbo since childhood. The red nose, the enormous shoes, the full commitment. Mitchell has feelings about all of it.', svg: fizboSvg, hover: 'fizbo', sfx: 'honk' },
    { id: 'lionking', label: 'The pilot episode', title: 'The Circle of Life', tagline: 'Presenting: Lily.', blurb: 'The lights dimmed, the song swelled, and Cam lifted Lily to the family like the future queen of the Pride Lands. Mitchell was not consulted.', svg: lionKingSvg, hover: 'lionking', sfx: 'chime' },
    { id: 'football', label: 'The coach', title: 'Football & whistle', tagline: 'Go Dolphins.', blurb: 'Cam played college ball in Illinois and later coached the high-school Dolphins. Farm strength, theatre-kid heart, undefeated energy.', svg: footballSvg, hover: 'football', sfx: 'whistle' },
    { id: 'briefcase', label: 'The lawyer', title: 'Mitchell’s briefcase', tagline: 'Objection, sustained.', blurb: 'Environmental law, then a job he hated, then his own practice. Mitchell’s briefcase has seen more career pivots than most.', svg: briefcaseSvg, hover: 'briefcase', sfx: 'pageFlip' },
    { id: 'skates', label: 'The routine', title: 'Fire & Nice', tagline: 'Mitchell and Claire, on ice.', blurb: 'Before everything else, Mitchell and Claire were a competitive ice-dancing pair. The routine came back. So did the costumes.', svg: skatesSvg, hover: 'skates', sfx: 'twinkle' },
    { id: 'drums', label: 'The kit', title: 'Cam’s drums', tagline: 'Quiet is not an option.', blurb: 'Cam plays the drums. Loudly, in a small house, with a husband who wanted a quiet evening. The neighbours have opinions.', svg: drumsSvg, hover: 'drums', sfx: 'hit' },
  ],
  posters: [
    { id: 'mitchell', text: 'Mitchell!', by: 'Cam Tucker', note: 'Two syllables, four octaves.', style: 'shout' },
    { id: 'fizbotime', text: 'It’s Fizbo time.', by: 'Fizbo', note: 'Clown: engaged. Mitchell: elsewhere.', style: 'stack' },
    { id: 'cliche', text: 'I’m not a cliché.', by: 'Cam Tucker', note: 'Said while doing the most Cam thing possible.', style: 'wide' },
    { id: 'meryl', text: 'Meryl Streep could play Batman.', by: 'Cam Tucker', note: 'And be the right choice. Not a debate.', style: 'quote' },
  ],
  moments: [
    { id: 'lionkingreveal', episode: 'Pilot · S1 E1', title: 'The Circle of Life.', caption: 'Cam dimmed the lights, cued the song, and presented Lily to the whole family. Mitchell wanted a quiet dinner. He did not get one.', svg: circleOfLifeMoment },
    { id: 'fizboparty', episode: 'Season 1 · Fizbo', title: 'Fizbo at the party.', caption: 'Luke’s birthday. A clown arrived. A childhood happened, whether the children wanted it or not.', svg: fizboPartyMoment },
    { id: 'flashmob', episode: 'Season 2', title: 'The flash mob.', caption: 'Mitchell surprised Cam with a coordinated dance in a mall. Cam was surprised. Not in the way Mitchell planned.', svg: flashMobMoment },
  ],
  portraits: [
    { id: 'cam', name: 'Cam', role: 'Farm boy · coach · clown', stat: 'Dramatic entrances: all of them. Teams coached: the Dolphins.', quote: 'Missouri farm roots, theatre-kid everything else.', svg: camPortrait },
    { id: 'mitchell-p', name: 'Mitchell', role: 'Lawyer · redhead · reluctant', stat: 'Public displays endured: many. Enjoyed: few.', quote: 'The straight man in a house that will not stop performing.', svg: mitchellPortrait },
    { id: 'lily', name: 'Lily', role: 'Deadpan since preschool', stat: 'Eye rolls: professional grade.', quote: 'Raised in high drama, unimpressed by all of it.', svg: lilyPortrait },
  ],
};
