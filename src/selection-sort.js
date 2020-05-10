// 选择排序 从数组左侧开始，每一轮选出一个最小的值排到左侧，一共会经过(n-1)(n-2)...1轮，时间复杂度为O(n^2);

/**
 *
 * @param {number []} numbers
 */
export const selectionSort = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[i]) {
        const tmp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = tmp;
      }
    }
  }
  return numbers;
};
