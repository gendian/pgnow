import React from "react";
import GraphicMon from "./graphicMon";
import { GoalsContext } from "../../context/goalsContext";

export default function SelectMon(props) {
    const { toggleGoal, isGoal } = React.useContext(GoalsContext)
    const monToSelect = props.monToSelect ? props.monToSelect : {"name": "Sunkern"};

    var element = 
        <div onClick={() => toggleGoal(monToSelect.name)} className={isGoal(monToSelect.name) ? "mon-selector" : "mon-selector greyed-out"}>
            <GraphicMon monToShow={monToSelect}></GraphicMon>          
        </div>;
    return element;
}