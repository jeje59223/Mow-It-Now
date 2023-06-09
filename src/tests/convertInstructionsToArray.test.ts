import { convertInstructionsToArray } from '../utils/convertInstructionsToArray';

describe('convertStringToArray', () => {
  test('should return a simple string an array', () => {
    const example = 'AADAGGAD';

    const convert = convertInstructionsToArray(example);

    expect(convert).toEqual(['A', 'A', 'D', 'A', 'G', 'G', 'A', 'D']);
  });

  test('should return a string with spaces an array', () => {
    const example = '1 2 N';

    const convert = convertInstructionsToArray(example);

    expect(convert).toEqual(['1', '2', 'N']);
  });
});
