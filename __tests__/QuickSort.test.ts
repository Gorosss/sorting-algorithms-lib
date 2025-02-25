import { quickSort } from '../shortAlgorithms/QuickSort';

describe('QuickSort Algorithm', () => {
  test('should sort an array of numbers', () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    const sorted = quickSort(input, 0, input.length - 1);
    expect(sorted).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  test('should sort an array of strings', () => {
    const input = ['c', 'a', 'd', 'b', 'e'];
    const sorted = quickSort(input, 0, input.length - 1);
    expect(sorted).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
