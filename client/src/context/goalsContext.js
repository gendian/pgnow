import { useCookies } from "react-cookie";
import React, { createContext, useState, useEffect } from 'react'
export const GoalsContext = createContext()

const GoalsContextProvider = (props) => {

    const [cookies, setCookie] = useCookies(["goals"]);
    const [goals, setGoals] = useState([]);
  

    useEffect(() => {
        if (goals.length === 0) {
            console.log("set goals from cookies");
            setGoals(cookies.goals);
        }
    });

    function toggleGoal(monName) {
        if (goals.includes(monName)) {
            var indexToRemove = goals.indexOf(monName);
            goals.splice(indexToRemove, 1);
        } else {
            goals.push(monName);
        }
        const newGoals = [...goals];
        setGoals(newGoals);
        setCookie("goals", newGoals, { path: "/" });
        console.log(newGoals);
    }
  
    function isGoal(monName) {  
        var isGoal = false;
        if (goals != undefined && goals.includes(monName)) {
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
                setGoals
             }}>
               {props.children}
         </GoalsContext.Provider>
    )
}
export default GoalsContextProvider