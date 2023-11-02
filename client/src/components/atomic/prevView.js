import React from "react";
import { QViewContext } from "../../context/questionnaireViewContext";

export default function PrevView() {
    const { prevView } = React.useContext(QViewContext);
    var element = 
    <div>
        <button onClick={prevView} type="button">Previous</button>
    </div>

    return element;
}