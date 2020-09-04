import React, { useReducer, createContext } from "react";
import ThemeReducer from "./ThemeReducer";

// Initial theme state
const initialState = {
  theme: {
    colors: null,
    baseTheme: null,
  },
};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  // Get theme
  const setTheme = () => {
    let theme;
    if (localStorage.getItem("theme"))
      theme = JSON.parse(localStorage.getItem("theme"));
    else {
      theme = {
        colors: "-blue-",
        baseTheme: "bg-white",
      };
      localStorage.setItem("theme", JSON.stringify(theme));
    }

    dispatch({ type: "SET_THEME", payload: theme });
  };

  // Select theme
  const changeColors = (theme) => {
    const regex = /-([\w-]+)-/g;
    theme = theme.match(regex);
    const updatedTheme = JSON.parse(localStorage.getItem("theme"));
    updatedTheme.colors = theme[0];
    localStorage.setItem("theme", JSON.stringify(updatedTheme));
    dispatch({ type: "CHANGE_COLORS", payload: updatedTheme });
  };

  const changeBaseTheme = (toggle) => {
    const baseTheme = toggle ? "bg-white" : "bg-black";
    const updatedTheme = JSON.parse(localStorage.getItem("theme"));
    updatedTheme.baseTheme = baseTheme;
    localStorage.setItem("theme", JSON.stringify(updatedTheme));
    dispatch({ type: "CHANGE_BASE_THEME", payload: updatedTheme });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        setTheme,
        changeBaseTheme,
        changeColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
