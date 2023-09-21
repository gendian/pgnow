import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import Mons from "./atomic/mons";

export default function Eggs() {

    // REAL API
    const [eggs, setEggs] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/eggs")
          .then((res) => res.json())
          .then((data) => setEggs(atob(JSON.parse(data).content)));
    }, []);
    
    var twok = [];
    var fivek = [];
    var sevenk = [];
    var tenk = [];
    var twelvek = [];

    var parsed_eggs = JSON.parse(eggs);
    if (parsed_eggs !== null && parsed_eggs !== undefined) {
        parsed_eggs.forEach(egg => {
            if (egg.eggType.includes("12")) {
                twok.push(egg.name);
            } else if (egg.eggType.includes("5")) {
                fivek.push(egg.name);
            } else if (egg.eggType.includes("7")) {
                sevenk.push(egg.name);
            } else if (egg.eggType.includes("10")) {
                tenk.push(egg.name);
            } else {
                twelvek.push(egg.name);
            }
        });
    }

    const egg_element = 
    <div>
        <GraphicContainer textToShow="2km">
            <Mons monsToShow={twok}/>
        </GraphicContainer>
        <GraphicContainer textToShow="5km">
            <Mons monsToShow={fivek}/>
        </GraphicContainer>
        <GraphicContainer textToShow="7km">
            <Mons monsToShow={sevenk}/>
        </GraphicContainer>
        <GraphicContainer textToShow="10km">
            <Mons monsToShow={tenk}/>
        </GraphicContainer>
        <GraphicContainer textToShow="12km">
            <Mons monsToShow={twelvek}/>
        </GraphicContainer>
    </div>;

    return egg_element;

}