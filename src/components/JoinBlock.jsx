import React from 'react';
import socket from '../socket';

export default function JoinBlock() {
  return (
    <div>
      <input placeholder="room id"></input>
      <input placeholder="name"></input>
      <button>click</button>
    </div>
  );
}
