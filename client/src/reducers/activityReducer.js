const initState = {
  activities: [],
  isLoaded: false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
