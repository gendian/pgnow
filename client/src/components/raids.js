import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import GraphicMons from "./atomic/graphicMons";

export default function Raids() {

    // REAL API
    const [raids, setRaids] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/raids")
          .then((res) => res.json())
          .then((data) => setRaids(data));
    }, []);
    
    var onestar = [];
    var threestar = [];
    var fivestar = [];
    var mega = [];

    if (raids !== null && raids !== undefined) {
        raids.forEach(raid => {
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

    const raid_element = 
        <div>
            <GraphicContainer textToShow="One Star Raids">
                <GraphicMons monsToShow={onestar}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Three Star Raids">
                <GraphicMons monsToShow={threestar}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Five Star Raids">
                <GraphicMons monsToShow={fivestar}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Mega Raids">
                <GraphicMons monsToShow={mega}/>
            </GraphicContainer>
        </div>;

    return raid_element;
}