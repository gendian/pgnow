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

    if (leaders !== null) {
        var arlo = leaders[0];
        var cliff = leaders[1];
        var sierra = leaders[2];        

        const leader_element = 
        <div>
            <GraphicContainer textToShow="Arlo" iconToShow="leader">
                <GraphicMons monsToShow={arlo.firstMons}/>
                <GraphicMons monsToShow={arlo.secondMons}/>
                <GraphicMons monsToShow={arlo.thirdMons}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Cliff" iconToShow="leader">
                <GraphicMons monsToShow={cliff.firstMons}/>
                <GraphicMons monsToShow={cliff.secondMons}/>
                <GraphicMons monsToShow={cliff.thirdMons}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Sierra" iconToShow="leader">
                <GraphicMons monsToShow={sierra.firstMons}/>
                <GraphicMons monsToShow={sierra.secondMons}/>
                <GraphicMons monsToShow={sierra.thirdMons}/>
            </GraphicContainer>
        </div>;

        return leader_element;
    }
}