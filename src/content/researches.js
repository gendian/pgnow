const fs = require('fs');
const https = require('https');
const { generateOptions, parseGitResponse, cacheImage } = require('../utils');

function scrape_researches()
{    
    const options = generateOptions('/repos/bigfoott/ScrapedDuck/contents/research.json?ref=data');

    https.get(options, function (apiResponse) {
        let data = '';

        // A chunk of data has been received.
        apiResponse.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        apiResponse.on('end', () => {
            console.log('Fetching researches');
            var content = parseGitResponse(data);
            global.researches = content;
        });
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

function get_researches() {
    return global.researches;
}

module.exports = { scrape_researches, get_researches }