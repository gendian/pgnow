import React from "react";

export default function GraphicMon(props) {
    const monToShow = props.monToShow ? props.monToShow : {"name": "Pikachu"};

    // REAL API
    const [monImg, setMonImg] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/loadImage/"+monToShow.name)
          .then((res) => res.json())
          .then((data) => setMonImg(data));
    }, []);
    
    var graphicContainer = 
        <div className="graphic-mon-outer">
            <div className="graphic-mon-background"></div>
            <div className="graphic-mon-image">
                <img src={monImg} alt={monToShow.name}></img>
                {
                    monToShow.name.toLowerCase().includes("shadow") ? 
                    <div className="graphic-mon-shadow"></div> :
                    <div></div>
                }
                {
                    Boolean(monToShow.canBeShiny) ? 
                    <div className="graphic-mon-shiny"></div> :
                    <div></div>
                }
            </div>
            <div className="graphic-mon-text"><p>{monToShow.name}</p></div>           
        </div>;
    return graphicContainer;
}