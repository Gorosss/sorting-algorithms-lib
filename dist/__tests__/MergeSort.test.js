"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MergeSort_1 = require("../shortAlgorithms/MergeSort");
describe("MergeSort Algorithm", () => {
    test("MergeSort should sort an array of numbers", () => {
        const arr = [10, 5, 3, 8];
        expect((0, MergeSort_1.mergeSort)(arr)).toEqual([3, 5, 8, 10]);
    });
    test("MergeSort should sort an array of strings", () => {
        const arr = ["c", "a", "d", "b"];
        expect((0, MergeSort_1.mergeSort)(arr)).toEqual(["a", "b", "c", "d"]);
    });
});
