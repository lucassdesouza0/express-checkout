import { getLowestPrice } from "./price";

describe("getLowestPrice", () => {
  test("it should return the lowest price", () => {
    const decimal = [2, 30, 23, 200, 100].reduce(getLowestPrice);
    expect(decimal).toBe(2);
  });
});
