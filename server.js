const express = require('express');
const app = express();
app.use(express.json());
const server = require('http').Server(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});

app.use((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  // if (listDomen.includes(origin)) {
  //   // устанавливаем заголовок, который разрешает браузеру запросы с этого источника
  //   res.header('Access-Control-Allow-Origin', origin);
  // }
  res.header('Access-Control-Allow-Origin', '*');
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  next();
});

const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.json(rooms);
});

app.post('/rooms', (req, res) => {
  const { roomId, user } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ['users', new Map([])],
        ['messages', []],
      ])
    );
  }
  res.send([...rooms.keys()]);
});

io.on('connection', (socket) => {
  socket.on('ROOM:JOIN', ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    socket.broadcast.to(roomId).emit('ROOM:JOINED', users);
    //console.log('59');
  });
});

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('server works');
});
