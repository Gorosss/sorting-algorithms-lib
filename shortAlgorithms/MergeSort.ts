function merge(left: any[], right: any[]): Array<any> {
  const result: any [] = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (
    leftIndex < left.length &&
    rightIndex < right.length
  ) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      ++leftIndex;
    } else {
      result.push(right[rightIndex]);
      ++rightIndex;
    }
  }
  // console.log('Result:', result);
  // console.log('\tLeft:', left.slice(leftIndex));
  // console.log('\tRight:', right.slice(rightIndex));
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));  // Add remaining elements on either side
}

export function mergeSort(inputArr: string[] | number[]): Array<any> {
  if (inputArr.length === 1) return inputArr;     // Base Case

  // Split Array in into right and left
  const middleIndex = Math.floor(inputArr.length / 2);
  const left = inputArr.slice(0, middleIndex);
  const right = inputArr.slice(middleIndex);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
}
