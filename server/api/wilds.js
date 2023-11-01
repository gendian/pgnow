const https = require('https');
const { parse_csv, cacheImage } = require('../utils');

async function scrape_wilds()
{    
    console.log('Fetching wilds');
    var content = await parse_csv("./content/wildSpawns.csv");
    global.wilds = content;
    content.forEach(function(item) {
        cacheImage(item.name);
    });
}

function get_wilds() {
    return global.wilds;
}

module.exports = { scrape_wilds, get_wilds }