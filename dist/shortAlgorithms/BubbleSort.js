"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = bubbleSort;
function bubbleSort(inputArr) {
    if (typeof inputArr[0] === 'number') {
        return bubbleSortNumbers(inputArr);
    }
    else if (typeof inputArr[0] === 'string') {
        return bubbleSortStrings(inputArr);
    }
}
function bubbleSortNumbers(numbersArr) {
    for (let i = 0; i < numbersArr.length - 1; ++i) {
        for (let j = 0; j < numbersArr.length - 1 - i; ++j) {
            if (numbersArr[j] > numbersArr[j + 1]) {
                numbersArr[j + 1] = numbersArr[j] + numbersArr[j + 1];
                numbersArr[j] = numbersArr[j + 1] - numbersArr[j];
                numbersArr[j + 1] = numbersArr[j + 1] - numbersArr[j];
            }
        }
    }
    return numbersArr;
}
function bubbleSortStrings(stringArr) {
    let placeholder;
    for (let i = 0; i < stringArr.length - 1; ++i) {
        for (let j = 0; j < stringArr.length - 1 - i; ++j) {
            if (stringArr[j] > stringArr[j + 1]) {
                placeholder = stringArr[j];
                stringArr[j] = stringArr[j + 1];
                stringArr[j + 1] = placeholder;
            }
        }
    }
    return stringArr;
}
