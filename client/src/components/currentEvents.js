import React from "react";
import Countdown from 'react-countdown';
import GraphicContainer from "./atomic/graphicContainer";
import { v4 as uuid } from "uuid";

export default function CurrentEvents() {

    const weekInMillis = 6.048e+8;
    const dayInMillis = 8.64e+7;
    const hourInMillis = 3.6e+6;

    const [events, setEvents] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/events")
          .then((res) => res.json())
          .then((data) => setEvents(data));
    }, []);

    var currentEvents = [];
    var comingSoon = [];
    let currentTime = new Date().getTime();
    var event_element = <div></div>;
    if (events !== null && events !== undefined) {
        events.sort(function(a,b){return Date.parse(a.end)-Date.parse(b.end)});
        events.forEach(event => {
            // Countdown Timer
            var start = new Date(Date.parse(event.start));
            var countDownDate = Date.parse(event.end);
            var distance = countDownDate - currentTime;
            
            // Show events that are current
            let end = new Date(Date.parse(event.end));
            if (start <= currentTime && end >= currentTime) {
                const unique_id = uuid();
                const listItem = 
                    <li key={"event-"+unique_id}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
                            <div>{event.name.replace("Ã©", "é")}</div>
                            <div className={distance < 172800000 ? "countdown-soon" : ""}>
                                <Countdown date={Date.now() + distance}renderer={props => 
                                    <div>
                                        {distance > dayInMillis ? props.days + (props.days===1?" day ":" days ") : ""}
                                        {distance > hourInMillis && distance < dayInMillis*2 ? props.hours + (props.hours===1?" hour ":" hours "): ""}
                                        {distance < dayInMillis ? props.minutes + (props.minutes===1?" minute ":" minutes "): ""}
                                        {distance < hourInMillis ? props.seconds + (props.seconds===1?" second ":" seconds "): ""}
                                            left
                                    </div>
                                }
                                />
                            </div>
                        </div>
                    </li>;          
                currentEvents.push(listItem);
            }
        });

        events.sort(function(a,b){return Date.parse(a.start)-Date.parse(b.start)});
        events.forEach(event => {
            // Countdown Timer
            var start = new Date(Date.parse(event.start));
            var countDownDate = Date.parse(event.start);
            var distance = countDownDate - currentTime;
            if (distance < weekInMillis && start >= currentTime) {
                const unique_id = uuid();
                const listItem = 
                <li key={"current-"+unique_id}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
                        <div>{event.name.replace("Ã©", "é")}</div>
                        <div>
                            <Countdown date={Date.now() + distance}renderer={props => 
                                <div>
                                    {distance > dayInMillis ? props.days + (props.days===1?" day ":" days "): ""}
                                    {distance > hourInMillis && distance < dayInMillis*2 ? props.hours + (props.hours===1?" hour ":" hours "): ""}
                                    {distance < dayInMillis ? props.minutes + (props.minutes===1?" minute ":" minutes "): ""}
                                    {distance < hourInMillis ? props.seconds + (props.seconds===1?" second ":" seconds "): ""}
                                </div>
                            }
                            />
                        </div>
                    </div>
                </li>;
                comingSoon.push(listItem);
            }
        });

        event_element = 
        <div>
            <GraphicContainer textToShow="Live Events" iconToShow="event">
                <ul>{currentEvents}</ul>
            </GraphicContainer>
            <GraphicContainer textToShow="Starting soon" iconToShow="upcoming">
                <ul>{comingSoon}</ul>
            </GraphicContainer>
        </div>;
    }

    return event_element;
}