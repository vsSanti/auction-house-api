import { sumOfTwoNumbers } from '@/testing';

describe('SumOfTwoNumbers', () => {
  it('should return 10', () => {
    expect(sumOfTwoNumbers(5, 5)).toBe(10);
  });
});
