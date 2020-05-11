// 电话号码的字母组合
const digitMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
export var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  let letterArr = digits.split("").map((s) => digitMap[s]);
  while (letterArr.length > 1) {
    const result = [];
    for (let i = 0; i < letterArr[0].length; i++) {
      for (let j = 0; j < letterArr[1].length; j++) {
        result.push(letterArr[0][i] + letterArr[1][j]);
      }
    }
    letterArr.splice(0, 2, result);
  }
  return letterArr[0];
};
