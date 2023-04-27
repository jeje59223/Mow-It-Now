import { moveMower } from "../utils/moveMower";
import {Instruction} from "../models/Instruction";
import {Mower} from "../models/Mower";

describe('moveMower', () => {
  test('should return new coordonates with command D and orientation N', () => {
    const movements: Instruction[] = ["D"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "N" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "E" });
  });

  test('should return new coordonates with command G and orientation N', () => {
    const movements: Instruction[] = ["G"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "N" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "W" });
  });

  test('should return new coordonates with command G and orientation W', () => {
    const movements: Instruction[] = ["G"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "W" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "S" });
  });

  test('should return new coordonates with command D and orientation W', () => {
    const movements: Instruction[] = ["D"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "W" };

    const result = moveMower(movements, mower)

    expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "N" });
  });

  test('should return new coordonates with command D and orientation S', () => {
    const movements: Instruction[] = ["D"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "S" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "W" });
  });

  test('should return new coordonates with command G and orientation S', () => {
    const movements: Instruction[] = ["G"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "S" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "E" });
  })

  test('should return new coordonates with command G and orientation E', () => {
    const movements: Instruction[] = ["G"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "E" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "N" });
  })

  test('should return new coordonates with command D and orientation E', () => {
    const movements: Instruction[] = ["D"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "E" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "S" })
  })

  test('should return new coordonates with command A and coordonate [1, 2, "S"]', () => {
    const movements: Instruction[] = ["A"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "S" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 1, orientation: "S" });
  })

  test('should return new coordonates with command A and coordonates [1, 2, "N"]', () => {
    const movements: Instruction[] = ["A"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "N" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 3, orientation: "N" });
  })

  test('should return new coordonates with command A and coordonates [1, 2, "E"]', () => {
    const movements: Instruction[] = ["A"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "E" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 2, vertical: 2, orientation: "E" })
  })

  test('should return new coordonates with command A and coordonates [1, 2, "W"]', () => {
    const movements: Instruction[] = ["A"];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "W" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 0, vertical: 2, orientation: "W" });
  })

  test('should not move mower when command A and coordonates [0, 0, S]', () => {
    const movements: Instruction[] = ["A"];
    const mower: Mower['position'] = { horizontal: 0, vertical: 0, orientation: "S" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 0, vertical: 0, orientation: "S" });
  })

  test('should not move mower when command A and coordonates [0, 0, W]', () => {
    const movements: Instruction[] = ["A"];
    const mower: Mower['position'] = { horizontal: 0, vertical: 0, orientation: "W" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 0, vertical: 0, orientation: "W" });
  })

  test('should not move mower when command A and coordonates [5, 5, N]', () => {
    const movements: Instruction[] = ["A"];
    const mower: Mower['position'] = { horizontal: 5, vertical: 5, orientation: "N" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 5, vertical: 5, orientation: "N" });
  })

  test('should not move mower when command A and coordonates [5, 5, N]', () => {
    const movements: Instruction[] = ["A"];
    const mower: Mower['position']  = { horizontal: 5, vertical: 5, orientation: "E" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 5, vertical: 5, orientation: "E" });
  })

  test('should return new coordonates with command GAGAGAGAA and starting point 1 2 N', () => {
    const movements: Instruction[] = ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A'];
    const mower: Mower['position'] = { horizontal: 1, vertical: 2, orientation: "N" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 1, vertical: 3, orientation: "N" });
  })

  test('should return new coordonates with command AADAADADDA and starting point 3 3 E', () => {
    const movements: Instruction[] = ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A'];
    const mower: Mower['position'] = { horizontal: 3, vertical: 3, orientation: "E" };

    const result = moveMower(movements, mower);

    expect(result).toEqual({ horizontal: 5, vertical: 1, orientation: "E" });
  })
});
