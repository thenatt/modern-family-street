import type { HouseId } from '../houses';
import type { HouseContent } from './types';
import { dunphyContent } from './dunphy';
import { pritchettContent } from './pritchett';
import { tuckerContent } from './tucker';

export const CONTENT: Record<HouseId, HouseContent> = {
  dunphy: dunphyContent,
  pritchett: pritchettContent,
  'tucker-pritchett': tuckerContent,
};
