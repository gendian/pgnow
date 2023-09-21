import React from "react";
import { FaLink } from 'react-icons/fa';

export default function SourceLink(props) {
    var linkToShow = props.linkToShow ? props.linkToShow : "Something went wrong";
    var textToShow = props.textToShow ? props.textToShow : "Something went wrong";   
    
    var sourceContainer = 
        <div class="source-container">
            <p>{textToShow} <a target="blank" href={linkToShow}><FaLink/></a></p>            
        </div>;
    return sourceContainer;
}