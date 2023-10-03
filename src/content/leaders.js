const fs = require('fs');
const jsd = require('jsdom');
const { JSDOM } = jsd;
const https = require('https');
const { cacheImage } = require('../utils');

function scrape_leaders()
{
    return new Promise(resolve => {
        JSDOM.fromURL("https://pokemongo.fandom.com/wiki/Team_GO_Rocket_Leaders", {
        })
        .then((dom) => {
            var partyTables = dom.window.document.querySelectorAll('.gorocket-party-table');
            var leaders = [];
            var leaderCounter = 0;

            partyTables.forEach(party => 
            {
                var leader = {
                    name: "",
                    firstMons: [],
                    secondMons: [],
                    thirdMons: []
                }

                if (leaderCounter === 0) {
                    leader.name = "Arlo";
                } else if (leaderCounter === 0) {
                    leader.name = "Cliff";
                } else if (leaderCounter === 0) {
                    leader.name = "Sierra";
                }

                var positions = party.querySelectorAll("tbody > tr > td");
                var positionCounter = 0;
                positions.forEach(position =>
                {
                    var mons = position.querySelectorAll("div.pogo-list-item > div.pogo-list-item-desc > div.pogo-list-item-name > a");
                    mons.forEach(mon => {
                        var monObj = {
                            name: mon.textContent
                        };
                        
                        switch(positionCounter) {
                            case 0:                                
                                leader.firstMons.push(monObj);
                                break;
                            case 1:
                                leader.secondMons.push(monObj);
                                break;
                            case 2:
                                leader.thirdMons.push(monObj);
                                break;
                            default:
                              break;
                        }                        
                        cacheImage(monObj.name);
                    });
                    positionCounter++;
                })

                leaders.push(leader);
                leaderCounter++;
            });

            console.log("Scraping leaders");
            global.leaders = leaders;
        }).catch(_err =>
            {
                console.log(_err);
            });
        })
}

function get_leaders() {
    return global.leaders;
}

module.exports = { scrape_leaders, get_leaders }