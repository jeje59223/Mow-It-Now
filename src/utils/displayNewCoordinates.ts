import { type Mower } from '../models/Mower';
import { calculateNewCoordinates } from './calculateNewCoordinates';

export const displayNewCoordinates = (mowers: Mower[]): string => {
  const newCoordinates = calculateNewCoordinates(mowers);
  return newCoordinates.map((coordinate, index) => `Mower ${index + 1} : ${coordinate.horizontal} ${coordinate.vertical} ${coordinate.orientation}\n`).join('');
};
