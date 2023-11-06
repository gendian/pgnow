import React, { createContext, useState, useEffect } from 'react'
import { formatName } from '../utils.js'
export const MonsContext = createContext()

const MonsContextProvider = (props) => {

    const [mons, setMons] = useState([]);

    useEffect(() => {
        if (mons === undefined || mons.length === 0) {
            fetch("/pgnow_api/pokemon")
            .then((res) => res.json())
            .then((data) => populateMons(data));
        }
    });    

    function populateMons(pokemonList) {
        setMons(pokemonList);
    }

    function getMonImage(pokemonName) {
        var formattedName = formatName(pokemonName);
        var image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
        mons.forEach(pokemon => {
            if (formattedName === pokemon.name) {
                image = pokemon.sprites.front_default;
            }
        });
        return image;
    }

    return (
         <MonsContext.Provider 
            value={{
                mons,
                getMonImage
             }}>
               {props.children}
         </MonsContext.Provider>
    )
}
export default MonsContextProvider