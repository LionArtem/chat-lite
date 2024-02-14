import React, { useReducer, useState } from 'react';
import JoinBlock from './components/JoinBlock';
import reduser from './reducer';
import socket from './socket';
import Chat from './components/Chat';

function App() {
  const [state, dispatch] = useReducer(reduser, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onLogin = (obj) => {
    dispatch({ type: 'JOINED', payload: obj });
    socket.emit('ROOM:JOIN', obj);
  };

  React.useEffect(() => {
    socket.on('ROOM:JOINED', (user) => {
      console.log('новый пользователь ', user);
    });
  }, []);

  return (
    <div className="App">
      {!state.joined ? <JoinBlock onLogin={onLogin} /> : <Chat />}
    </div>
  );
}

export default App;
