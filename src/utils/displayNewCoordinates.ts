import { type Mower } from '../models/Mower';
import { calculateNewCoordinates } from './calculateNewCoordinates';

export const displayNewCoordinates = (mowers: Mower[]): string => {
  const newCoordinates = calculateNewCoordinates(mowers);
  let txt = '';
  for (let i = 0; i < mowers.length; i++) {
    txt += `Mower ${i + 1} : ${newCoordinates[i].horizontal} ${newCoordinates[i].vertical} ${newCoordinates[i].orientation}\n`;
  }
  return txt;
};
