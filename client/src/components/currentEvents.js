import React from "react";
import Countdown from 'react-countdown';
import GraphicContainer from "./atomic/graphicContainer";

export default function CurrentEvents() {

    // REAL API
    const [events, setEvents] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/events")
          .then((res) => res.json())
          .then((data) => setEvents(data));
    }, []);

    var currentEvents = [];
    let currentTime = new Date().getTime();
    if (events !== null && events !== undefined) {
        events.sort(function(a,b){return Date.parse(a.end)-Date.parse(b.end)});
        events.forEach(event => {
            if (!event.name.includes("Raid")) {
                // Countdown Timer
                var start = new Date(Date.parse(event.start));
                var countDownDate = Date.parse(event.end);
                var distance = countDownDate - currentTime;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Show events that are current
                let end = new Date(Date.parse(event.end));
                if (start <= currentTime && end >= currentTime) {
                    const listItem = 
                        <li>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
                                <div>{event.name.replace("Ã©", "é")}</div>
                                <div className={distance < 172800000 ? "countdown-soon" : ""}>Ends in: <b><Countdown date={Date.now() + distance} /></b></div>
                            </div>
                        </li>;          
                    currentEvents.push(listItem);
                }
            }
        });
    }

    const event_element = 
    <div>
        <GraphicContainer textToShow="Current Events">
            <ul>{currentEvents}</ul>
        </GraphicContainer>
    </div>;

    return event_element;
}