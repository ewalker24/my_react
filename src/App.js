import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
