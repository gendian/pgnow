import React from "react";

export default function GraphicContainer(props) {
    const textToShow = props.textToShow ? props.textToShow : "text to show";
    const iconToShow = props.iconToShow ? props.iconToShow : "default";
    var graphicContainer = 
        <div class="graphic-container-outer">
            <div className={"graphic-container-icon " + iconToShow}></div>
            <div class="graphic-container-gradient">
                <p>{textToShow}</p>
            </div>
            <div class="graphic-container-inner">
                {props.children}
            </div>
        </div>;
    return graphicContainer;
}