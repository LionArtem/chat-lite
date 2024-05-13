import React, { useState } from "react";
import socket from "../socket";

export default function Chat({
  users,
  messages,
  userName,
  roomId,
  onAddMessage,
}) {
  const [message, setMessage] = useState("");
 // console.log(messages);

  //console.log(users); //??без этого не обновляются пользователи??

  const onSendMessage = (evt) => {
    //console.log(17);
    evt.preventDefault();
    socket.emit("ROOM:NEW_MESSAGE", {
      roomId,
      text: message,
      userName,
    });
    setMessage("");
  };

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
          {messages.map((message, i) => (
            <li key={i}>
              <p>{message.text}</p>
              <span>{`User: ${message.userName}`}</span>
            </li>
          ))}
        </ul>
        <form>
          <input
            value={message}
            onChange={(evt) => setMessage(evt.target.value)}
            type="text"
          />
          <button onClick={(evt) => onSendMessage(evt)}>send</button>
        </form>
      </div>
    </>
  );
}
