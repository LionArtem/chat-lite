import React, { useState } from 'react';
import socket from '../socket';

export default function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = useState('');
  const [user, setUser] = useState('');
  //const [isLoading, setLoading] = useState(true);

  const onEnter = () => {
    const obj = {
      roomId,
      user,
    };
    fetch('http://localhost:9999/rooms', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(obj),
    }).then(onLogin(obj));
    //console.log(roomId, user);
  };

  return (
    <div>
      <input
        placeholder="room id"
        value={roomId}
        onChange={(evt) => setRoomId(evt.target.value)}
      ></input>
      <input
        placeholder="name"
        value={user}
        onChange={(evt) => setUser(evt.target.value)}
      ></input>
      <button onClick={onEnter}>click</button>
    </div>
  );
}
