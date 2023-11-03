import React from "react";
import ChangeView from "../atomic/changeView";
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
                <ChangeView showNext={true}></ChangeView>
                <Wilds interactive="true"></Wilds>
                <ChangeView showNext={true}></ChangeView>
            </div>;
            break;
        case 1:
            // eggs
            qview_element = 
            <div>
                <ChangeView showNext={true} showPrev={true}></ChangeView>
                <Eggs interactive="true"></Eggs>
                <ChangeView showNext={true} showPrev={true}></ChangeView>
            </div>;
            break;
        case 2:
            // raids
            qview_element = 
            <div>
                <ChangeView showNext={true} showPrev={true}></ChangeView>
                <Raids interactive="true"></Raids>
                <ChangeView showNext={true} showPrev={true}></ChangeView>
            </div>;
            break;
        case 3:
            // shadow raids
            qview_element = 
            <div>
                <ChangeView showPrev={true}></ChangeView>
                <ShadowRaids interactive="true"></ShadowRaids>
                <ChangeView showPrev={true}></ChangeView>
            </div>;
            break;
        default:
            // code block
    }

    var questionnaire_element = 
        <div className={qView.visible ? "questionnaire" : "questionnaire hidden"}>
            {qview_element}
        </div>;

    return questionnaire_element;
}




