import React from "react";
import QViewContextProvider from "../../context/questionnaireViewContext";
import QuestionnaireView from "./questionnaireView";

export default function Questionnaire() {

    var questionnaire_element = 
        <QViewContextProvider>
            <QuestionnaireView></QuestionnaireView>
        </QViewContextProvider>;

    return questionnaire_element;
}