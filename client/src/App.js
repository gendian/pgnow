// client/src/App.js

import React from "react";
import Eggs from "./components/eggs";
import CurrentEvents from "./components/currentEvents";
import FutureEvents from "./components/futureEvents";
import Researches from "./components/researches";
import Raids from "./components/raids";
import ShadowRaids from "./components/shadowRaids";
import Leaders from "./components/leaders";

//import Loading from "./components/loading";
import "./App.css";

function App() {
  var arraysToDisplay = [0, 1];
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <Loading/>
      </header>
      */}
      <div class="App-body">        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
          <Eggs/>
          <Raids/>
          <ShadowRaids/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
          <CurrentEvents/>        
          <FutureEvents/>
          <Leaders/>
        </div>
        <Researches/>
      </div>
    </div>
  );
}

export default App;