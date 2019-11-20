const initState = {
  comments: [],
  isLoaded: false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload
      };
    case "NEW_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
