import { convertInstructionsToArray } from './utils/convertInstructionsToArray';
import { calculateNewCoordinates } from './utils/calculateNewCoordinates';
import { type Instruction } from './models/Instruction';
import { convertStringToObject } from './utils/convertStringToObject';
import { type Coordonates } from './models/Coordonates';

const startingPointProgrammingMower1 = '1 2 N';
const startingPointProgrammingMower2 = '3 3 E';

const mowerProgramming1 = 'GAGAGAGAA';
const mowerProgramming2 = 'AADAADADDA';

const movementsMower1: Instruction[] = convertInstructionsToArray(mowerProgramming1);
const movementsMower2: Instruction[] = convertInstructionsToArray(mowerProgramming2);

const startingPointMower1: Coordonates = convertStringToObject(startingPointProgrammingMower1);
const startingPointMower2: Coordonates = convertStringToObject(startingPointProgrammingMower2);

const mowers: Coordonates[] = [startingPointMower1, startingPointMower2];
const mowersMovements: Instruction[][] = [movementsMower1, movementsMower2];

calculateNewCoordinates(mowers, mowersMovements);
