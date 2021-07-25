const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const Data = require('./data.json');

app.use(express.static('./public'));
// app.get('/', (req, res) => {
//   res.send('hey')
// })

app.get('/data', (req, res) => {
  res.json(Data);
})

app.listen(PORT, () => {
  console.log(`Up and Running on port ${PORT}`);
})