const jsd = require('jsdom');
const { JSDOM } = jsd;
const { getImage } = require('../utils');

function scrape_raids()
{
    return new Promise(resolve => {
        JSDOM.fromURL("https://pokemongo.fandom.com/wiki/List_of_current_Raid_Bosses", {
        })
        .then((dom) => {

            var content = dom.window.document.querySelector('.bg-raid').childNodes;
            var shadows = [];
            var raids = [];
            
            var currentType = "";
            content.forEach(c =>
            {
                if (c.className == "pogo-list-header")
                {
                    currentType = c.textContent.trim();
                }
                else if (c.className == "pogo-list-item")
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
                    if (currentType.includes("Shadow")) {
                        shadows.push(pokemon);
                    } else {
                        raids.push(pokemon);
                    }
                    let image = getImage(pokemon.name);
                    global.monMap.set(pokemon.name, image);
                }
            })
            console.log("Scraping raids");
            global.shadows = shadows;
            global.raids = raids;
        }).catch(_err =>
            {
                console.log(_err);
            });
        })
}

function get_shadows() {
    return global.shadows;
}

function get_raids() {
    return global.raids;
}

module.exports = { scrape_raids, get_shadows, get_raids }