import { moveMower } from './moveMower';
import { type Mower } from '../models/Mower';
import { type Instruction } from '../models/Instruction';

export const calculateNewCoordinates = (mowers: Array<Mower['position']>, mowersMovements: Instruction[][]): string => {
  let text = '';
  for (let i = 0; i < mowers.length; i++) {
    text += `Mower ${i + 1} : ${moveMower(mowersMovements[i], mowers[i]).horizontal} ${moveMower(mowersMovements[i], mowers[i]).vertical} ${moveMower(mowersMovements[i], mowers[i]).orientation}\n`;
  }
  return text.trim();
};
