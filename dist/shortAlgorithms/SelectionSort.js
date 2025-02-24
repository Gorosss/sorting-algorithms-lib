"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = selectionSort;
const { swap } = require('../utils/swap');
function selectionSort(inputArr) {
    let minValue;
    let minIndex;
    for (let i = 0; i < inputArr.length - 1; ++i) {
        minValue = inputArr[i];
        minIndex = i;
        for (let j = i + 1; j <= inputArr.length - 1; ++j) {
            if (inputArr[j] < minValue) {
                minValue = inputArr[j];
                minIndex = j;
            }
        }
        swap(inputArr, i, minIndex);
    }
    return inputArr;
}
