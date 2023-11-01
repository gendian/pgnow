import React from "react";
import isChasing from "../utils";

export default function GraphicMon(props) {
    const monToShow = props.monToShow ? props.monToShow : {"name": "Pikachu"};
    const interactive = props.interactive ? props.interactive : false;

    // REAL API
    const [monImg, setMonImg] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/loadImage/"+monToShow.name)
          .then((res) => res.json())
          .then((data) => setMonImg(data));
    }, []);
    const [monsToChase, setMonsToChase] = React.useState(global.preferences.monsToChase);

    const selectMon = () => {
        if (interactive) {
            if (isChasing(monToShow.name)) {
                console.log("stopped chasing: " + monToShow.name);
                let index = monsToChase.indexOf(monToShow.name);
                setMonsToChase(monsToChase.slice(index));
            } else {
                console.log("started chasing: " + monToShow.name);
                setMonsToChase(monsToChase.push(monToShow.name));
            }
        }
    };
    
    var graphicContainer = 
        <div className={interactive && isChasing(monToShow.name) ? "graphic-mon-outer greyed-out" : "graphic-mon-outer"} onClick={selectMon}>
            <div className="graphic-mon-background"></div>
            <div className="graphic-mon-image">
                <img src={monImg} alt={monToShow.name}></img>
                {
                    monToShow.name.toLowerCase().includes("shadow") ? 
                    <div className="graphic-mon-shadow"></div> :
                    <div></div>
                }
            </div>
            <div className="graphic-mon-text"><p>{monToShow.name}</p></div>           
        </div>;
    return graphicContainer;
}