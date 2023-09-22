const fs = require('fs');
const jsd = require('jsdom');
const { JSDOM } = jsd;
const https = require('https');
const { generateOptions, parseGitResponse, getImage } = require('../utils');

function scrape_shadows()
{
    return new Promise(resolve => {
        JSDOM.fromURL("https://pokemongo.fandom.com/wiki/List_of_current_Raid_Bosses", {
        })
        .then((dom) => {

            var content = dom.window.document.querySelector('.bg-raid').childNodes;
            var shadows = [];
            
            var currentType = "";
            content.forEach(c =>
            {
                if (c.className == "pogo-list-header")
                {
                    currentType = c.textContent.trim();
                }
                else if (c.className == "pogo-list-item" && currentType.includes("Shadow"))
                {

                    var pokemon = { 
                        name: "",
                        tier: currentType,
                        canBeShiny: false,
                        types: [],
                        combatPower: {
                            normal: {
                                min: -1,
                                max: -1
                            },
                            boosted: {
                                min: -1,
                                max: -1
                            }
                        },
                        boostedWeather: [],
                        image: ""
                    }

                    pokemon.name = c.querySelector(".pogo-list-item-desc > .pogo-list-item-name").textContent;
                    shadows.push(pokemon);
                    let image = getImage(pokemon.name);
                    global.monMap.set(pokemon.name, image);
                }
            })
            console.log("Scraping shadows");
            global.shadows = shadows;
            //console.log(global.shadows);
        }).catch(_err =>
            {
                console.log(_err);
            });
        })
}

function get_shadows() {
    return global.shadows;
}

module.exports = { scrape_shadows, get_shadows }