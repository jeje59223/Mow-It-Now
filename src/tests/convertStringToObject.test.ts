import {convertStringToObject} from "../utils/convertStringToObject";

describe('convertStringToObject', () => {
    test('should return an object', () => {
        const example = '1 2 N';

        const result = convertStringToObject(example)

        expect(result).toEqual({ horizontal: 1, vertical: 2, orientation: "N" })
    })
})
