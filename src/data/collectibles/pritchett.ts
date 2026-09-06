import type { HouseContent } from './types';
import { stellaSvg, closetSvg, reclinerSvg, ponchoSvg, hotsauceSvg, notebookSvg } from '../../art/items/pritchett';
import { ponchoMallMoment, meetStellaMoment, fulgencioMoment } from '../../art/moments/pritchett';
import { jayPortrait, gloriaPortrait, mannyPortrait, joePortrait, stellaPortrait } from '../../art/portraits/pritchett';

export const pritchettContent: HouseContent = {
  chapters: {
    shelf: 'Kept behind <em>closet doors</em>',
    posters: 'Gloria, <em>verbatim</em>',
    moments: 'Scenes we <em>rewind</em>',
    portraits: 'The <em>household</em>',
  },
  objects: [
    { id: 'stella', label: 'The dog', title: 'Stella', tagline: 'Jay’s actual favourite.', blurb: 'A French bulldog who arrived unannounced and never left. Jay, a man who rations affection, gave her all of it. Gloria noticed.', svg: stellaSvg, hover: 'stella', sfx: 'bark' },
    { id: 'closet', label: 'The business', title: 'Pritchett’s Closets & Blinds', tagline: 'Built on shelving. Held together by pride.', blurb: 'Jay’s empire. Claire took it over, Jay took it back, and at least one closet convention got very heated.', svg: closetSvg, hover: 'closet', sfx: 'slide' },
    { id: 'recliner', label: 'The throne', title: 'Jay’s recliner', tagline: 'Do not sit here.', blurb: 'Leather, reclining, with a remote within reach. Where Jay watches the game and pretends not to listen to anyone.', svg: reclinerSvg, hover: 'recliner', sfx: 'thunk' },
    { id: 'poncho', label: 'The pilot episode', title: 'Poncho & pan flute', tagline: 'For the girl at the mall.', blurb: 'Manny wanted to make an impression. Jay tried to talk him out of the poncho. Gloria said it was beautiful. He wore the poncho.', svg: ponchoSvg, hover: 'poncho', sfx: 'flute' },
    { id: 'hotsauce', label: 'The side hustle', title: 'Gloria’s hot sauce', tagline: 'Family recipe. Industrial heat.', blurb: 'Gloria bottled her grandmother’s salsa and turned it into a business. It sold. It also, briefly, sold out of the wrong warehouse.', svg: hotsauceSvg, hover: 'hotsauce', sfx: 'sizzle' },
    { id: 'notebook', label: 'The poet', title: 'Manny’s notebook', tagline: 'Verses, and a double espresso.', blurb: 'Eleven years old and already writing love poems. Manny’s notebook, his espresso and his blazer travelled everywhere together.', svg: notebookSvg, hover: 'notebook', sfx: 'tick' },
  ],
  posters: [
    { id: 'diosmio', text: 'Ay, Dios mío.', by: 'Gloria Pritchett', note: 'At least once per episode. Twice on holidays.', style: 'script' },
    { id: 'babycheeses', text: 'Baby cheeses.', by: 'Gloria Pritchett', note: 'The infant Jesus, Colombian edition.', style: 'stack' },
    { id: 'doggydog', text: 'It’s a doggy-dog world.', by: 'Gloria Pritchett', note: 'Dog-eat-dog, according to Gloria. She is not wrong.', style: 'wide' },
    { id: 'yay', text: 'Yay!', by: 'Gloria, to Jay', note: 'His name is Jay. She says it her way.', style: 'shout', span: 5 },
  ],
  moments: [
    { id: 'ponchomall', episode: 'Pilot · S1 E1', title: 'The poncho at the mall.', caption: 'Manny wore it to meet a girl. Jay said no. Gloria said yes. Manny wore the poncho, and the poncho wore him.', svg: ponchoMallMoment },
    { id: 'meetstella', episode: 'Season 2', title: 'Jay meets Stella.', caption: 'A French bulldog walked in and Jay’s heart, without asking anyone, left the building with her.', svg: meetStellaMoment },
    { id: 'fulgencio', episode: 'Season 4', title: 'Fulgencio Joseph.', caption: 'Jay wanted a normal name. Gloria’s mother wanted a saint. The baby got both. The baptism got a Godfather sequence.', svg: fulgencioMoment },
  ],
  portraits: [
    { id: 'jay', name: 'Jay', role: 'Patriarch · closets · blinds', stat: 'Businesses built: one empire. Feelings expressed: rationed.', quote: 'Gruff outside, marshmallow-adjacent inside, especially near a French bulldog.', svg: jayPortrait },
    { id: 'gloria', name: 'Gloria', role: 'Volume · heart · heels', stat: 'Ay, Dios míos: countless. Hot sauce bottles: many.', quote: 'From Colombia, via a very loud love story.', svg: gloriaPortrait },
    { id: 'manny', name: 'Manny', role: 'Old soul, age eleven', stat: 'Poems written: enough. Espressos: also enough.', quote: 'Ponchos, pan flutes and a heart permanently on his sleeve.', svg: mannyPortrait },
    { id: 'joe', name: 'Joe', role: 'The late arrival', stat: 'Godfathers: Cam. Middle names: Fulgencio.', quote: 'Half Pritchett, half Delgado, fully chaotic.', svg: joePortrait },
    { id: 'stella-p', name: 'Stella', role: 'French bulldog · ranks above humans', stat: 'Pools fallen into: several. Regrets: zero.', quote: 'The only family member Jay never argued with.', svg: stellaPortrait },
  ],
};
