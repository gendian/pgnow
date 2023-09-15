import React from "react";
import logo from "../logo.svg";

export default function Loading() {
    var loading = 
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Loading...</p>
    </div>

    return loading;
}