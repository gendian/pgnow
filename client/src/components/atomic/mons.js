import React from "react";
import GraphicMon from "./graphicMon";


export default function Mons(props) {
    const monsToShow = props.monsToShow ? props.monsToShow : [];
    var graphicMons = [];

    function graphicMonList(monToShow) {
        var graphic = <GraphicMon monToShow={monToShow}/>;
        graphicMons.push(graphic);
    }

    monsToShow.forEach(graphicMonList);

    var mons = 
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {graphicMons}
        </div>;
    return mons;
}