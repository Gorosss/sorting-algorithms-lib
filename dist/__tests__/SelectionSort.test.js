"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SelectionSort_1 = require("../shortAlgorithms/SelectionSort");
describe("SelectionSort Algorithm", () => {
    test("SelectionSort should sort an array of numbers", () => {
        const arr = [9, 1, 4, 7];
        expect((0, SelectionSort_1.selectionSort)(arr)).toEqual([1, 4, 7, 9]);
    });
    test("SelectionSort should sort an array of strings", () => {
        const arr = ["c", "a", "d", "b"];
        expect((0, SelectionSort_1.selectionSort)(arr)).toEqual(["a", "b", "c", "d"]);
    });
});
