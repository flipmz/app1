import React from "react";
import logo from "./logo.svg";
import "./App.css";


const MyCoolButton = (props) => {
  return (
        <div>  
          <span>{props.tovchNer ? props.tovchNer: "Hello button"}</span><br/>
          <input className="MyCoolButton" type="button" value={props.tovchText}/>
        </div>
      );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <MyCoolButton tovchNer="Hi button from App" tovchText="Magic Click"/>
       <MyCoolButton />
      </header>
    </div>
  );
}

export default App;
