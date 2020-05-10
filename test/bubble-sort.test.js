const { bubbleSort } = require("../dist/bubble-sort");

test("bubble sort", () => {
  expect(bubbleSort([5, 1, 3, 7, 8])).toEqual([1, 3, 5, 7, 8]);
});
