import { insertSort } from "../dist/insert-sort";
test("insert sort", () => {
  expect(insertSort([5, 1, 3, 8, 7])).toEqual([1, 3, 5, 7, 8]);
});
