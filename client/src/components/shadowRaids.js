import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import GraphicMons from "./atomic/graphicMons";

export default function ShadowRaids(props) {
    const interactive = props.interactive ? props.interactive : false;
    // REAL API
    const [shadowRaids, setShadowRaids] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/shadow_raids")
          .then((res) => res.json())
          .then((data) => setShadowRaids(Object.values(data)));
    }, []);

    var onestar = [];
    var threestar = [];
    var legendary = [];

    var raid_element = <div></div>;
    if (shadowRaids !== null && shadowRaids !== undefined) {
        shadowRaids.forEach(shadow_raid => {
            if (shadow_raid.tier.includes("1st")) {
                onestar.push(shadow_raid);
            } else if (shadow_raid.tier.includes("3rd")) {
                threestar.push(shadow_raid);
            } else if (shadow_raid.tier.includes("Legendary")) {
                legendary.push(shadow_raid);
            }
        });

        raid_element = 
        <div>
            <GraphicContainer textToShow="Shadow 1* Raids" iconToShow="shraid">
                <GraphicMons monsToShow={onestar} interactive={interactive}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Shadow 3* Raids" iconToShow="shraid">
                <GraphicMons monsToShow={threestar} interactive={interactive}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Shadow Legendary Raids" iconToShow="shraid">
                <GraphicMons monsToShow={legendary} interactive={interactive}/>
                <p>*Only available on Saturdays and Sundays</p>
            </GraphicContainer>
        </div>;
    }

    return raid_element;
}