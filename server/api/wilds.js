const https = require('https');
const { parse_csv, cachePokemon } = require('../utils');

async function scrape_wilds()
{    
    console.log('Loading wild encounters from CSV');
    var content = await parse_csv("./content/wildSpawns.csv");
    global.wilds = content;
    content.forEach(function(item) {
        cachePokemon(item.name);
    });
}

function get_wilds() {
    return global.wilds;
}

module.exports = { scrape_wilds, get_wilds }