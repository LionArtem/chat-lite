import io from 'socket.io-client';
const webSocket = io('http://localhost:9999');

export default webSocket;
