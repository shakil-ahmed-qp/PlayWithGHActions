export const addNumbersFromArray = (numberArray: number[]) => {
  if (!numberArray.length) return 0;
  return numberArray.reduce((acc, number) => {
    return acc + number;
  });
};
