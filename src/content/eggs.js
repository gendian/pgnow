const fs = require('fs');
const https = require('https');
const { generateOptions, parseGitResponse, getImage } = require('../utils');

function scrape_eggs()
{    
    const options = generateOptions('/repos/bigfoott/ScrapedDuck/contents/eggs.json?ref=data');

    https.get(options, function (apiResponse) {
        let data = '';

        // A chunk of data has been received.
        apiResponse.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Add egg to list.
        apiResponse.on('end', () => {
            console.log('Fetching eggs');
            var content = parseGitResponse(data);
            global.eggs = content;
            content.forEach(function(item) {
                let image = getImage(item.name);
                global.monMap.set(item.name, image)}
            );
        });
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

function get_eggs() {
    return global.eggs;
}

module.exports = { scrape_eggs, get_eggs }