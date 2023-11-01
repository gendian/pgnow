import React from "react";
import GraphicContainer from "./atomic/graphicContainer";
import SelectMon from "./atomic/selectMon";
import NextView from "./atomic/nextView";

export default function Questionnaire() {

    // page 1: Wild encounters
    // page 2: Eggs
    // page 3: Raids
    // page 4: Shadow raids
    // page 5: Grunts
    // page 6: Leaders
    // page 7: Researches
    
    var questionnaire_element = 
        <div className="questionnaire">
            <h2>Questionnaire</h2>
            <GraphicContainer textToShow="Wild Encounters" iconToShow="upcoming">
                <SelectMon></SelectMon>
            </GraphicContainer>
            <NextView></NextView>
        </div>;

    return questionnaire_element;
}