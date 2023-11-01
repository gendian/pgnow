import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import GraphicMon from "./atomic/graphicMon";

export default function Questionnaire() {

    // page 1: Wild encounters
    // page 2: Eggs
    // page 3: Raids
    // page 4: Shadow raids
    // page 5: Grunts
    // page 6: Leaders
    // page 7: Researches
    
    var questionnaire_element = 
        <GraphicContainer textToShow="Questionnaire" iconToShow="upcoming">
            <GraphicMon interactive="true"></GraphicMon>
        </GraphicContainer>;

    return questionnaire_element;
}