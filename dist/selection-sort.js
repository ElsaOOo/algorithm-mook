"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectionSort = void 0;

// 选择排序 从数组左侧开始，每一轮选出一个最小的值排到左侧，一共会经过(n-1)(n-2)...1轮，时间复杂度为O(n^2);

/**
 *
 * @param {number []} numbers
 */
var selectionSort = function selectionSort(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[i]) {
        var tmp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = tmp;
      }
    }
  }

  return numbers;
};

exports.selectionSort = selectionSort;