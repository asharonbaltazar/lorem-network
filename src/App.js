import React from "react";
import "./App.css";
import Panel from "./components/Panel";
import Views from "./components/Views";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <div className="App">
          <Panel />
          <Views />
        </div>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
