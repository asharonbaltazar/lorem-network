import React, { useReducer, createContext } from "react";
import ThemeReducer from "./ThemeReducer";

// Initial theme state
const initialState = {
  theme: "-blue-",
};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  // Select theme
  const changeTheme = (theme) => {
    console.log(initialState.theme);
    const regex = /-([\w-]+)-/g;
    theme = theme.match(regex);
    console.log(theme[0]);
    dispatch({ type: "CHANGE_THEME", payload: theme[0] });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
