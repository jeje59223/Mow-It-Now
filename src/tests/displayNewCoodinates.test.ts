import { type Mower } from '../models/Mower';
import { displayNewCoordinates } from '../utils/displayNewCoordinates';

describe('displayNewCoodinates', () => {
  test('should display new coordinates', () => {
    const mowers1: Mower[] = [
      {
        position: { horizontal: 1, vertical: 2, orientation: 'N' },
        instructions: ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']
      }
    ];

    const result1 = displayNewCoordinates(mowers1);

    expect(result1).toBe('Mower 1 : 1 3 N\n');
  });

  test('should display new coordinates with 2 mowers', () => {
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

    const result2 = displayNewCoordinates(mowers2);

    expect(result2).toBe('Mower 1 : 1 3 N\nMower 2 : 5 1 E\n');
  });

  test('should display new coordinates with 3 mowers', () => {
    const mowers3: Mower[] = [
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

    const result3 = displayNewCoordinates(mowers3);

    expect(result3).toBe('Mower 1 : 1 3 N\nMower 2 : 5 1 E\nMower 3 : 3 1 S\n');
  });
});
