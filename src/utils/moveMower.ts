import { type Orientation } from '../models/Orientation';
import { type Surface } from '../models/Surface';
import { type Mower } from '../models/Mower';
import { type Coordonates } from '../models/Coordonates';

const cardinalPoints: Orientation[] = ['W', 'N', 'E', 'S'];
const upperRightCorner: Surface = { vertical: 5, horizontal: 5 };
const maxVertical: number = upperRightCorner.vertical;
const maxHorizontal: number = upperRightCorner.horizontal;

export const moveMower = (mvt: Mower['instructions'], mower: Mower['position']): Coordonates => {
  let horizontal = mower.horizontal;
  let vertical = mower.vertical;
  let orientation = mower.orientation;
  const coordinates: Coordonates = { horizontal, vertical, orientation };
  let indexCardinalPoints: number = cardinalPoints.findIndex(e => e === orientation);

  mvt.forEach((command: string) => {
    if (command === 'G') {
      indexCardinalPoints = (indexCardinalPoints + 3) % 4;
      orientation = cardinalPoints[indexCardinalPoints];
      coordinates.orientation = orientation;
    } else if (command === 'D') {
      indexCardinalPoints = (indexCardinalPoints + 1) % 4;
      orientation = cardinalPoints[indexCardinalPoints];
      coordinates.orientation = orientation;
    } else if (command === 'A') {
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

      coordinates.horizontal = horizontal;
      coordinates.vertical = vertical;
    }
  });
  return coordinates;
};
