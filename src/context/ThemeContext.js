import React, { useReducer, createContext } from "react";
import ThemeReducer from "./ThemeReducer";

// Initial theme state
const initialState = {
  theme: "-blue-",
  baseTheme: "bg-white",
};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  // Select theme
  const changeTheme = (theme) => {
    const regex = /-([\w-]+)-/g;
    theme = theme.match(regex);
    dispatch({ type: "CHANGE_THEME", payload: theme[0] });
  };

  const changeBaseTheme = (toggle) => {
    const theme = toggle ? "bg-white" : "bg-black";
    dispatch({ type: "CHANGE_BASE_THEME", payload: theme });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        baseTheme: state.baseTheme,
        changeBaseTheme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
