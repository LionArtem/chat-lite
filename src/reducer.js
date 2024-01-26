const reducer = (state, action) => {
  switch (action.type) {
    case 'IS_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
