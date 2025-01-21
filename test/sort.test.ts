// test/merge.test.ts
import { merge } from "../src/sort";

describe("merge function", () => {
  it("It should merge three sorted arrays into a single sorted array", () => {
    const collection_1 = [-1, 3, 5];
    const collection_2 = [-2, 4, 6];
    const collection_3 = [10, 8, 6, 4, -2];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([-2, -2, -1, 3, 4, 4, 5, 6, 6, 8, 10]);
  });

  it("It should merge three sorted arrays into a single sorted array", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [10, 8, 6, 4, 2];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6, 8, 10]);
  });

  it("It should handle when one collection is empty", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [];
    const collection_3 = [10, 8, 6, 4, 2];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
  });

  it("It should handle when two collections are empty", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3 = [10, 8, 6, 4, 2];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it("It should return an empty array when all collections are empty", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });
});
