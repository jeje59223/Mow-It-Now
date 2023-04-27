import { convertInstructionsToArray } from './utils/convertInstructionsToArray';
import { calculateNewCoordinates } from "./utils/calculateNewCoordinates";
import { Instruction } from "./models/Instruction";
import { convertStringToObject } from "./utils/convertStringToObject";
import { Coordonates } from "./models/Coordonates";

const startingPointProgrammingMower1: string = '1 2 N';
const startingPointProgrammingMower2: string = '3 3 E';

const mowerProgramming1: string = 'GAGAGAGAA';
const mowerProgramming2: string = 'AADAADADDA';

const movementsMower1: Instruction[] = convertInstructionsToArray(mowerProgramming1);
const movementsMower2: Instruction[] = convertInstructionsToArray(mowerProgramming2);

const startingPointMower1: Coordonates = convertStringToObject(startingPointProgrammingMower1);
const startingPointMower2: Coordonates = convertStringToObject(startingPointProgrammingMower2);

const mowers: Coordonates[] = [startingPointMower1, startingPointMower2];
const mowersMovements: Instruction[][] = [movementsMower1, movementsMower2];

calculateNewCoordinates(mowers, mowersMovements);


