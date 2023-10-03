const jsd = require('jsdom');
const { JSDOM } = jsd;
const { getImage } = require('../utils');

function scrape_tierList()
{
    return new Promise(resolve => {
        JSDOM.fromURL("https://gamepress.gg/pokemongo/attackers-tier-list", {}).then((dom) => {
            var content = dom.window.document.querySelectorAll('.ratings-cells');
            var megaList = [];
            var shadowList = [];
            var regularList = [];

            var megaCounter = 0;
            var shadowCounter = 0;
            var regularCounter = 0;

            content.forEach(c =>
            {
                var pokemon = { 
                    name: "",
                    tier: "",
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
                
                var textLower = c.textContent.toLowerCase();
                var displayText = c.textContent;
                pokemon.name = displayText;

                if (textLower.includes("mega") || textLower.includes("primal")) {
                    if (megaCounter < 10) {
                        pokemon.tier = "mega";
                        megaList.push(pokemon);
                    }
                    megaCounter++;
                } else if (textLower.includes("shadow")) {
                    if (shadowCounter < 10) {
                        pokemon.tier = "shadow";
                        shadowList.push(pokemon);
                    }
                    shadowCounter++;
                } else {
                    if (regularCounter < 10) {
                        regularList.push(pokemon);
                    }
                    regularCounter++;
                }

                let image = getImage(pokemon.name);
                global.monMap.set(pokemon.name, image);
            })
            console.log("Scraping tierList");

            var tierList = {
                mega: megaList,
                shadow: shadowList,
                regular: regularList
            }
            global.tierList = tierList;
        }).catch(_err =>
            {
                console.log(_err);
            });
        })
}

function get_tierList() {
    return global.tierList;
}

module.exports = { scrape_tierList, get_tierList }