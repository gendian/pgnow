const fs = require('fs');
const https = require('https');
const { generateOptions } = require('../utils');

function scrape_raids()
{    
    const options = generateOptions('/repos/bigfoott/ScrapedDuck/contents/raids.json?ref=data');

    https.get(options, function (apiResponse) {
        let data = '';

        // A chunk of data has been received.
        apiResponse.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        apiResponse.on('end', () => {
            console.log('Fetching raids');
            global.raids = data;
        });
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

function get_raids() {
    return global.raids;
}

module.exports = { scrape_raids, get_raids }