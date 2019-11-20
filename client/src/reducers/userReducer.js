const initState = {
  token: null,
  user: null,
  isLoaded: false
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    case "CREATE_USER":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT_USER":
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null
      };
    case "REFRESH_USER":
      console.log(action.payload);
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
