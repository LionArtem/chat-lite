const express = require('express');
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});

const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.json(rooms);
});

app.post('/rooms', (req, res) => {
  console.log('hello');
});

io.on('connection', (socket) => {
  console.log('socket connection', socket.id);
});

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('server works');
});
