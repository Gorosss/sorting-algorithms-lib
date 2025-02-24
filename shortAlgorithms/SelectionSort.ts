function swap(pos1: number, pos2: number, inputArr: Array<any>): void {
  const placeholder = inputArr[pos1];
  inputArr[pos1] = inputArr[pos2];
  inputArr[pos2] = placeholder;
}

function selectionSort(inputArr: Array<number> | Array<string>): Array<any> {

  let minValue: number | string;
  let minIndex: number;

  for (let i=0; i < inputArr.length-1; ++i) {
    minValue = inputArr[i];
    minIndex = i;
    for (let j=i+1; j <= inputArr.length-1; ++j) {
      if (inputArr[j] < minValue) {
        minValue = inputArr[j];
        minIndex = j;
      }
    }
    swap(i, minIndex, inputArr);
  }
  
  return inputArr;
}

