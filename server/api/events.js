const fs = require('fs');
const https = require('https');
const { generateOptions, parseGitResponse, cachePokemon } = require('../utils');

function scrape_events()
{    
    const options = generateOptions('/repos/bigfoott/ScrapedDuck/contents/events.json?ref=data');

    https.get(options, function (apiResponse) {
        let data = '';

        // A chunk of data has been received.
        apiResponse.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        apiResponse.on('end', () => {
            console.log('Fetching events from github');
            var content = parseGitResponse(data);
            global.events = content;
        });
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

function get_events() {
    return global.events;
}

module.exports = { scrape_events, get_events }