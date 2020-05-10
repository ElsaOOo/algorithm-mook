"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.letterCombinations = void 0;
var digitMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

var letterCombinations = function letterCombinations(digits) {
  if (!digits) {
    return [];
  }

  var letterArr = digits.split("").map(function (s) {
    return digitMap[s];
  });

  while (letterArr.length > 1) {
    var result = [];

    for (var i = 0; i < letterArr[0].length; i++) {
      for (var j = 0; j < letterArr[1].length; j++) {
        result.push(letterArr[0][i] + letterArr[1][j]);
      }
    }

    letterArr.splice(0, 2, result);
  }

  return letterArr[0];
};

exports.letterCombinations = letterCombinations;