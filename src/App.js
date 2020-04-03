import React from "react";
import logo from "./logo.svg";
import "./App.css";


const MyCoolButton = () => {
  return (
        <div>  
          <span>Minii gaihaltai tovch</span><br/>
          <input className="MyCoolButton" type="button" value="clickme!"/>
        </div>
      );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <MyCoolButton/>
      </header>
    </div>
  );
}

export default App;
