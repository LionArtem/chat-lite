const reducer = (state, action) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        roomId: action.payload.roomId,
        userName: action.payload.user,
      };

    case 'SET_USERS':
      return {
        ...state,
        joined: true,
        roomId: action.payload.roomId,
        userName: action.payload.user,
      };

    default:
      return state;
  }
};

export default reducer;
