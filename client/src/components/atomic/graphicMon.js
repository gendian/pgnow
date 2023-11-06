import { useContext } from 'react';
import { ExclusionsContext } from "../../context/exclusionsContext";
import { MonsContext } from "../../context/monsContext";

export default function GraphicMon(props) {
    const { isExclusion } = useContext(ExclusionsContext);
    const { getMonImage } = useContext(MonsContext);
    const monToShow = props.monToShow ? props.monToShow : {"name": "Sunkern"};

    const monImg = getMonImage(monToShow.name);
    
    var graphicContainer = 
        <div className={isExclusion(monToShow.name) ? "graphic-mon-outer greyed-out" : "graphic-mon-outer"}>
            <div className="graphic-mon-background"></div>
            <div className="graphic-mon-highlight"></div>
            <div className="graphic-mon-image">
                <img src={monImg} alt={monToShow.name}></img>
                {
                    monToShow.name.toLowerCase().includes("shadow") ? 
                    <div className="graphic-mon-shadow"></div> :
                    <div></div>
                }
            </div>
            {
                Boolean(monToShow.canBeShiny) ? 
                <div className="graphic-mon-shiny"></div> :
                <div className="graphic-mon-noshiny"></div>
            }
            <div className="graphic-mon-text"><p>{monToShow.name}</p></div>           
        </div>
    return graphicContainer;
}