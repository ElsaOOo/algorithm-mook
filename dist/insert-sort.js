"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertSort = void 0;

// 插入排序 思路是从数组最左侧第2个元素开始，元素不断的与左边的元素作比较，如果元素比左边的元素小则交换，同时指针也向左前进一步。

/**
 * @param { number [] } numbers
 */
var insertSort = function insertSort(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j > 0; j--) {
      if (numbers[j] < numbers[j - 1]) {
        var tmp = numbers[j];
        numbers[j] = numbers[j - 1];
        numbers[j - 1] = tmp;
      }
    }
  }

  return numbers;
};

exports.insertSort = insertSort;