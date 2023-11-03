import { useCookies } from "react-cookie";
import { formatName } from './../utils.js'
import React, { createContext, useState, useEffect } from 'react'
export const GoalsContext = createContext()

const GoalsContextProvider = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies(["goals"]);
    const [goals, setGoals] = useState([]);
    const [images, setImages] = useState({});

    useEffect(() => {
        if (goals == undefined || goals.length === 0) {
            fetch("/pgnow_api/loadImageList")
            .then((res) => res.json())
            .then((data) => handleImages(data));
        }
    });

    function handleImages(data) {
        if (cookies !== undefined && cookies.goals !== undefined) {
            setGoals(cookies.goals);
        } else {
            setGoals(data.goals);
        }

        var imageMap = {};
        var count = 0;
        data.names.forEach(function(name) {
            const imageLink = data.images[count];
            imageMap[name] = imageLink
            count++;
        })
        setImages(imageMap);
    }

    function getImage(monName) {        
        var returnLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
        const formattedName = formatName(monName);
        if (images !== undefined) {
            returnLink = images[formattedName];
        }
        return returnLink;
    }

    function toggleGoal(monName) {
        const formattedName = formatName(monName);
        if (goals.includes(formattedName)) {
            var indexToRemove = goals.indexOf(formattedName);
            goals.splice(indexToRemove, 1);
        } else {
            goals.push(formattedName);
        }
        const newGoals = [...goals];
        setGoals(newGoals);
    }

    function resetGoals() {
        removeCookie("goals");
        window.location.reload(false);
    }
  
    function isGoal(monName) {  
        const formattedName = formatName(monName);
        var isGoal = false;
        if (goals != undefined && goals.includes(formattedName)) {
            isGoal = true;
        }
        return isGoal;
    }

    return (
         <GoalsContext.Provider 
            value={{
                goals,
                toggleGoal,
                isGoal,
                setGoals,
                resetGoals,
                images,
                getImage
             }}>
               {props.children}
         </GoalsContext.Provider>
    )
}
export default GoalsContextProvider