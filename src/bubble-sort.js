// 冒泡排序 从数组最右侧开始两两比较，将较小的数置换到左侧，时间复杂度为O(n^2)

/**
 * @param { number[] } numbers
 */
export const bubbleSort = (numbers) => {
  for (let i = numbers.length; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      if (numbers[j] < numbers[j - 1]) {
        const tmp = numbers[j];
        numbers[j] = numbers[j - 1];
        numbers[j - 1] = tmp;
      }
    }
  }
  return numbers;
};
