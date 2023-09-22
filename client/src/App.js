// client/src/App.js

import React from "react";
import Eggs from "./components/eggs";
import CurrentEvents from "./components/currentEvents";
import FutureEvents from "./components/futureEvents";
import Researches from "./components/researches";
import Raids from "./components/raids";
import ShadowRaids from "./components/shadowRaids";
import Leaders from "./components/leaders";
import SourceLink from "./components/atomic/sourceLink";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>Events</Tab>
          <Tab>Raids</Tab>
          <Tab>Sh.Raids</Tab>
          <Tab>Eggs</Tab>
          <Tab>Leaders</Tab>          
          <Tab>Researches</Tab>
          <Tab>Upcoming</Tab>
        </TabList>
          <TabPanel>
            <SourceLink textToShow="Credit to LeekDuck" linkToShow="https://leekduck.com/events/"/>
            <CurrentEvents/>
          </TabPanel>
          <TabPanel>
            <SourceLink textToShow="Credit to LeekDuck" linkToShow="https://leekduck.com/boss/"/>
            <Raids/>
          </TabPanel>
          <TabPanel>
            <SourceLink textToShow="Credit to Pokemon Go Fandom" linkToShow="https://pokemongo.fandom.com/wiki/List_of_current_Raid_Bosses"/>
            <ShadowRaids/>
          </TabPanel>
          <TabPanel>
            <SourceLink textToShow="Credit to LeekDuck" linkToShow="https://leekduck.com/eggs/"/>
            <Eggs/>
          </TabPanel>
          <TabPanel>
            <SourceLink textToShow="Credit to Pokemon Go Fandom" linkToShow="https://pokemongo.fandom.com/wiki/Team_GO_Rocket_Leaders"/>
            <Leaders/>
          </TabPanel>
          <TabPanel>
            <SourceLink textToShow="Credit to LeekDuck" linkToShow="https://leekduck.com/research/"/>
            <Researches/>
          </TabPanel>        
          <TabPanel>
            <SourceLink textToShow="Credit to LeekDuck" linkToShow="https://leekduck.com/events/"/>
            <FutureEvents/>
          </TabPanel>
      </Tabs>
      </div>
    </div>
  );
}

export default App;