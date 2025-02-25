"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InsertionSort_1 = require("../shortAlgorithms/InsertionSort");
describe("InsertionSort Algorithm", () => {
    test("InsertionSort should sort an array of numbers", () => {
        const arr = [7, 4, 5, 2];
        expect((0, InsertionSort_1.insertionSort)(arr)).toEqual([2, 4, 5, 7]);
    });
    test("InsertionSort should sort an array of strings", () => {
        const arr = ["c", "a", "d", "b"];
        expect((0, InsertionSort_1.insertionSort)(arr)).toEqual(["a", "b", "c", "d"]);
    });
});
