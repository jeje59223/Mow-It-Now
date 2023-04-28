import { type Orientation } from '../models/Orientation';
import { type Surface } from '../models/Surface';
import { type Mower } from '../models/Mower';
import { type Coordonates } from '../models/Coordonates';
import { type Instruction } from '../models/Instruction';

const cardinalPoints: Orientation[] = ['W', 'N', 'E', 'S'];
const upperRightCorner: Surface = { vertical: 5, horizontal: 5 };
const maxVertical: number = upperRightCorner.vertical;
const maxHorizontal: number = upperRightCorner.horizontal;

const getNextOrientation = (index: Orientation, turn: 'G' | 'D'): Orientation => {
  const currentIndex = cardinalPoints.indexOf(index);
  const newIndex = turn === 'D' ? (currentIndex + 1) % 4 : (currentIndex + 3) % 4;
  return cardinalPoints[newIndex];
};

const getNextPosition = (position: Mower['position'], instruction: Instruction): Coordonates => {
  if (instruction === 'A') {
    let horizontal = position.horizontal;
    let vertical = position.vertical;
    const orientation = position.orientation;
    switch (position.orientation) {
      case 'N':
        vertical = Math.min(vertical + 1, maxVertical);
        break;
      case 'E':
        horizontal = Math.min(horizontal + 1, maxHorizontal);
        break;
      case 'S':
        vertical = Math.max(vertical - 1, 0);
        break;
      case 'W':
        horizontal = Math.max(horizontal - 1, 0);
        break;
    }
    return { horizontal, vertical, orientation };
  } else {
    position.orientation = getNextOrientation(position.orientation, instruction);
    return { horizontal: position.horizontal, vertical: position.vertical, orientation: position.orientation };
  }
};

export const moveMower = (mower: Mower): Coordonates => {
  let position = mower.position;
  mower.instructions.forEach((instruction) => {
    position = getNextPosition(position, instruction);
  });
  return position;
};

// export const moveMower = (mvt: Mower['instructions'], position: Mower['position']): Coordonates => {
//   let horizontal = position.horizontal;
//   let vertical = position.vertical;
//   let orientation = position.orientation;
//   const coordinates: Coordonates = { horizontal, vertical, orientation };
//   let indexCardinalPoints: number = cardinalPoints.findIndex(e => e === orientation);
//
//   mvt.forEach((command: string) => {
//     if (command === 'G') {
//       indexCardinalPoints = (indexCardinalPoints + 3) % 4;
//       orientation = cardinalPoints[indexCardinalPoints];
//       coordinates.orientation = orientation;
//     } else if (command === 'D') {
//       indexCardinalPoints = (indexCardinalPoints + 1) % 4;
//       orientation = cardinalPoints[indexCardinalPoints];
//       coordinates.orientation = orientation;
//     } else if (command === 'A') {
//       switch (orientation) {
//         case 'N':
//           if (vertical !== maxVertical) vertical += 1;
//           break;
//         case 'S':
//           if (vertical !== 0) vertical -= 1;
//           break;
//         case 'E':
//           if (horizontal !== maxHorizontal) horizontal += 1;
//           break;
//         case 'W':
//           if (horizontal !== 0) horizontal -= 1;
//           break;
//       }
//
//       if (vertical < 0) vertical = 0;
//       if (vertical > maxVertical) vertical = maxVertical;
//       if (horizontal < 0) horizontal = 0;
//       if (horizontal > maxHorizontal) horizontal = maxHorizontal;
//
//       coordinates.horizontal = horizontal;
//       coordinates.vertical = vertical;
//     }
//   });
//   return coordinates;
// };
