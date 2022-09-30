#!/usr/bin/env node

import fetch from "node-fetch";
import boxen from "boxen";

const url = `https://stoicquotesapi.com/v1/api/quotes/random`;

async function fetchQuote() {
  const response = await fetch(url);
  const data = await response.json();
  const quote = boxen([`${data.body}`, `~ ${data.author}`].join("\n"), {
    padding: 1,
    borderStyle: "round",
    borderColor: "green",
  });
  console.log(quote);
}

fetchQuote();
