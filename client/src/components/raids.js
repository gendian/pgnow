import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import GraphicMons from "./atomic/graphicMons";

export default function Raids(props) {
    const interactive = props.interactive ? props.interactive : false;
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

    var raid_element = <div></div>;
    if (raids !== null && raids !== undefined) {
        raids.forEach(raid => {
            if (raid.tier.includes("1")) {
                onestar.push(raid);
            } else if (raid.tier.includes("3")) {
                threestar.push(raid);
            } else if (raid.tier.includes("5")) {
                fivestar.push(raid);
            } else {
                mega.push(raid);
            }
        });

        raid_element = 
            <div>
                <GraphicContainer textToShow="1* Raids" iconToShow="raid">
                    <GraphicMons monsToShow={onestar} interactive={interactive}/>
                </GraphicContainer>
                <GraphicContainer textToShow="3* Raids" iconToShow="raid">
                    <GraphicMons monsToShow={threestar} interactive={interactive}/>
                </GraphicContainer>
                <GraphicContainer textToShow="5* Raids" iconToShow="raid">
                    <GraphicMons monsToShow={fivestar} interactive={interactive}/>
                </GraphicContainer>
                <GraphicContainer textToShow="Mega Raids" iconToShow="raid">
                    <GraphicMons monsToShow={mega} interactive={interactive}/>
                </GraphicContainer>
            </div>;
    }

    return raid_element;
}