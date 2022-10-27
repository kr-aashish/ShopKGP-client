import { createContext, useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";

const INITIAL_USER_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const UserContext = createContext(INITIAL_USER_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, user_dispatch] = useReducer(Reducer, INITIAL_USER_STATE);

  useEffect(() => {
    console.log("SETTING LOCAL STORAGE");
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContext.Provider value={{ state, user_dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
