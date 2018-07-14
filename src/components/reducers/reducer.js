const initialState = {
  count: 0,
  message: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUYONE':
      return {
        count: state.count + 1
      };
    case 'EATONE':
      return {
        count: state.count - 1
      };
    case 'SET INIT' :
    return {
      count: action.payload
    };
    default:
      return state;
  }
}

export default reducer;
