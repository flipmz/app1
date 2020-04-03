import React from "react";
import logo from "./logo.svg";
import "./style.css";

import { Comment } from "../Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Comment zohiogch="Сараа" />
      </header>
    </div>
  );
}

export default App;
