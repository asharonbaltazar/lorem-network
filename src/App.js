import React from "react";
import "./App.css";
import Panel from "./components/Panel";
import Views from "./components/Views";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App h-screen">
        <Panel />
        <Views />
      </div>
    </AppProvider>
  );
}

export default App;
