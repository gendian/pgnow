import React from "react";
import { formatName } from '../utils.js'

export default function GraphicMon(props) {
    const monToShow = props.monToShow ? props.monToShow : "pikachu";
    const formattedName = monToShow !== null && monToShow !== undefined && monToShow.name !== null && monToShow.name !== undefined ? formatName(monToShow.name) : monToShow.name;

    // REAL API
    const [monImg, setMonImg] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/loadImage/"+monToShow.name)
          .then((res) => res.json())
          .then((data) => setMonImg(data));
    }, []);

    const image = monImg;
    
    var graphicContainer = 
        <div className="graphic-mon-outer">
            <div className="graphic-mon-background"></div>
            <div className="graphic-mon-image">
                <img src={image} alt={monToShow.name}></img>
            </div>
            <div className="graphic-mon-text"><p>{monToShow.name}</p></div>
        </div>;
    return graphicContainer;
}