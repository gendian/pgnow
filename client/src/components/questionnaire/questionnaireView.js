import React from "react";
import NextView from "../atomic/nextView";
import PrevView from "../atomic/prevView";
import { QViewContext } from "../../context/questionnaireViewContext";
import Wilds from "../wilds";
import Eggs from "../eggs";
import Raids from "../raids";
import ShadowRaids from "../shadowRaids";

export default function QuestionnaireView() {

    const { qView } = React.useContext(QViewContext);

    // page 1: Wild encounters
    // page 2: Eggs
    // page 3: Raids
    // page 4: Shadow raids
    // page 5: Grunt rewards??
    // page 6: Leaders??
    // page 7: Researches??

    var qview_element = <div></div>;
    switch(qView.page) {
        case 0:
            // wild encounters
            qview_element = 
            <div>
                <Wilds interactive="true"></Wilds>
                <NextView></NextView>
            </div>;
            break;
        case 1:
            // eggs
            qview_element = 
            <div>
                <Eggs interactive="true"></Eggs>
                <NextView></NextView>
                <PrevView></PrevView>
            </div>;
            break;
        case 2:
            // raids
            qview_element = 
            <div>
                <Raids interactive="true"></Raids>
                <NextView></NextView>
                <PrevView></PrevView>
            </div>;
            break;
        case 3:
            // shadow raids
            qview_element = 
            <div>
                <ShadowRaids interactive="true"></ShadowRaids>
                <PrevView></PrevView>
            </div>;
            break;
        default:
            // code block
    }

    var questionnaire_element = 
        <div className={qView.visible ? "questionnaire" : "questionnaire hidden"}>
            <h2>Hunting</h2>
            {qview_element}
        </div>;

    return questionnaire_element;
}




