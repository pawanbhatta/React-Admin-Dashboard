import { createContext, useReducer } from "react";
import darkModeReducer from "./darkModeReducer";

const INITAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITAL_STATE);

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
