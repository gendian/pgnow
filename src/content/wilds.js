const https = require('https');
const { generateOptions, parseGitResponse, cacheImage } = require('../utils');

function scrape_wilds()
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
            console.log('Fetching wilds');
            //var content = parseGitResponse(data);
            var content = [
                {"name": "Pikachu"},
                {"name": "Vulpix"},
                {"name": "Murkrow"},
                {"name": "Misdreavus"},
                {"name": "Sableye"},
                {"name": "Piplup"},
                {"name": "Drifloon"},
                {"name": "Yamask"},
                {"name": "Zorua"},
                {"name": "Fennekin"},
                {"name": "Phantump"},
                {"name": "Pumpkaboo"},
                {"name": "Noibat"},
                {"name": "Gengar"},
            ];
            global.wilds = content;
            content.forEach(function(item) {
                cacheImage(item.name);
            });
        });
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

function get_wilds() {
    return global.wilds;
}

module.exports = { scrape_wilds, get_wilds }