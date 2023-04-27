import { Coordonates } from "../models/Coordonates";
import { Orientation } from "../models/Orientation";

export const convertStringToObject = (characters: string): Coordonates => {
    const temp = characters.split(' ');
    return { horizontal: Number(temp[0]), vertical: Number(temp[1]), orientation: temp[2] as Orientation };
}
