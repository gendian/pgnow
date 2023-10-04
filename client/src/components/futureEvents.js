import React from "react";
import Countdown from 'react-countdown';
import GraphicContainer from "./atomic/graphicContainer";

export default function FutureEvents() {

    const weekInMillis = 6.048e+8;
    const dayInMillis = 8.64e+7;
    const hourInMillis = 3.6e+6;

    // REAL API
    const [events, setEvents] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/events")
          .then((res) => res.json())
          .then((data) => setEvents(data));
    }, []);

    var comingSoon = [];
    var spotlightEvents = [];
    var communityEvents = [];
    var raidEvents = [];
    var hatchEvents = [];
    var showcaseEvents = [];
    var leagueEvents = [];
    var futureEvents = [];
    
    var count = 0;
    let currentTime = new Date().getTime();
    var event_element = <div></div>;
    if (events !== null && events !== undefined) {
        events.sort(function(a,b){return Date.parse(a.start)-Date.parse(b.start)});
        events.forEach(event => {
            // Countdown Timer
            var start = new Date(Date.parse(event.start));
            var countDownDate = Date.parse(event.start);
            var distance = countDownDate - currentTime;

            // Show events that start after today
            if (start >= new Date().getTime()) {                
                const listItem = 
                    <li key={"future-"+count}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
                            <div><p>{event.name.replace("Ã©", "é")}</p></div>
                            <div>{distance < weekInMillis ? 
                                <p>
                                    <Countdown date={Date.now() + distance}renderer={props => 
                                        <div>
                                            {distance > dayInMillis ? props.days + (props.days===1?" day ":" days "): ""}
                                            {distance > hourInMillis && distance < dayInMillis*2 ? props.hours + (props.hours===1?" hour ":" hours "): ""}
                                            {distance < dayInMillis ? props.minutes + (props.minutes===1?" minute ":" minutes "): ""}
                                            {distance < hourInMillis ? props.seconds + (props.seconds===1?" second ":" seconds "): ""}
                                        </div>
                                    }
                                    />
                                </p> :
                                <p>{new Date(event.start).toLocaleDateString(navigator.languages[0], {year:"2-digit",month:"2-digit", day:"2-digit"})}</p>
                                }
                            </div>
                        </div>
                    </li>;
                
                count++;
                
                if (distance < weekInMillis) {
                    comingSoon.push(listItem);    
                } else {
                    let event_name_lower = event.name.toLowerCase();
                    if (event_name_lower.includes("hatch")) {
                        hatchEvents.push(listItem);
                    } else if (event_name_lower.includes("showcase")) {
                        showcaseEvents.push(listItem);
                    } else if (event_name_lower.includes("spotlight")) {
                        spotlightEvents.push(listItem);
                    } else if (event_name_lower.includes("raid")) {
                        raidEvents.push(listItem);
                    } else if (event_name_lower.includes("community")) {
                        communityEvents.push(listItem);
                    } else if (event_name_lower.includes("league")) {
                        leagueEvents.push(listItem);
                    } else {
                        futureEvents.push(listItem);
                    }                    
                }
            }

        });

        event_element = 
        <div>
            <GraphicContainer textToShow="Starting soon" iconToShow="upcoming">
                <ul>{comingSoon}</ul>
            </GraphicContainer>
            <GraphicContainer textToShow="Community Days" iconToShow="upcoming">
                <ul>{communityEvents}</ul>
            </GraphicContainer>
            <GraphicContainer textToShow="Raid" iconToShow="upcoming">
                <ul>{raidEvents}</ul>
            </GraphicContainer>
            <GraphicContainer textToShow="Spotlight" iconToShow="upcoming">
                <ul>{spotlightEvents}</ul>
            </GraphicContainer>
            <GraphicContainer textToShow="Hatch" iconToShow="upcoming">
                <ul>{hatchEvents}</ul>
            </GraphicContainer>
            <GraphicContainer textToShow="Showcase" iconToShow="upcoming">
                <ul>{showcaseEvents}</ul>
            </GraphicContainer>
            <GraphicContainer textToShow="League" iconToShow="upcoming">
                <ul>{leagueEvents}</ul>
            </GraphicContainer>
            <GraphicContainer textToShow="Future events" iconToShow="upcoming">
                <ul>{futureEvents}</ul>
            </GraphicContainer>
        </div>;
    }

    return event_element;
}