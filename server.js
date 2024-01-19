const express = require('express');
const app = express();

const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.json(rooms);
});

app.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('server works');
});
