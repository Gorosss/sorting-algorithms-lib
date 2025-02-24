"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = quickSort;
const { swap } = require('../utils/swap');
function partition(array, pivotIndex, leftBound, rightBound) {
    let pivot = array[pivotIndex];
    let partitionIndex = leftBound;
    for (let i = leftBound; i < rightBound; ++i) {
        if (array[i] < pivot) {
            swap(array, i, partitionIndex);
            ++partitionIndex;
        }
    }
    swap(array, rightBound, partitionIndex);
    return partitionIndex;
}
/**
 * Sort an array of numbers or strings using Quick Sort
 * @param array Complete array to be sorted
 * @param leftBound Index of left-most element for section to be sorted
 * @param rightBound Index of right-most element for section to be sorted
 * @returns Returns sorted array
 */
function quickSort(array, leftBound, rightBound) {
    let pivotIndex;
    let partitionIndex;
    if (leftBound < rightBound) {
        pivotIndex = rightBound;
        partitionIndex = partition(array, pivotIndex, leftBound, rightBound);
        // Sort left & right sub-sections
        quickSort(array, leftBound, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, rightBound);
    }
    return array;
}
