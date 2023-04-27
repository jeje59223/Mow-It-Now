import { Instruction } from "./Instruction";
import { Coordonates } from "./Coordonates";

export type Mower = {
    position: Coordonates;
    instructions: Instruction[];
};
