import React from "react";

export default function ViewDescription(props) {
    const textToShow = props.textToShow ? props.textToShow : "text to show";
    const description_element = 
    <div className="view-description">
        <p>{textToShow}</p>
    </div>;

    return description_element;
}