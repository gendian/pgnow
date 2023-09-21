import React from "react";
import Collapsible from 'react-collapsible';
import { FaLink } from 'react-icons/fa';
import GraphicContainer from "./atomic/graphicContainer";
import Mons from "./atomic/mons";

export default function Raids() {

    // REAL API
    const [raids, setRaids] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/raids")
          .then((res) => res.json())
          .then((data) => setRaids(atob(JSON.parse(data).content)));
    }, []);

    var parsed_raids = JSON.parse(raids);
    
    var onestar = [];
    var threestar = [];
    var fivestar = [];
    var mega = [];

    if (parsed_raids !== null && parsed_raids !== undefined) {
        parsed_raids.forEach(raid => {
            if (raid.tier.includes("1")) {
                onestar.push(raid.name);
            } else if (raid.tier.includes("3")) {
                threestar.push(raid.name);
            } else if (raid.tier.includes("5")) {
                fivestar.push(raid.name);
            } else {
                mega.push(raid.name);
            }
        });
    }

    const columns = 
        <div>
            <GraphicContainer textToShow="One Star Raids">
                <Mons monsToShow={onestar}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Three Star Raids">
                <Mons monsToShow={threestar}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Five Star Raids">
                <Mons monsToShow={fivestar}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Mega Raids">
                <Mons monsToShow={mega}/>
            </GraphicContainer>
        </div>;

    return columns;
}