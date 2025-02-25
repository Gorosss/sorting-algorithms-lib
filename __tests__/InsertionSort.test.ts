import { insertionSort } from "../shortAlgorithms/InsertionSort";

describe("InsertionSort Algorithm", () => {
  test("InsertionSort should sort an array of numbers", () => {
    const arr = [7, 4, 5, 2];
    expect(insertionSort(arr)).toEqual([2, 4, 5, 7]);
  });

  test("InsertionSort should sort an array of strings", () => {
    const arr = ["banana", "apple", "cherry", "date"];
    expect(insertionSort(arr)).toEqual(["apple", "banana", "cherry", "date"]);
  });
});
