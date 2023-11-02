import React from "react";
import GraphicMon from "./graphicMon";
import SelectMon from "./selectMon";

export default function GraphicMons(props) {
    const monsToShow = props.monsToShow ? props.monsToShow : [];
    const showContainer = props.showContainer ? props.showContainer : false;
    const containerTitle = props.containerTitle ? props.containerTitle : "needs a containerTitle prop";
    const interactive = props.interactive ? props.interactive : false;
    var graphicMons = [];

    function graphicMonList(monToShow) {
        var graphic = <GraphicMon monToShow={monToShow}/>;
        if (interactive) {
            graphic = <SelectMon monToSelect={monToShow}/>;
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