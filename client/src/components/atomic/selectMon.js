import React from "react";
import GraphicMon from "./graphicMon";

export default function SelectMon(props) {
    const monToSelect = props.monToSelect ? props.monToSelect : {"name": "Pikachu"};
    const isChasing = props.isChasing ? props.isChasing : false;
    
    var element = 
        <div className={isChasing ? "" : "greyed-out"}>
            <GraphicMon monToShow={monToSelect}></GraphicMon>          
        </div>;
    return element;
}