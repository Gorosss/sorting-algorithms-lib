import { swap } from '../utils/swap';

function partition(array: Array<any>, pivotIndex: number, leftBound: number, rightBound: number){
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
export function quickSort(array: number[] | string[], leftBound: number, rightBound: number): Array<any> {

  let pivotIndex: number;
  let partitionIndex: number;

  if (leftBound < rightBound) {
    pivotIndex = rightBound;
    partitionIndex = partition(array, pivotIndex, leftBound, rightBound);
    
    // Sort left & right sub-sections
    quickSort(array, leftBound, partitionIndex-1);
    quickSort(array, partitionIndex+1, rightBound);
  }
  return array;
}
