import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import GraphicMons from "./atomic/graphicMons";

export default function Leaders() {

    // REAL API
    const [leaders, setLeaders] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/leaders")
          .then((res) => res.json())
          .then((data) => setLeaders(data));
    }, []);

    var leader_element = <div></div>;
    if (leaders !== null) {
        var arlo = leaders[0];
        var cliff = leaders[1];
        var sierra = leaders[2];        

        leader_element = 
        <div>
            <GraphicContainer textToShow="Arlo" iconToShow="leader">
                <GraphicMons monsToShow={arlo.firstMons} showContainer="true" containerTitle="1st Pokemon"/>
                <GraphicMons monsToShow={arlo.secondMons} showContainer="true" containerTitle="2nd Pokemon"/>
                <GraphicMons monsToShow={arlo.thirdMons} showContainer="true" containerTitle="3rd Pokemon"/>
            </GraphicContainer>
            <GraphicContainer textToShow="Cliff" iconToShow="leader">
                <GraphicMons monsToShow={cliff.firstMons} showContainer="true" containerTitle="1st Pokemon"/>
                <GraphicMons monsToShow={cliff.secondMons} showContainer="true" containerTitle="2nd Pokemon"/>
                <GraphicMons monsToShow={cliff.thirdMons} showContainer="true" containerTitle="3rd Pokemon"/>
            </GraphicContainer>
            <GraphicContainer textToShow="Sierra" iconToShow="leader">
                <GraphicMons monsToShow={sierra.firstMons} showContainer="true" containerTitle="1st Pokemon"/>
                <GraphicMons monsToShow={sierra.secondMons} showContainer="true" containerTitle="2nd Pokemon"/>
                <GraphicMons monsToShow={sierra.thirdMons} showContainer="true" containerTitle="3rd Pokemon"/>
            </GraphicContainer>
        </div>;
    }

    return leader_element;
}