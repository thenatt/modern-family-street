import type { HouseId } from './houses';
import { philPortrait, clairePortrait, haleyPortrait, alexPortrait, lukePortrait } from '../art/portraits/dunphy';
import { jayPortrait, gloriaPortrait, mannyPortrait } from '../art/portraits/pritchett';
import { camPortrait, mitchellPortrait, lilyPortrait } from '../art/portraits/tucker';

export type CharacterId = 'phil' | 'claire' | 'haley' | 'alex' | 'luke' | 'jay' | 'gloria' | 'manny' | 'cam' | 'mitchell' | 'lily';

export interface Character {
  id: CharacterId;
  name: string;
  house: HouseId;
  role: string;
  why: string;
  svg: string;
}

export const CHARACTERS: Record<CharacterId, Character> = {
  phil: { id: 'phil', name: 'Phil Dunphy', house: 'dunphy', role: 'Realtor · magician · cool dad', why: 'You lead with enthusiasm and worry about the details later. People underestimate you right up until the trick works.', svg: philPortrait },
  claire: { id: 'claire', name: 'Claire Dunphy', house: 'dunphy', role: 'Fun mom · also the boss', why: 'You hold the whole operation together and would like, just once, to be thanked for it. You will not be. You carry on.', svg: clairePortrait },
  haley: { id: 'haley', name: 'Haley Dunphy', house: 'dunphy', role: 'Eldest · eyeliner · eventually twins', why: 'You are smarter than you let on and cooler than everyone in the room. Effort is for other people. Somehow it works out.', svg: haleyPortrait },
  alex: { id: 'alex', name: 'Alex Dunphy', house: 'dunphy', role: 'The smart one, loudly', why: 'You have read the manual, corrected the manual, and are quietly waiting for everyone else to catch up.', svg: alexPortrait },
  luke: { id: 'luke', name: 'Luke Dunphy', house: 'dunphy', role: 'Chaos, cheerfully', why: 'You follow your curiosity into walls, boxes and banisters. Occasionally it turns out you were the genius all along.', svg: lukePortrait },
  jay: { id: 'jay', name: 'Jay Pritchett', house: 'pritchett', role: 'Patriarch · closets · blinds', why: 'You would prefer everyone stopped talking about their feelings, then you cry at a dog. The recliner is yours. Sit elsewhere.', svg: jayPortrait },
  gloria: { id: 'gloria', name: 'Gloria Pritchett', house: 'pritchett', role: 'Volume · heart · heels', why: 'You love hard, argue loudly and are always, always right about people. The mispronunciations are part of the charm.', svg: gloriaPortrait },
  manny: { id: 'manny', name: 'Manny Delgado', house: 'pritchett', role: 'Old soul, age eleven', why: 'You feel everything deeply and say so, in verse if necessary. You were born forty and it suits you.', svg: mannyPortrait },
  cam: { id: 'cam', name: 'Cameron Tucker', house: 'tucker-pritchett', role: 'Farm boy · coach · clown', why: 'Every moment is a moment. You cry at commercials, coach like a general, and have a clown costume ready at all times.', svg: camPortrait },
  mitchell: { id: 'mitchell', name: 'Mitchell Pritchett', house: 'tucker-pritchett', role: 'Lawyer · redhead · reluctant', why: 'You wanted a quiet life and married a parade. You complain, you cope, and you secretly love the parade.', svg: mitchellPortrait },
  lily: { id: 'lily', name: 'Lily Tucker-Pritchett', house: 'tucker-pritchett', role: 'Deadpan since preschool', why: 'You have seen it all and were unimpressed by most of it. Your one-liners could end a dinner party.', svg: lilyPortrait },
};

export interface Answer { text: string; weights: Partial<Record<CharacterId, number>>; }
export interface Question { text: string; answers: Answer[]; }

export const QUESTIONS: Question[] = [
  { text: 'It’s Saturday morning. What are you doing?', answers: [
    { text: 'Making pancakes and narrating it like a cooking show', weights: { phil: 2, cam: 1 } },
    { text: 'Working through a colour-coded to-do list', weights: { claire: 2, alex: 1 } },
    { text: 'Still asleep. It’s Saturday.', weights: { haley: 2, luke: 1 } },
    { text: 'Reading the paper and grumbling at it', weights: { jay: 2, mitchell: 1 } },
  ] },
  { text: 'Your party is going badly. What do you do?', answers: [
    { text: 'Go bigger. Go louder. Perform.', weights: { cam: 2, gloria: 1 } },
    { text: 'Quietly fix everything from the kitchen', weights: { claire: 2, mitchell: 1 } },
    { text: 'Recite something heartfelt until everyone relaxes', weights: { manny: 2, gloria: 1 } },
    { text: 'Leave. Not your problem.', weights: { jay: 2, lily: 1 } },
  ] },
  { text: 'How do you text?', answers: [
    { text: 'Puns, emojis and abbreviations you invented', weights: { phil: 2, luke: 1 } },
    { text: 'Full sentences, correctly punctuated', weights: { alex: 2, mitchell: 1 } },
    { text: 'Voice notes, at full volume', weights: { gloria: 2, cam: 1 } },
    { text: 'Just “k”.', weights: { haley: 2, lily: 1 } },
  ] },
  { text: 'Pick a weekend hobby.', answers: [
    { text: 'Magic tricks. Real illusions.', weights: { phil: 3 } },
    { text: 'Coaching a kids’ team, whistle included', weights: { cam: 2, jay: 1 } },
    { text: 'Poetry and a double espresso, alone', weights: { manny: 2, alex: 1 } },
    { text: 'Redecorating the living room. Again.', weights: { mitchell: 1, claire: 1, gloria: 1 } },
  ] },
  { text: 'You broke something at home. Now what?', answers: [
    { text: 'Promise to fix it. Never fix it.', weights: { phil: 2, luke: 1 } },
    { text: 'Fix it before anyone notices, then mention it twice', weights: { claire: 2, mitchell: 1 } },
    { text: 'Blame someone else with a straight face', weights: { lily: 2, haley: 1 } },
    { text: 'Didn’t notice it broke', weights: { luke: 3 } },
  ] },
  { text: 'How does your family describe you?', answers: [
    { text: 'The fun one', weights: { phil: 1, cam: 1, haley: 1 } },
    { text: 'The responsible one', weights: { claire: 1, mitchell: 1, alex: 1 } },
    { text: 'The loud one', weights: { gloria: 2, cam: 1 } },
    { text: 'The one with opinions', weights: { jay: 1, lily: 1, manny: 1 } },
  ] },
];

export function score(picks: number[]): CharacterId {
  const totals = new Map<CharacterId, number>();
  picks.forEach((p, i) => {
    const a = QUESTIONS[i]?.answers[p];
    if (!a) return;
    Object.entries(a.weights).forEach(([id, w]) => totals.set(id as CharacterId, (totals.get(id as CharacterId) ?? 0) + (w ?? 0)));
  });
  let best: CharacterId = 'phil'; let bestScore = -1;
  (Object.keys(CHARACTERS) as CharacterId[]).forEach((id) => {
    const s = totals.get(id) ?? 0;
    if (s > bestScore) { best = id; bestScore = s; }
  });
  return best;
}
