import React, { useReducer } from "react";
import JoinBlock from "./components/JoinBlock";
import reduser from "./reducer";
import socket from "./socket";
import Chat from "./components/Chat";

function App() {
  const [state, dispatch] = useReducer(reduser, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  console.log(state);

  const onLogin = async (obj) => {
    dispatch({ type: "JOINED", payload: obj });
    socket.emit("ROOM:JOIN", obj);
    const data = await fetch(`http://localhost:9999/rooms/${obj.roomId}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    data.json().then((res) => {
      // setUsers(res.users);
      dispatch({
        type: 'SET_DATA',
        payload: res,
      });
    });
  };

  const setUsers = (users) => {
    dispatch({ type: "SET_USERS", payload: users });
  };

  const addMessage = (message) => {
    console.log(message);
    //console.log(41);
    dispatch({
      type: "NEW_MESSAGE",
      payload: message,
    });
  };

  React.useEffect(() => {
    console.log(49);
    socket.on("ROOM:SET_USERS", setUsers);
    socket.on("ROOM:NEW_MESSAGE", (message) => {
      addMessage(message);
    });

    // return () => socket.off('ROOM:NEW_MESSAGE');
  }, []);

  return (
    <div className="App">
      {!state.joined ? (
        <JoinBlock onLogin={onLogin} />
      ) : (
        <Chat {...state} onAddMessage={addMessage} />
      )}
    </div>
  );
}

export default App;
