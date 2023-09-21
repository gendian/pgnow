import React from "react";

export default function GraphicMon(props) {
    const textToShow = props.monToShow;
    var monToShow = props.monToShow ? props.monToShow : "pikachu";
    monToShow = monToShow.toLowerCase();
    monToShow = monToShow.replace("mega", "");
    monToShow = monToShow.replace("hisuian", "");
    monToShow = monToShow.replace("galarian", "");
    monToShow = monToShow.replace("alolan", "");
    monToShow = monToShow.replace(".", "-");
    monToShow = monToShow.replace(/\s/g,'');
    monToShow = monToShow.replace(/ *\([^)]*\) */g, "");

    if (monToShow.includes("unown")) {
        // fiddle with the request
        monToShow = "unown";
    }

    // REAL API
    const [monImg, setMonImg] = React.useState(null);
    React.useEffect(() => {
        fetch("/github_api/pokeapi/"+monToShow)
          .then((res) => res.json())
          .then((data) => setMonImg(data.sprites.front_default));
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