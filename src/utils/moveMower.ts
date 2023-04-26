const cardinalPoints: [string, string, string, string] = ['W', 'N', 'E', 'S'];
const upperRightCorner: [number, number] = [5, 5];
const maxVertical: number = upperRightCorner[1];
const maxHorizontal: number = upperRightCorner[0]

export const moveMower = (mvt: Array<string | number>, mower): [number, number, string] => {
    let [horizontal, vertical, orientation] = mower;
    let coordinates: [number, number, string] = [horizontal, vertical, orientation];
    let indexCardinalPoints: number = cardinalPoints.findIndex(e => e === orientation);

    mvt.forEach((command: string) => {
        if (command === 'G') {
            indexCardinalPoints = (indexCardinalPoints + 3) % 4;
            orientation = cardinalPoints[indexCardinalPoints];
            coordinates[2] = orientation;
        }

        else if (command === 'D') {
            indexCardinalPoints = (indexCardinalPoints + 1) % 4;
            orientation = cardinalPoints[indexCardinalPoints];
            coordinates[2] = orientation;
        }

        else if (command === 'A') {
            switch (orientation) {
                case 'N':
                    if (vertical !== maxVertical) vertical += 1;
                    break;
                case 'S':
                    if (vertical !== 0) vertical -= 1;
                    break;
                case 'E':
                    if (horizontal !== maxHorizontal) horizontal += 1;
                    break;
                case 'W':
                    if (horizontal !== 0) horizontal -= 1;
                    break;
            }

            if (vertical < 0) vertical = 0;
            if (vertical > maxVertical) vertical = maxVertical;
            if (horizontal < 0) horizontal = 0;
            if (horizontal > maxHorizontal) horizontal = maxHorizontal;

            coordinates[0] = horizontal;
            coordinates[1] = vertical;
        }
    })
    return coordinates;
}
