import React from "react";
import { BsEmojiLaughing } from 'react-icons/bs';

export default function WelcomeBanner() {

    const welcome_element = 
    <div className="welcome-banner">
        <h2>Welcome to Pokemon Go Now!</h2>
        <p>We are dedicated to providing up to date information about what's going on right now in Pokemon Go.</p>
        <p>Have a browse through the tabs and discover what is happening in each area.</p>
        <p>Everything on this site is automatically collected from other sources and credit has been given with links to the original sources.</p>
        <p>Nothing about this site is monetized, I just hope it helps!</p>
    </div>;

    return welcome_element;
}