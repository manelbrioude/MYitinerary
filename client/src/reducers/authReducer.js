const initialState = {
  token: localStorage.getItem("token"),
  isAUthenticated: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "USER_LOADED":
      return {
        ...state,
        isAUthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case "LOGIN_SUCCES":
      return {};
    case "REGISTER_SUCCESS":
      return {
        ...state,
        ...action.payload,
        isAUthenticated: true,
        isLoading: false
      };
    case "AUTH_ERROR":
      return {};
    case "LOGIN_FAIL":
      return {};
    case "LOGOUT_SUCCESS":
      return {};
    case "REGISTER_FAIL":
      return {
        ...state,
        token: null,
        user: null,
        isAUthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
