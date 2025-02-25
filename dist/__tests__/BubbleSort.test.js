"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BubbleSort_1 = require("../shortAlgorithms/BubbleSort");
describe("BubbleSort Algorithm", () => {
    test("BubbleSort should sort an array of numbers", () => {
        const arr = [5, 3, 8, 1, 2];
        expect((0, BubbleSort_1.bubbleSort)(arr)).toEqual([1, 2, 3, 5, 8]);
    });
    test("BubbleSort should sort an array of strings", () => {
        const arr = ["c", "a", "d", "b"];
        expect((0, BubbleSort_1.bubbleSort)(arr)).toEqual(["a", "b", "c", "d"]);
    });
});
