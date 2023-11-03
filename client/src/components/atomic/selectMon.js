import { useContext } from 'react';
import { useCookies } from "react-cookie";
import GraphicMon from "./graphicMon";
import { GoalsContext } from "../../context/goalsContext";

export default function SelectMon(props) {
    const [cookies, setCookie] = useCookies(["goals"]); 
    const { goals, toggleGoal, isGoal } = useContext(GoalsContext);
    const monToSelect = props.monToSelect ? props.monToSelect : {"name": "Sunkern"};

    var element = 
        <div 
        onClick={() => {            
            toggleGoal(monToSelect.name);
            var goalsString = JSON.stringify(goals);
            setCookie("goals", goalsString, { path: "/" });
        }}
        className={
            isGoal(monToSelect.name) ? "mon-selector" : "mon-selector greyed-out"
        }>
            <GraphicMon monToShow={monToSelect}></GraphicMon>
        </div>;
    return element;
}