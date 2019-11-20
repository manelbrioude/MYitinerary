const initState = {
  cities: [],
  itineraries: [],
  isLoaded: false,
  cityid: ""
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CITIES":
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
