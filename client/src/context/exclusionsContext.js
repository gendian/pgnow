import { formatName } from '../utils.js'
import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'
export const ExclusionsContext = createContext()

const ExclusionsContextProvider = (props) => {

    const [exclusions, setExclusions] = useState([]);

    useEffect(() => {
        if (exclusions === undefined || exclusions.length === 0) {
            fetch("/pgnow_api/exclusions")
            .then((res) => res.json())
            .then((data) => populateExclusions(data));
        }
    });    

    function populateExclusions(pokemonList) {
        pokemonList.forEach(addToExclusionList);
    }

    function saveExclusions(newExclusions) {
        Axios.post(`/pgnow_api/exclusions`, 
            newExclusions
        );
    }

    function addToExclusionList(pokemon) {
        if (!exclusions.includes(pokemon.name)) {
            exclusions.push(pokemon.name);
        } else {
            // already added to list
        }
    }

    function toggleExclusion(monName) {
        const formattedName = formatName(monName);
        if (exclusions.includes(formattedName)) {
            var indexToRemove = exclusions.indexOf(formattedName);
            exclusions.splice(indexToRemove, 1);
        } else {
            exclusions.push(formattedName);
        }
        const newExclusions = [...exclusions];
        setExclusions(newExclusions);
        saveExclusions(newExclusions);
    }

    function resetExclusions() {
        const newExclusions = [];
        setExclusions(newExclusions);
        saveExclusions(newExclusions);
    }
  
    function isExclusion(monName) {  
        const formattedName = formatName(monName);
        var isExclusion = false;
        if (exclusions !== undefined && exclusions.includes(formattedName)) {
            isExclusion = true;
        }
        return isExclusion;
    }

    return (
         <ExclusionsContext.Provider 
            value={{
                exclusions,
                setExclusions,
                toggleExclusion,
                isExclusion,
                resetExclusions,
             }}>
               {props.children}
         </ExclusionsContext.Provider>
    )
}
export default ExclusionsContextProvider