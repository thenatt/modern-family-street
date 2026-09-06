import type { HouseContent } from './types';
import { bookSvg, signSvg, hatSvg, stepSvg, celloSvg, planeSvg } from '../../art/items/dunphy';
import { banisterMoment, bbGunMoment, stepFixedMoment } from '../../art/moments/dunphy';
import { philPortrait, clairePortrait, haleyPortrait, alexPortrait, lukePortrait } from '../../art/portraits/dunphy';

export const dunphyContent: HouseContent = {
  chapters: {
    shelf: 'Things they’d never <em>throw out</em>',
    posters: 'Said, loudly, <em>at breakfast</em>',
    moments: 'Scenes we <em>rewind</em>',
    portraits: 'The <em>household</em>',
  },
  objects: [
    { id: 'book', label: 'The book', title: 'Phil’s-osophy', tagline: 'Life lessons, bound.', blurb: 'Phil wrote down everything he knows about life, fatherhood and looking people in the eye. It is short. It is confident. It is mostly about sunrises.', svg: bookSvg, hover: 'book', sfx: 'pageFlip' },
    { id: 'sign', label: 'The bench ad', title: 'Phil Dunphy, Realtor', tagline: 'He’s not a real estate agent. He’s a real estate agent.', blurb: 'The face on the bus bench. Realtor of the Year, eventually. Ask him about a house and he will tell you about the house and also about himself.', svg: signSvg, hover: 'sign', sfx: 'creak' },
    { id: 'hat', label: 'The magic kit', title: 'Top hat & wand', tagline: 'Never doubt the illusion.', blurb: 'Phil takes magic seriously in a way that nobody around him does. The Magic Castle knows his name. His family knows to look away.', svg: hatSvg, hover: 'hat', sfx: 'twinkle' },
    { id: 'step', label: 'The staircase', title: 'The broken step', tagline: 'I’ll fix it. Eventually.', blurb: 'The loose step on the Dunphy stairs tripped every member of the family for eleven years. Phil finally fixed it in the last episode. It felt like a goodbye.', svg: stepSvg, hover: 'step', sfx: 'creak' },
    { id: 'cello', label: 'The instrument', title: 'Alex’s cello', tagline: 'Practice makes perfect. Perfect makes Alex.', blurb: 'Alex is the one who actually practised. The cello followed her from middle-school recitals to the rest of her over-achieving life.', svg: celloSvg, hover: 'cello', sfx: 'cello' },
    { id: 'plane', label: 'The pilot episode', title: 'The model airplane', tagline: 'Luke, you’re gonna be fine.', blurb: 'In the very first episode, Phil flew a remote-control plane straight into Luke. It was an accident. It set the tone for everything that came after.', svg: planeSvg, hover: 'plane', sfx: 'whoosh' },
  ],
  posters: [
    { id: 'wtf', text: 'WTF. Why the face?', by: 'Phil Dunphy', note: 'Text-speak, decoded wrong, with total confidence.', style: 'shout' },
    { id: 'peerenting', text: 'Peerenting.', by: 'Phil Dunphy', note: 'Parenting, but as a peer. Patent pending.', style: 'stack' },
    { id: 'cooldad', text: 'I’m a cool dad. That’s my thang.', by: 'Phil Dunphy', note: 'He texts. He talks. He knows all the dances.', style: 'wide' },
    { id: 'sunrise', text: 'Watch a sunrise at least once a day.', by: 'Phil’s-osophy', note: 'Chapter one. Possibly the only chapter.', style: 'quote' },
  ],
  moments: [
    { id: 'banister', episode: 'Pilot · S1 E1', title: 'Luke, banister, head.', caption: 'The stairs won. Luke got a talk about physics he did not ask for, and a family got its first talking-head interview.', svg: banisterMoment },
    { id: 'bbgun', episode: 'Pilot · S1 E1', title: '4:15. The appointment.', caption: 'Phil promised Claire he would shoot Luke with the BB gun as punishment. He kept a schedule. Family is about follow-through.', svg: bbGunMoment },
    { id: 'stepfixed', episode: 'Finale · S11 E18', title: 'The step, fixed.', caption: 'Eleven seasons of “I’ll get to it”. He got to it. Nobody tripped again. Everyone missed tripping.', svg: stepFixedMoment },
  ],
  portraits: [
    { id: 'phil', name: 'Phil', role: 'Realtor · magician · cool dad', stat: 'Realtor of the Year: 1. Broken steps repaired: 1, eventually.', quote: 'Optimism as a lifestyle. Also as a sales technique.', svg: philPortrait },
    { id: 'claire', name: 'Claire', role: 'Fun mom · also the boss', stat: 'Haunted houses built: annual. Colour-coded calendars: all of them.', quote: 'Runs the house, then the closet company, then for town council.', svg: clairePortrait },
    { id: 'haley', name: 'Haley', role: 'Eldest · eyeliner · eventually twins', stat: 'Phones dropped: uncounted. Dylans: one, repeatedly.', quote: 'Fashion first, everything else somewhere after.', svg: haleyPortrait },
    { id: 'alex', name: 'Alex', role: 'The smart one, loudly', stat: 'Cellos: 1. Caltech: yes. Patience for siblings: limited.', quote: 'Sarcasm as a second language. Valedictorian as a first.', svg: alexPortrait },
    { id: 'luke', name: 'Luke', role: 'Chaos, cheerfully', stat: 'Heads stuck in banisters: at least one.', quote: 'The kid who found his way into every box, wall and ceiling.', svg: lukePortrait },
  ],
};
