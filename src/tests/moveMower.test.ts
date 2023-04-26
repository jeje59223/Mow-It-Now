import { moveMower } from "../utils/moveMower";

describe('moveMower', () => {
  test('should return new coordonates with command D and orientation N', () => {
    const movements = ["D"];
    const mower = [1, 2, "N"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 2, "E"])
  });

  test('should return new coordonates with command G and orientation N', () => {
    const movements = ["G"];
    const mower = [1, 2, "N"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 2, "W"])
  });

  test('should return new coordonates with command G and orientation W', () => {
    const movements = ["G"];
    const mower = [1, 2, "W"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 2, "S"])
  });

  test('should return new coordonates with command D and orientation W', () => {
    const movements = ["D"];
    const mower = [1, 2, "W"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 2, "N"])
  });

  test('should return new coordonates with command D and orientation S', () => {
    const movements = ["D"];
    const mower = [1, 2, "S"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 2, "W"])
  });

  test('should return new coordonates with command G and orientation S', () => {
    const movements = ["G"];
    const mower = [1, 2, "S"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 2, "E"])
  })

  test('should return new coordonates with command G and orientation E', () => {
    const movements = ["G"];
    const mower = [1, 2, "E"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 2, "N"])
  })

  test('should return new coordonates with command D and orientation S', () => {
    const movements = ["D"];
    const mower = [1, 2, "E"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 2, "S"])
  })

  test('should return new coordonates with command A and coordonate [1, 2, "S"]', () => {
    const movements = ["A"];
    const mower = [1, 2, "S"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 1, "S"])
  })

  test('should return new coordonates with command A and coordonates [1, 2, "N"]', () => {
    const movements = ["A"];
    const mower = [1, 2, "N"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 3, "N"])
  })

  test('should return new coordonates with command A and coordonates [1, 2, "E"]', () => {
    const movements = ["A"];
    const mower = [1, 2, "E"]

    const result = moveMower(movements, mower)

    expect(result).toEqual([2, 2, "E"])
  })

  test('should return new coordonates with command A and coordonates [1, 2, "W"]', () => {
    const movements = ["A"];
    const mower = [1, 2, "W"];

    const result = moveMower(movements, mower)

    expect(result).toEqual([0, 2, "W"])
  })

  test('should not move mower when command A and coordonates [0, 0, W]', () => {
    const movements = ["A"];
    const mower = [0, 0, "S"];

    const result = moveMower(movements, mower)

    expect(result).toEqual([0, 0, "S"])
  })

  test('should not move mower when command A and coordonates [0, 0, W]', () => {
    const movements = ["A"];
    const mower = [0, 0, "W"];

    const result = moveMower(movements, mower)

    expect(result).toEqual([0, 0, "W"])
  })

  test('should not move mower when command A and coordonates [5, 5, N]', () => {
    const movements = ["A"];
    const mower = [5, 5, "N"];

    const result = moveMower(movements, mower)

    expect(result).toEqual([5, 5, "N"])
  })

  test('should not move mower when command A and coordonates [5, 5, N]', () => {
    const movements = ["A"];
    const mower = [5, 5, "E"];

    const result = moveMower(movements, mower)

    expect(result).toEqual([5, 5, "E"])
  })

  test('should return new coordonates with command GAGAGAGAA and starting point 1 2 N', () => {
    const movements = ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A'];
    const mower = [1, 2, "N"];

    const result = moveMower(movements, mower)

    expect(result).toEqual([1, 3, "N"])
  })

  test('should return new coordonates with command AADAADADDA and starting point 3 3 E', () => {
    const movements = ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A'];
    const mower = [3, 3, "E"];

    const result = moveMower(movements, mower)

    expect(result).toEqual([5, 1, "E"])
  })
})
