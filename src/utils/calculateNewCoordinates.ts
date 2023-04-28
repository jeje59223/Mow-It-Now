import { moveMower } from './moveMower';
import { type Mower } from '../models/Mower';
import { type Coordonates } from '../models/Coordonates';

export const calculateNewCoordinates = (mowers: Mower[]): Coordonates[] => {
  return mowers.map(mower => moveMower(mower));
};
