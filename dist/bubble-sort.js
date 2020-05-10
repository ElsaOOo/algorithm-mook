"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bubbleSort = void 0;

// 冒泡排序 从数组最右侧开始两两比较，将较小的数置换到左侧，时间复杂度为O(n^2)

/**
 * @param { number[] } numbers
 */
var bubbleSort = function bubbleSort(numbers) {
  for (var i = numbers.length; i > 0; i--) {
    for (var j = i; j > 0; j--) {
      if (numbers[j] < numbers[j - 1]) {
        var tmp = numbers[j];
        numbers[j] = numbers[j - 1];
        numbers[j - 1] = tmp;
      }
    }
  }

  return numbers;
};

exports.bubbleSort = bubbleSort;