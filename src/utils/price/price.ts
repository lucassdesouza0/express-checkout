export const getLowestPrice = (accumulator: number, currentValue: number) =>
  accumulator < currentValue ? accumulator : currentValue;
