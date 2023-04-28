import { calculateNewCoordinates } from '../utils/calculateNewCoordinates';
import { type Mower } from '../models/Mower';

describe('calculateNewCoordinates', () => {
  test('should return new coordinates for one mower', () => {
    const mowers1: Mower[] = [
      {
        position: { horizontal: 1, vertical: 2, orientation: 'N' },
        instructions: ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']
      }
    ];

    const newCoordonatesMowers1 = calculateNewCoordinates(mowers1);

    expect(newCoordonatesMowers1).toEqual([{ horizontal: 1, orientation: 'N', vertical: 3 }]);
  });

  test('should return new coordinates for two mowers', () => {
    const mowers2: Mower[] = [
      {
        position: { horizontal: 1, vertical: 2, orientation: 'N' },
        instructions: ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']
      },
      {
        position: { horizontal: 3, vertical: 3, orientation: 'E' },
        instructions: ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A']
      }

    ];

    const newCoordonates = calculateNewCoordinates(mowers2);

    expect(newCoordonates).toEqual([{ horizontal: 1, orientation: 'N', vertical: 3 }, { horizontal: 5, orientation: 'E', vertical: 1 }]);
  });

  test('should return new coordinates for three mowers', () => {
    const mowers: Mower[] = [
      {
        position: { horizontal: 1, vertical: 2, orientation: 'N' },
        instructions: ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']
      },
      {
        position: { horizontal: 3, vertical: 3, orientation: 'E' },
        instructions: ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A']
      },
      {
        position: { horizontal: 5, vertical: 1, orientation: 'S' },
        instructions: ['D', 'A', 'A', 'G']
      }
    ];

    const newCoordonates = calculateNewCoordinates(mowers);

    expect(newCoordonates).toEqual([{ horizontal: 1, orientation: 'N', vertical: 3 }, { horizontal: 5, orientation: 'E', vertical: 1 }, { horizontal: 3, orientation: 'S', vertical: 1 }]);
  });
});
