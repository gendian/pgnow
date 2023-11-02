import React from "react";
import { QViewContext } from "../../context/questionnaireViewContext";

export default function NextView() {
    const { nextView } = React.useContext(QViewContext);
    var element = 
    <div>
        <button onClick={nextView} type="button">Next</button>
    </div>

    return element;
}