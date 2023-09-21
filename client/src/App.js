// client/src/App.js

import React from "react";
import Eggs from "./components/eggs";
import CurrentEvents from "./components/currentEvents";
import FutureEvents from "./components/futureEvents";
import Researches from "./components/researches";
import Raids from "./components/raids";
import ShadowRaids from "./components/shadowRaids";
import Leaders from "./components/leaders";
import GraphicContainer from "./components/atomic/graphicContainer";
import Mons from "./components/atomic/mons";

//import Loading from "./components/loading";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <Loading/>
      </header>
      */}
      <div class="App-body">
        <Raids/>
        <ShadowRaids/>
        <Leaders/>
        <Eggs/>
        <CurrentEvents/>      
        <FutureEvents/>
        <Researches/>
      </div>
    </div>
  );
}

export default App;