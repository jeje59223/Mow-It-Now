import {calculateNewCoordinates} from "../utils/calculateNewCoordinates";

describe('calculateNewCoordinates', () => {
    test('should return new coordinates for two mowers', () => {
        const mowers = [[1, 2, "N"], [3, 3, "E"]];
        const movements = [['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A'], ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A']]

        const newCoordonates = calculateNewCoordinates(mowers, movements)
        console.log(newCoordonates)

        expect(newCoordonates).toBe('Mower 1 : 1 3 N' + '\n' + 'Mower 2 : 5 1 E')
    })
})
