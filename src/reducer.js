const reducer = (state, action) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        roomId: action.payload.roomId,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default reducer;
