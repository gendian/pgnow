import React from "react";
import Collapsible from 'react-collapsible';
import Countdown from 'react-countdown';
import { FaLink } from 'react-icons/fa';

export default function FutureEvents() {

    // REAL API
    const [events, setEvents] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/events")
          .then((res) => res.json())
          .then((data) => setEvents(atob(JSON.parse(data).content)));
    }, []);

    var futureEvents = [];
    let currentTime = new Date().getTime();
    var parsed_events = JSON.parse(events);
    if (parsed_events !== null && parsed_events !== undefined) {
        parsed_events.sort(function(a,b){return Date.parse(a.start)-Date.parse(b.start)});
        parsed_events.forEach(event => {
            // Countdown Timer
            var start = new Date(Date.parse(event.start));
            var countDownDate = Date.parse(event.start);
            var distance = countDownDate - currentTime;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Show events that are current
            if (start >= new Date().getTime()) {
                const listItem = 
                    <li>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
                            <div>{event.name.replace("Ã©", "é")}</div>
                            <div className={distance < 172800000 ? "countdown-soon" : ""}>Starts in: <b><Countdown date={Date.now() + distance} /></b></div>
                        </div>
                    </li>;          
                futureEvents.push(listItem);
            }
        });
    }

    var eventDiv =  <div class="section-container">
                        <Collapsible trigger="Collapse &#9660;" open={true}>
                            <h3>Future Events <a target="_blank" href="https://leekduck.com/events/"><FaLink/></a></h3>
                            <ul>{futureEvents}</ul>
                        </Collapsible> 
                    </div>

    return eventDiv;
}