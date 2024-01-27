import { useReducer, useState } from 'react';
import JoinBlock from './components/JoinBlock';
import reduser from './reducer';
import socket from './socket';

function App() {
  const [state, dispatch] = useReducer(reduser, {
    joined: false,
    roomId: null,
    user: null,
  });

  const onLogin = (obj) => {
    dispatch({ type: 'JOINED', payload: obj });
    socket.emit('ROOM:JOIN', obj);
  };

  //console.log(state);

  return (
    <div className="App">
      {!state.joined && <JoinBlock onLogin={onLogin} />}
    </div>
  );
}

export default App;
