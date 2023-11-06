import { useContext } from 'react';
import GraphicMon from "./graphicMon";
import { ExclusionsContext } from "../../context/exclusionsContext";

export default function SelectMon(props) {
    const { toggleExclusion, isExclusion } = useContext(ExclusionsContext);
    const monToSelect = props.monToSelect ? props.monToSelect : {"name": "Sunkern"};

    var element = 
        <div 
        onClick={() => {            
            toggleExclusion(monToSelect.name);
        }}
        className={
            isExclusion(monToSelect.name) ? "mon-selector greyed-out" : "mon-selector"
        }>
            <GraphicMon monToShow={monToSelect}></GraphicMon>
        </div>;
    return element;
}