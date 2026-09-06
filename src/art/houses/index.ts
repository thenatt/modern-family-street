import type { HouseId } from '../../data/houses';
import { dunphyHouseSvg } from './dunphy-house';
import { pritchettHouseSvg } from './pritchett-house';
import { tuckerHouseSvg } from './tucker-house';

export const HOUSE_ART: Record<HouseId, string> = {
  dunphy: dunphyHouseSvg,
  pritchett: pritchettHouseSvg,
  'tucker-pritchett': tuckerHouseSvg,
};
