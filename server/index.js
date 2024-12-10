const express = require('express'); // Common JS module
// const qoutes = require('./data/qoutes');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log(req.headers);
  req.headers;
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Quotes API services is running on port ${PORT}`);
});
