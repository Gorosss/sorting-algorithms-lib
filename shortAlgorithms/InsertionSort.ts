
function insertionSort(inputArr: number[] | string[]) {

  if (typeof inputArr[0] === 'number') {
    for (let i=0; i < inputArr.length; ++i) {
      if (inputArr[i] < inputArr[0]) {
        const element = inputArr.splice(i,1) as number[];
        //  Move element to the first position
        (inputArr as number[]).unshift(element[0]);
      }
      else {
        // Only sort number smaller than preceding number
        if (inputArr[i] < inputArr[i-1]) {
          //  Find where element's sorted position
          for (var j = 1; j < i; j++) {
            if (inputArr[i] >= inputArr[j-1] && inputArr[i] < inputArr[j]) {
              // Move element to the sorted spot
              inputArr.splice(j,0,inputArr.splice(i,1)[0] as number);
            }
          }
        }
      }
    }
  }
  else if (typeof inputArr[0] === 'string') {
    for (let i=0; i < inputArr.length; ++i) {
      if (inputArr[i] < inputArr[0]) {
        const element = inputArr.splice(i,1) as string[];
        //  Move element to the first position
        (inputArr as string[]).unshift(element[0]);
      }
      else {
        // Only sort number smaller than preceding number
        if (inputArr[i] < inputArr[i-1]) {
          //  Find where element's sorted position
          for (var j = 1; j < i; j++) {
            if (inputArr[i] >= inputArr[j-1] && inputArr[i] < inputArr[j]) {
              // Move element to the sorted spot
              inputArr.splice(j,0,inputArr.splice(i,1)[0] as string);
            }
          }
        }
      }
    }
  }

  return inputArr;
}

