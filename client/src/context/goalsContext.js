import { useCookies } from "react-cookie";
import React, { createContext, useState, useEffect } from 'react'
export const GoalsContext = createContext()

const GoalsContextProvider = (props) => {

    const [cookies, setCookie] = useCookies(["goals"]);
    const [goals, setGoals] = useState([]);
    const [images, setImages] = useState({});

    useEffect(() => {
        if (goals == undefined || goals.length === 0) {
            if (cookies !== undefined && cookies.goals !== undefined) {
                setGoals(cookies.goals);
            } else {
                fetch("/pgnow_api/loadImageList")
                .then((res) => res.json())
                .then((data) => handleImages(data));
            }
        }
    });

    function handleImages(data) {
        setGoals(data.names);

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
        console.log("Set cookie");
        setCookie("goals", newGoals, { path: "/" });
    }
  
    function isGoal(monName) {  
        const formattedName = formatName(monName);
        var isGoal = false;
        if (goals != undefined && goals.includes(formattedName)) {
            isGoal = true;
        }
        return isGoal;
    }

    // ALSO ADD TO THE SERVER!! THIS IS A HACK... PLEASE FIX THIS SO WE DON'T NEED TO DO ALL THIS FORMATTING. MAYBE TRY AN ID, GENIUS
    function formatName(name) {
        let formattedName = name;
        // format lowercase remove non-alphanumeric
        formattedName = formattedName.toLowerCase();
        formattedName = formattedName.replace("[^a-zA-Z0-9]", "");
        formattedName = formattedName.replace(/(\r\n|\n|\r)/gm, "");
        formattedName = formattedName.replaceAll(" ", "");
        formattedName = formattedName.replaceAll("(", "");
        formattedName = formattedName.replaceAll(")", "");
        formattedName = formattedName.replaceAll("'", "");

        // move mega to the end of the name
        if (formattedName.includes("mega")) {
            if (formattedName.includes("charizard")) {
                if (formattedName.includes("x")) {
                    formattedName = "charizard-mega-x";
                } else if (formattedName.includes("y")) {
                    formattedName = "charizard-mega-y";
                }
            } else {
                formattedName = formattedName.replace("mega", "");
                formattedName = formattedName.concat("-mega");
            }
        }
        // remove shadow
        if (formattedName.includes("shadow")) {
            formattedName = formattedName.replace("shadow", "");
        }
        // move alola to the end of the name
        if (formattedName.includes("alola")) {
            formattedName = formattedName.replace("alolan", "");
            formattedName = formattedName.concat("-alola");
        }
        // move galar to the end of the name
        if (formattedName.includes("galar")) {
            formattedName = formattedName.replace("galarian", "");
            formattedName = formattedName.concat("-galar");
        }
        // move hisuian to the end of the name
        if (formattedName.includes("hisui")) {
            formattedName = formattedName.replace("hisuian", "");
            formattedName = formattedName.concat("-hisui");
        }
        // move primal to the end of the name
        if (formattedName.includes("primal")) {
            formattedName = formattedName.replace("primal", "");
            formattedName = formattedName.concat("-primal");
        }
        // allow for formes
        if (formattedName.includes("forme")) {
            formattedName = formattedName.replace("therianforme", "-therian");
            formattedName = formattedName.replace("incarnateforme", "-incarnate");
            formattedName = formattedName.replace("skyforme", "-sky");
            formattedName = formattedName.replace("landforme", "-land");
            formattedName = formattedName.replace("alteredforme", "-altered");
            formattedName = formattedName.replace("originforme", "-origin");
            formattedName = formattedName.replace("attackforme", "-attack");
            formattedName = formattedName.replace("normalforme", "-normal");
            formattedName = formattedName.replace("defenseforme", "-defense");
            formattedName = formattedName.replace("speedforme", "-speed");
            formattedName = formattedName.replace("10", "-10");
            formattedName = formattedName.replace("50", "-50");
            formattedName = formattedName.replace("complete", "-complete");
        }
        if (formattedName.includes("cempasúchil")) {
            formattedName = formattedName.replace("cempasúchil", "");
        }    
        if (formattedName.includes("mime") && formattedName.includes("jr")) {
            formattedName = "mime-jr";
        } else if (formattedName.includes("unown")) {
            // fiddle with the request
            formattedName = "unown";
        } else if (formattedName.includes("pumpkaboo")) {
            // fiddle with the request
            formattedName = "pumpkaboo-average";
        }
        
        return formattedName;
    }

    return (
         <GoalsContext.Provider 
            value={{
                goals,
                toggleGoal,
                isGoal,
                setGoals,
                images,
                getImage
             }}>
               {props.children}
         </GoalsContext.Provider>
    )
}
export default GoalsContextProvider