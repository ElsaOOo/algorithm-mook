const { reverseWords } = require("../dist/reverse-words-in-a-string-iii");

test("reverse-words-in-a-string-iii", () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc"
  );
  expect(reverseWords("hello world")).toBe("olleh dlrow");
});
