const initState = {
  itineraries: [],
  isLoaded: false
};

const itineraryReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload
      };
    case "CHANGE_LOADING":
      return {
        ...state,
        isLoaded: true
      };
    default:
      return state;
  }
};

export default itineraryReducer;
