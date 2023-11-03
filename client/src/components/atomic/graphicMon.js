import React from 'react';
import { GoalsContext } from "../../context/goalsContext";

export default function GraphicMon(props) {
    const { isGoal, getImage } = React.useContext(GoalsContext);
    const monToShow = props.monToShow ? props.monToShow : {"name": "Sunkern"};

    const monImg = getImage(monToShow.name);
    
    var graphicContainer = 
        <div className={isGoal(monToShow.name) ? "graphic-mon-outer" : "graphic-mon-outer greyed-out"}>
            <div className="graphic-mon-background"></div>
            <div className="graphic-mon-image">
                <img src={monImg} alt={monToShow.name}></img>
                {
                    monToShow.name.toLowerCase().includes("shadow") ? 
                    <div className="graphic-mon-shadow"></div> :
                    <div></div>
                }
                {
                    Boolean(monToShow.canBeShiny) ? 
                    <div className="graphic-mon-shiny"></div> :
                    <div></div>
                }
            </div>
            <div className="graphic-mon-text"><p>{monToShow.name}</p></div>           
        </div>
    return graphicContainer;
}