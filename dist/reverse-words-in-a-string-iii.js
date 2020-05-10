"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseWords = void 0;

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function reverseWords(s) {
  return s.split(" ").map(function (item) {
    return item.split("").reverse().join("");
  }).join(" ");
};

exports.reverseWords = reverseWords;