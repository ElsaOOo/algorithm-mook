const { selectionSort } = require("../dist/selection-sort");

test("selection-sort", () => {
  expect(selectionSort([5, 1, 3, 9, 8])).toEqual([1, 3, 5, 8, 9]);
});
