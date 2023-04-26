export const convertStringToArray = (characters: string): Array<string | number> => {
  return characters.split('')
    .filter(character => character !== ' ')
    .join(' ')
    .split(' ')
    .map(character => parseInt(character) ? parseInt(character) : character)
}
