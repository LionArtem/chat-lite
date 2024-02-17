import React, { useState } from 'react';

export default function Chat({ users }) {
  const [message, setMessage] = useState('');

  const listMessage = [
    'message',
    'message',
    'message',
    'message',
    'message',
    'message',
  ];

  //   const listUsers = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];

  return (
    <>
      <div>
        <p>{`users: ${users.length}`}</p>
        <ul>
          {users?.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {listMessage.map((message, i) => (
            <li key={i}>{message}</li>
          ))}
        </ul>
        <form>
          <input
            value={message}
            onChange={(evt) => setMessage(evt.target.value)}
            type="text"
          />
          <button>send</button>
        </form>
      </div>
    </>
  );
}
