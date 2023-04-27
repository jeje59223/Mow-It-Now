import { calculateNewCoordinates } from "../utils/calculateNewCoordinates";
import {Mower} from "../models/Mower";
import {Instruction} from "../models/Instruction";

describe('calculateNewCoordinates', () => {
    test('should return new coordinates for two mowers', () => {
        const mowers: Mower['position'][] = [
            { horizontal: 1, vertical: 2, orientation: "N" },
            { horizontal: 3, vertical: 3, orientation: "E" }
        ];
        const movements: Instruction[][] = [['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A'], ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A']];

        const newCoordonates = calculateNewCoordinates(mowers, movements);

        expect(newCoordonates).toBe('Mower 1 : 1 3 N' + '\n' + 'Mower 2 : 5 1 E');
    })

    test('should return new coordinates for three mowers', () => {
        const mowers: Mower['position'][] = [
            { horizontal: 1, vertical: 2, orientation: "N" },
            { horizontal: 3, vertical: 3, orientation: "E" },
            { horizontal: 5, vertical: 1, orientation: "S" }
        ];
        const movements: Instruction[][] = [
            ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A'],
            ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A'],
            ['D', 'A', 'A', 'G']
        ];

        const newCoordonates = calculateNewCoordinates(mowers, movements);

        expect(newCoordonates).toBe('Mower 1 : 1 3 N' + '\n' + 'Mower 2 : 5 1 E' + '\n' + 'Mower 3 : 3 1 S');
    })
})
