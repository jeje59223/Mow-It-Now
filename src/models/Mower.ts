import { type Instruction } from './Instruction';
import { type Coordonates } from './Coordonates';

export interface Mower {
  position: Coordonates
  instructions: Instruction[]
}
