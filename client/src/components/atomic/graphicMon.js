import React from "react";

export default function GraphicMon(props) {
    const textToShow = props.monToShow;
    var monToShow = props.monToShow ? props.monToShow : "pikachu";

    // REAL API
    /*const [monImg, setMonImg] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/pokeapi/"+monToShow)
          .then((res) => res.json())
          .then((data) => setMonImg(data.sprites.front_default));
    }, []);*/

    // REAL API
    const [monImg, setMonImg] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/loadImage/"+monToShow)
          .then((res) => res.json())
          .then((data) => setMonImg(data));
    }, []);

    const image = monImg;
    
    var graphicContainer = 
        <div class="graphic-mon-outer">
            <div class="graphic-mon-background"></div>
            <div class="graphic-mon-image">
                <img src={image}></img>
            </div>
            <div class="graphic-mon-text"><p>{textToShow}</p></div>
        </div>;
    return graphicContainer;
}