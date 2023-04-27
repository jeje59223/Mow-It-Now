import { type Instruction } from '../models/Instruction';

export const convertInstructionsToArray = (characters: string): Instruction[] => {
  return characters.split('')
    .filter(character => character !== ' ')
    .join(' ')
    .split(' ')
    .map(character => character.trim() as Instruction);
};
