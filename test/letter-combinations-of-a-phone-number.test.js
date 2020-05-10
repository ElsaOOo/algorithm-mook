const {
  letterCombinations,
} = require("../dist/letter-combinations-of-a-phone-number");

test("letter-combinations-of-a-phone-number", () => {
  expect(letterCombinations("23")).toBe([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});
