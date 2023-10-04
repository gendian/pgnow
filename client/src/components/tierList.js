import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import GraphicMons from "./atomic/graphicMons";

export default function TierList() {

    // REAL API
    const [tierList, setTierList] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/tierList")
          .then((res) => res.json())
          .then((data) => setTierList(data));
    }, []);

    var tier_element = <div></div>;

    if (tierList !== null && tierList !== undefined) {
        tier_element = <div>
            <GraphicContainer textToShow="Mega" iconToShow="mega">
                <GraphicMons monsToShow={tierList.mega}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Shadow" iconToShow="shraid">
                <GraphicMons monsToShow={tierList.shadow}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Regular" iconToShow="event">
                <GraphicMons monsToShow={tierList.regular}/>
            </GraphicContainer>
        </div>;
    }

    return tier_element;
}