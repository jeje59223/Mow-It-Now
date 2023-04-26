import { moveMower } from "./moveMower";

export const calculateNewCoordinates = (mowers, mowersMovements) => {
    let text = '';
    for (let i = 0; i < mowers.length; i++) {
        text += `Mower ${i+1} : ${moveMower(mowersMovements[i], mowers[i]).join(' ')}\n`;
    }
    return text.trim();
}
