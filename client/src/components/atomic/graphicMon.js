import React from "react";

export default function GraphicMon(props) {
    const monToShow = props.monToShow ? props.monToShow : "pikachu";

    // REAL API
    const [monImg, setMonImg] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/loadImage/"+monToShow)
          .then((res) => res.json())
          .then((data) => setMonImg(data));
    }, []);

    const image = monImg;
    
    var graphicContainer = 
        <div className="graphic-mon-outer">
            <div className="graphic-mon-background"></div>
            <div className="graphic-mon-image">
                <img src={image} alt={monToShow}></img>
            </div>
            <div className="graphic-mon-text"><p>{monToShow}</p></div>
        </div>;
    return graphicContainer;
}