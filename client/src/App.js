// client/src/App.js
import React from "react";
import Eggs from "./components/eggs";
import Wilds from "./components/wilds";
import CurrentEvents from "./components/currentEvents";
import FutureEvents from "./components/futureEvents";
import Researches from "./components/researches";
import Raids from "./components/raids";
import ShadowRaids from "./components/shadowRaids";
import Leaders from "./components/leaders";
import TierList from "./components/tierList";
import WelcomeBanner from "./components/welcomeBanner";
import ViewDescription from "./components/viewDescription";
import Questionnaire from "./components/questionnaire/questionnaire";
import SourceLink from "./components/atomic/sourceLink";
import Tweets from "./components/tweets";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CookiesProvider, useCookies } from "react-cookie";

//import Loading from "./components/loading";
import "./App.css";
import GoalsContextProvider from "./context/goalsContext";

function App() {
  document.title = "GO Now";
  
  return (
    <CookiesProvider>
      <div className="App">
        {/*
        <header className="App-header">
          <Loading/>
        </header>
        */}
        <GoalsContextProvider>
          <div className="App-body">
            <Tabs forceRenderTabPanel={true}>
              <TabList>
                <Tab>Events</Tab>
                <Tab>Upcoming</Tab>
                <Tab>Wild Encounters</Tab>
                <Tab>Eggs</Tab>
                <Tab>Raids</Tab>
                <Tab>Shadow Raids</Tab>
                <Tab>Leaders</Tab>          
                <Tab>Researches</Tab>
                <Tab>Tier List</Tab>
                <Tab>Tweets</Tab>
                <Tab>Hunting</Tab>
              </TabList>
                <TabPanel>
                  <WelcomeBanner/>
                  <CurrentEvents/>
                  <SourceLink textToShow="Credit to LeekDuck for this info." linkToShow="https://leekduck.com/events/"/>
                </TabPanel>
                <TabPanel>
                  <ViewDescription textToShow="Events that are starting soon."/>
                  <FutureEvents/>
                  <SourceLink textToShow="Credit to LeekDuck for this info" linkToShow="https://leekduck.com/events/"/>
                </TabPanel>
                <TabPanel>
                  <ViewDescription textToShow="Pokemon that you can find in the wild."/>
                  <Wilds/>
                </TabPanel>
                <TabPanel>
                  <ViewDescription textToShow="Pokemon that can hatch from eggs."/>
                  <Eggs/>
                  <SourceLink textToShow="Credit to LeekDuck for this info." linkToShow="https://leekduck.com/eggs/"/>
                </TabPanel>
                <TabPanel>
                  <ViewDescription textToShow="Current raid bosses."/>
                  <Raids/>
                  <SourceLink textToShow="Credit to Pokemon Go Fandom for this info." linkToShow="https://pokemongo.fandom.com/wiki/List_of_current_Raid_Bosses"/>
                </TabPanel>
                <TabPanel>
                  <ViewDescription textToShow="Current shadow raid bosses."/>
                  <ShadowRaids/>
                  <SourceLink textToShow="Credit to Pokemon Go Fandom for this info." linkToShow="https://pokemongo.fandom.com/wiki/List_of_current_Raid_Bosses"/>
                </TabPanel>
                <TabPanel>
                  <ViewDescription textToShow="Rocket Go Leaders and their team line ups."/>
                  <Leaders/>
                  <SourceLink textToShow="Credit to Pokemon Go Fandom for this info." linkToShow="https://pokemongo.fandom.com/wiki/Team_GO_Rocket_Leaders"/>
                </TabPanel>
                <TabPanel>
                  <ViewDescription textToShow="Current pool of field researches."/>
                  <Researches/>
                  <SourceLink textToShow="Credit to LeekDuck for this info." linkToShow="https://leekduck.com/research/"/>
                </TabPanel>                     
                <TabPanel>
                  <ViewDescription textToShow="Top 15 pokemon from the mega, shadow and regular raid attacker list."/>
                  <TierList/>
                  <SourceLink textToShow="Credit to GamePress for this info." linkToShow="https://gamepress.gg/pokemongo/attackers-tier-list"/>
                </TabPanel>          
                <TabPanel>
                  <Tweets/>
                </TabPanel> 
                <TabPanel>
                  <Questionnaire/>
                </TabPanel>
            </Tabs>
          </div>
        </GoalsContextProvider>
      </div>
    </CookiesProvider>
  );
}

export default App;