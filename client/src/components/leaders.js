import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import Mons from "./atomic/mons";

export default function Leaders() {

    // REAL API
    const [leaders, setLeaders] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/leaders")
          .then((res) => res.json())
          .then((data) => setLeaders(Object.values(data)));
    }, []);

    if (leaders !== null) {
        var arlo = leaders[0];
        var cliff = leaders[1];
        var sierra = leaders[2];        

        const leader_element = 
        <div>
            <GraphicContainer textToShow="Arlo">
                <Mons monsToShow={arlo.firstMons}/>
                <Mons monsToShow={arlo.secondMons}/>
                <Mons monsToShow={arlo.thirdMons}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Cliff">
                <Mons monsToShow={cliff.firstMons}/>
                <Mons monsToShow={cliff.secondMons}/>
                <Mons monsToShow={cliff.thirdMons}/>
            </GraphicContainer>
            <GraphicContainer textToShow="Sierra">
                <Mons monsToShow={sierra.firstMons}/>
                <Mons monsToShow={sierra.secondMons}/>
                <Mons monsToShow={sierra.thirdMons}/>
            </GraphicContainer>
        </div>;

        return leader_element;
    }
}