import React from "react";
import { FaLink } from 'react-icons/fa';

export default function GraphicContainer(props) {
    const textToShow = props.textToShow ? props.textToShow : "text to show";
    var graphicContainer = 
        <div class="graphic-container-outer">
            <div class="graphic-container-icon"></div>
            <div class="graphic-container-gradient">
                <p>{textToShow}</p>
            </div>
            <div class="graphic-container-inner">
                {props.children}
            </div>
        </div>;
    return graphicContainer;
}