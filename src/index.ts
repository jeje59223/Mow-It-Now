import { convertStringToArray } from './utils/convertStringToArray';
import { calculateNewCoordinates } from "./utils/calculateNewCoordinates";

const startingPointProgrammingMower1: string = '1 2 N';
const startingPointProgrammingMower2: string = '3 3 E';
const mowerProgramming1: string = 'GAGAGAGAA';
const mowerProgramming2: string = 'AADAADADDA';

const movementsMower1: Array<string | number> = convertStringToArray(mowerProgramming1);
const movementsMower2: Array<string | number> = convertStringToArray(mowerProgramming2);
const startingPointMower1: Array<string | number> = convertStringToArray(startingPointProgrammingMower1);
const startingPointMower2: Array<string | number> = convertStringToArray(startingPointProgrammingMower2);

const mowers: [Array<string | number>, Array<string | number>] = [startingPointMower1, startingPointMower2];
const mowersMovements: [Array<string | number>, Array<string | number>] = [movementsMower1, movementsMower2];

calculateNewCoordinates(mowers, mowersMovements);


