export type HouseId = 'dunphy' | 'pritchett' | 'tucker-pritchett';

export interface House {
  id: HouseId;
  path: string;
  name: string;
  family: string;
  address: string;
  tagline: string;
  intro: string;
  members: string[];
  next: HouseId;
  /** interior flood colour used by the door transition */
  flood: string;
}

export const HOUSES: Record<HouseId, House> = {
  dunphy: {
    id: 'dunphy',
    path: '/dunphy',
    name: 'The Dunphy House',
    family: 'Dunphy',
    address: '10336 Dunphy Drive',
    tagline: 'A cool dad, a fun mom, and a step nobody fixed.',
    intro: 'Two storeys of good intentions. Phil sells houses, Claire runs this one, and the kids run rings around both of them.',
    members: ['Phil', 'Claire', 'Haley', 'Alex', 'Luke'],
    next: 'pritchett',
    flood: '#DCE3D0',
  },
  pritchett: {
    id: 'pritchett',
    path: '/pritchett',
    name: 'The Pritchett-Delgado House',
    family: 'Pritchett-Delgado',
    address: 'The big one with the pool',
    tagline: 'Closets, blinds, and a very loud, very loving marriage.',
    intro: 'Jay built a closet empire and a mid-century fortress. Gloria filled it with colour, volume and hot sauce. Manny writes poems about all of it.',
    members: ['Jay', 'Gloria', 'Manny', 'Joe', 'Stella'],
    next: 'tucker-pritchett',
    flood: '#14213D',
  },
  'tucker-pritchett': {
    id: 'tucker-pritchett',
    path: '/tucker-pritchett',
    name: 'The Tucker-Pritchett House',
    family: 'Tucker-Pritchett',
    address: 'The tasteful one, with a clown in the closet',
    tagline: 'Drama, dolphins, and the circle of life.',
    intro: 'Mitchell wanted quiet. Cam wanted a moment. Lily wanted neither of them to embarrass her. Everyone got what they deserved.',
    members: ['Cam', 'Mitchell', 'Lily'],
    next: 'dunphy',
    flood: '#4A1F2E',
  },
};

export const HOUSE_ORDER: HouseId[] = ['dunphy', 'pritchett', 'tucker-pritchett'];
export const houseByPath = (path: string): House | undefined => HOUSE_ORDER.map((id) => HOUSES[id]).find((h) => h.path === path);
