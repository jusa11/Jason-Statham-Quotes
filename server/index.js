const express = require('express'); // Common JS module
const qoutes = require('./data/qoutes');
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const quote = qoutes[Math.floor(Math.random() * qoutes.length)];
  return quote;
}

app.get('/quotes/random-single', (req, res) => {
  // Это '/' - корневой endpoint, req - запрос, res - ответ
  console.log(req.headers['user-agent']);
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API services is running on port ${PORT}`);
});
