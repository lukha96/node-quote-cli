const quotes = [
  "Believe in yourself.",
  "Keep going, you're doing great!",
  "Small steps every day lead to big results.",
  "You are capable of amazing things."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = { getRandomQuote };
