
export function insertionSort(inputArr: number[] | string[]) {

  if (typeof inputArr[0] === 'number') {
    let arr = inputArr as number[];
    for (let i=0; i < inputArr.length; ++i) {
      if (arr[i] < arr[0]) {
        const element = arr.splice(i,1) as number[];
        //  Move element to the first position
        (arr as number[]).unshift(element[0]);
      }
      else {
        // Only sort number smaller than preceding number
        if (arr[i] < arr[i-1]) {
          //  Find where element's sorted position
          for (var j = 1; j < i; j++) {
            if (arr[i] >= arr[j-1] && arr[i] < arr[j]) {
              // Move element to the sorted spot
              arr.splice(j,0,arr.splice(i,1)[0] as number);
            }
          }
        }
      }
    }
    return arr;
  }
  else if (typeof inputArr[0] === 'string') {
    let arr = inputArr as string[];
    for (let i=0; i < inputArr.length; ++i) {
      if (arr[i] < arr[0]) {
        const element = arr.splice(i,1) as string[];
        //  Move element to the first position
        (arr as string[]).unshift(element[0]);
      }
      else {
        // Only sort number smaller than preceding number
        if (arr[i] < arr[i-1]) {
          //  Find where element's sorted position
          for (var j = 1; j < i; j++) {
            if (arr[i] >= arr[j-1] && arr[i] < arr[j]) {
              // Move element to the sorted spot
              arr.splice(j,0,arr.splice(i,1)[0] as string);
            }
          }
        }
      }
    }
    return arr;
  }
}

