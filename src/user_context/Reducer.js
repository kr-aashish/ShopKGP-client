export const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isFetching: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isFetching: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error: true,
        isFetching: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        error: false,
        isFetching: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
