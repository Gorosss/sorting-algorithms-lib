/**
 * Given an array, swaps two elements at the specified positions (indices).
 * @param array Array in which to swap elements between two positions
 * @param pos1 Index of first element's position
 * @param pos2 Index of second element's position
 */
export function swap(array: Array<any>, pos1: number, pos2: number) {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  }
  