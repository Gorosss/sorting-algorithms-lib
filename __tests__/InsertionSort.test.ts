import { insertionSort } from "../shortAlgorithms/InsertionSort";

describe("InsertionSort Algorithm", () => {
  test("InsertionSort should sort an array of numbers", () => {
    const arr = [7, 4, 5, 2];
    expect(insertionSort(arr)).toEqual([2, 4, 5, 7]);
  });

  test("InsertionSort should sort an array of strings", () => {
    const arr = ["c", "a", "d", "b"];
    expect(insertionSort(arr)).toEqual(["a", "b", "c", "d"]);
  });
});
