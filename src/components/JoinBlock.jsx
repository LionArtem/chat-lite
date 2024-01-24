import React, { useState } from 'react';
import socket from '../socket';

export default function JoinBlock() {
  const [roomId, setRoomId] = useState('');
  const [user, setUser] = useState('');

  const onEnter = () => {
    console.log(roomId, user);
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
