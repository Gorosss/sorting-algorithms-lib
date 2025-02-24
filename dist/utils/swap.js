"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = swap;
/**
 * Given an array, swaps two elements at the specified positions (indices).
 * @param array Array in which to swap elements between two positions
 * @param pos1 Index of first element's position
 * @param pos2 Index of second element's position
 */
function swap(array, pos1, pos2) {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
}
