"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuickSort_1 = require("../shortAlgorithms/QuickSort");
describe('QuickSort Algorithm', () => {
    test('should sort an array of numbers', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6, 5];
        const sorted = (0, QuickSort_1.quickSort)(input, 0, input.length - 1);
        expect(sorted).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });
    test('should sort an array of strings', () => {
        const input = ['c', 'a', 'd', 'b', 'e'];
        const sorted = (0, QuickSort_1.quickSort)(input, 0, input.length - 1);
        expect(sorted).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
});
