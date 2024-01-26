import { useReducer, useState } from 'react';
import JoinBlock from './components/JoinBlock';
import reduser from './reducer';

function App() {
  const [state, dispatch] = useReducer(reduser, {
    isAuth: false,
  });

  const onLogin = () => {
    dispatch({ type: 'IS_AUTH', payload: true });
  };

  console.log(state);

  return (
    <div className="App">
      {!state.isAuth && <JoinBlock onLogin={onLogin} />}
    </div>
  );
}

export default App;
