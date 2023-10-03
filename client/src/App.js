// client/src/App.js

import React from "react";
import Eggs from "./components/eggs";
import CurrentEvents from "./components/currentEvents";
import FutureEvents from "./components/futureEvents";
import Researches from "./components/researches";
import Raids from "./components/raids";
import ShadowRaids from "./components/shadowRaids";
import Leaders from "./components/leaders";
import TierList from "./components/tierList";
import WelcomeBanner from "./components/welcomeBanner";
import ViewDescription from "./components/viewDescription";
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
      <div className="App-body">
      <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>Events</Tab>
          <Tab>Upcoming</Tab>
          <Tab>Tier List</Tab>
          <Tab>Raids</Tab>
          <Tab>Sh.Raids</Tab>
          <Tab>Eggs</Tab>
          <Tab>Leaders</Tab>          
          <Tab>Researches</Tab>
        </TabList>
          <TabPanel>
            <WelcomeBanner/>
            <CurrentEvents/>
            <SourceLink textToShow="Credit to LeekDuck for this info" linkToShow="https://leekduck.com/events/"/>
          </TabPanel>
          <TabPanel>
            <FutureEvents/>
            <SourceLink textToShow="Credit to LeekDuck for this info" linkToShow="https://leekduck.com/events/"/>
          </TabPanel>        
          <TabPanel>
            <ViewDescription textToShow="Top 10 pokemon from the mega, shadow and regular raid attacker list"/>
            <TierList/>
            <SourceLink textToShow="Credit to GamePress for this info" linkToShow="https://gamepress.gg/pokemongo/attackers-tier-list"/>
          </TabPanel>
          <TabPanel>
            <Raids/>
            <SourceLink textToShow="Credit to Pokemon Go Fandom for this info" linkToShow="https://pokemongo.fandom.com/wiki/List_of_current_Raid_Bosses"/>
          </TabPanel>
          <TabPanel>
            <ShadowRaids/>
            <SourceLink textToShow="Credit to Pokemon Go Fandom for this info" linkToShow="https://pokemongo.fandom.com/wiki/List_of_current_Raid_Bosses"/>
          </TabPanel>
          <TabPanel>
            <Eggs/>
            <SourceLink textToShow="Credit to LeekDuck for this info" linkToShow="https://leekduck.com/eggs/"/>
          </TabPanel>
          <TabPanel>
            <Leaders/>
            <SourceLink textToShow="Credit to Pokemon Go Fandom for this info" linkToShow="https://pokemongo.fandom.com/wiki/Team_GO_Rocket_Leaders"/>
          </TabPanel>
          <TabPanel>
            <Researches/>
            <SourceLink textToShow="Credit to LeekDuck for this info" linkToShow="https://leekduck.com/research/"/>
          </TabPanel>
      </Tabs>
      </div>
    </div>
  );
}

export default App;