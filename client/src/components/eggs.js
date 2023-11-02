import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import GraphicMons from "./atomic/graphicMons";

export default function Eggs(props) {
    const interactive = props.interactive ? props.interactive : false;

    // REAL API
    const [eggs, setEggs] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/eggs")
          .then((res) => res.json())
          .then((data) => setEggs(data));
    }, []);
    
    var twok = [];
    var fivek = [];
    var sevenk = [];
    var tenk = [];
    var twelvek = [];

    var egg_element = <div></div>;
    if (eggs !== null && eggs !== undefined) {
        eggs.forEach(egg => {
            if (egg.eggType.includes("12")) {
                twok.push(egg);
            } else if (egg.eggType.includes("5")) {
                fivek.push(egg);
            } else if (egg.eggType.includes("7")) {
                sevenk.push(egg);
            } else if (egg.eggType.includes("10")) {
                tenk.push(egg);
            } else {
                twelvek.push(egg);
            }
        }); 

        egg_element = 
        <div>
            <GraphicContainer textToShow="2km" iconToShow="egg">
                <GraphicMons monsToShow={twok} interactive={interactive}/>
            </GraphicContainer>
            <GraphicContainer textToShow="5km" iconToShow="egg">
                <GraphicMons monsToShow={fivek} interactive={interactive}/>
            </GraphicContainer>
            <GraphicContainer textToShow="7km" iconToShow="egg">
                <GraphicMons monsToShow={sevenk} interactive={interactive}/>
            </GraphicContainer>
            <GraphicContainer textToShow="10km" iconToShow="egg">
                <GraphicMons monsToShow={tenk} interactive={interactive}/>
            </GraphicContainer>
            <GraphicContainer textToShow="12km" iconToShow="egg">
                <GraphicMons monsToShow={twelvek} interactive={interactive}/>
            </GraphicContainer>
        </div>;
    }

    return egg_element;

}