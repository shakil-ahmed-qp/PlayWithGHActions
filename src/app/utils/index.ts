export const addNumbersFromArray = (numberArray: number[]) => {
  if (!numberArray.length) return 0;
  return numberArray.reduce((acc, number) => {
    return acc + number;
  });
};

export function findNumbers(str: string) {
  const numbers = [];
  let number = "";

  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      number += str[i];
    } else if (number.length) {
      numbers.push(parseFloat(number));
      number = "";
    }
  }

  if (number.length) {
    numbers.push(parseFloat(number));
  }

  return numbers;
}
