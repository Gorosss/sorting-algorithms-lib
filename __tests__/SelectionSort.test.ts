import { selectionSort } from "../shortAlgorithms/SelectionSort";

describe("SelectionSort Algorithm", () => {
  test("SelectionSort should sort an array of numbers", () => {
    const arr = [9, 1, 4, 7];
    expect(selectionSort(arr)).toEqual([1, 4, 7, 9]);
  });

  test("SelectionSort should sort an array of strings", () => {
    const arr = ["c", "a", "d", "b"];
    expect(selectionSort(arr)).toEqual(["a", "b", "c", "d"]);
  });
});
