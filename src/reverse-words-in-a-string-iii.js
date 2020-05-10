/**
 * @param {string} s
 * @return {string}
 */
export var reverseWords = function (s) {
  return s
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
};
