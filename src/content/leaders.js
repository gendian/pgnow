const fs = require('fs');
const jsd = require('jsdom');
const { JSDOM } = jsd;
const https = require('https');

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

                if (leaderCounter == 0) {
                    leader.name = "Arlo";
                } else if (leaderCounter == 0) {
                    leader.name = "Cliff";
                } else if (leaderCounter == 0) {
                    leader.name = "Sierra";
                }

                var positions = party.querySelectorAll("tbody > tr > td");
                var positionCounter = 0;
                positions.forEach(position =>
                {
                    var mons = position.querySelectorAll("div.pogo-list-item > div.pogo-list-item-desc > div.pogo-list-item-name > a");
                    if (positionCounter == 0) {
                        mons.forEach(mon =>
                        {
                            leader.firstMons.push(mon.textContent);
                        })
                    } else if (positionCounter == 1) {
                        mons.forEach(mon =>
                        {
                            leader.secondMons.push(mon.textContent);
                        })
                    } else if (positionCounter == 2) {
                        mons.forEach(mon =>
                        {
                            leader.thirdMons.push(mon.textContent);
                        })
                    }
                    positionCounter++;
                })

                leaders.push(leader);
                leaderCounter++;
            });

            console.log("Scraping leaders");
            global.leaders = leaders;
            //console.log(global.leaders);
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