import { addNumbersFromArray } from "../utils";

describe("Page component", () => {
  it("should return 0 when an empty array is passed as argument", () => {
    const numberArray: number[] = [];
    const result = addNumbersFromArray(numberArray);
    expect(result).toBe(0);
  });

  // it("should return the sum of all numbers in the array when it has only positive numbers", () => {
  //   const numberArray: number[] = [1, 2, 3, 4, 5];
  //   const result = addNumbersFromArray(numberArray);
  //   expect(result).toBe(15);
  // });
});
