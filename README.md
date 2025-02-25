# Sorting Algorithms Library

## Description
**sorting-algorithms-lib** is a lightweight JavaScript/TypeScript library that provides efficient implementations of various sorting algorithms. Whether you're learning algorithms, benchmarking performance, or building a project that requires sorting, this library has you covered!

## Installation

To install the library, use npm:
```sh
npm install sorting-algorithms-lib
```

## Usage

### Importing the Library
In your TypeScript or JavaScript file, import the sorting algorithms:

#### CommonJS (Node.js)
```js
const { selectionSort, insertionSort, mergeSort, quickSort, bubbleSort } = require('sorting-algorithms-lib');
```

#### ES Modules
```js
import { selectionSort, insertionSort, mergeSort, quickSort, bubbleSort } from 'sorting-algorithms-lib';
```

### Sorting Functions
Each sorting function sorts an array of numbers or strings in ascending order.

#### Selection Sort
```js
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr));
```

#### Insertion Sort
```js
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(arr));
```

#### Merge Sort
```js
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(arr));
```

#### Quick Sort
```js
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(arr, 0, arr.length - 1));
```

#### Bubble Sort
```js
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr));
```

## License
This project is licensed under the **MIT License**.

## Author
Created by **Gorosss**.
