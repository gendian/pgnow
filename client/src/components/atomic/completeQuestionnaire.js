import React from "react";
import { QViewContext } from "../../context/questionnaireViewContext";

export default function CompleteQuestionnaire() {
    const { hideQ } = React.useContext(QViewContext);
    var element = 
    <div>
        <button onClick={hideQ} type="button">Complete</button>
    </div>

    return element;
}