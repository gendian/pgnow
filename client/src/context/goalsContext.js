import React, { createContext, useState } from 'react'
export const GoalsContext = createContext()

const GoalsContextProvider = (props) => {
    const [goals, setGoals] = useState(["Marill"]);
  
    function toggleGoal(monName) {
        if (goals.includes(monName)) {
            var indexToRemove = goals.indexOf(monName);
            goals.splice(indexToRemove, indexToRemove);
        } else {
            goals.push(monName);
        }
        const newGoals = [...goals];
        setGoals(newGoals);
    }
  
    function isGoal(monName) {  
        var isGoal = false;
        if (!goals.includes(monName)) {
            isGoal = true;
        }
        return isGoal;
    }

    return (
         <GoalsContext.Provider 
            value={{
                goals,
                toggleGoal,
                isGoal
             }}>
               {props.children}
         </GoalsContext.Provider>
    )
}
export default GoalsContextProvider