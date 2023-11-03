import React from "react";
import GraphicMon from "./graphicMon";
import SelectMon from "./selectMon";
import { v4 as uuid } from "uuid";

export default function GraphicMons(props) {
    const monsToShow = props.monsToShow ? props.monsToShow : [];
    const showContainer = props.showContainer ? props.showContainer : false;
    const containerTitle = props.containerTitle ? props.containerTitle : "needs a containerTitle prop";
    const interactive = props.interactive ? props.interactive : false;
    var graphicMons = [];

    function graphicMonList(monToShow) {
        const unique_id = uuid();
        var graphic = <GraphicMon key={"mon-"+unique_id} monToShow={monToShow}/>;
        if (interactive) {
            graphic = <SelectMon key={"select-"+unique_id} monToSelect={monToShow}/>;
        }
        graphicMons.push(graphic);
    }

    monsToShow.forEach(graphicMonList);

    var mons = 
        <div className={showContainer ? "show-mon-container":""}>
            {showContainer ? <div><p>{containerTitle}</p></div> : <div></div>}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {graphicMons}
            </div>
        </div>
    return mons;
}