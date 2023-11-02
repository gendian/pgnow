import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import GraphicMons from "./atomic/graphicMons";

export default function Wilds(props) {
    const interactive = props.interactive ? props.interactive : false;
    // REAL API
    const [wilds, setWilds] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/wilds")
          .then((res) => res.json())
          .then((data) => setWilds(data));
    }, []);

    var wild_element = <div></div>;
    if (wilds !== null && wilds !== undefined) {
        wild_element = 
        <div>
            <GraphicContainer textToShow="Wild Encounters" iconToShow="wild">
                <GraphicMons monsToShow={wilds} interactive={interactive}/>
            </GraphicContainer>
        </div>;
    }

    return wild_element;

}