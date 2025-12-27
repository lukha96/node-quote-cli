const { getRandomQuote } = require("../quotes");

test("returns a valid quote", () => {
  const quote = getRandomQuote();
  expect(typeof quote).toBe("string");
  expect(quote.length).toBeGreaterThan(0);
});
