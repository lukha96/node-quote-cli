#!/usr/bin/env node

const path = require("path");

const { getRandomQuote } = require(
  path.join(__dirname, "../quotes")
);

console.log(getRandomQuote());

