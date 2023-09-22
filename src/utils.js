const constants=require('./constants');
const https = require('https');

const generateOptions=(_path)=>{
    return options = {
        hostname: constants.hostname,
        path: _path,
        headers: {
            'User-Agent': constants.user_agent
        },
        OAUth: process.env.GITHUB_ACCESS_TOKEN
    }
}

function parseGitResponse(data) {
    var dataJSON = JSON.parse(data);            // data from response is a string
    var dataFile = atob(dataJSON.content);      // data file is an encoded string on the response
    var content = JSON.parse(dataFile);         // parse JSON from decoded string file
    return content;
}

function formatName(name) {
    let formattedName = name;    
    formattedName = formattedName.toLowerCase();
    formattedName = formattedName.replace("mega", "");
    formattedName = formattedName.replace("hisuian", "");
    formattedName = formattedName.replace("galarian", "");
    formattedName = formattedName.replace("alolan", "");
    formattedName = formattedName.replace(".", "-");
    formattedName = formattedName.replace("'", "");
    formattedName = formattedName.replace(/\s/g,'');
    formattedName = formattedName.replace(/ *\([^)]*\) */g, "");
    formattedName = formattedName.replace("mimejr-", "mime-jr");

    if (formattedName.includes("unown")) {
        // fiddle with the request
        formattedName = "unown";
    }
    
    return formattedName;
}

function getImage(name) {
    var formattedName  = formatName(name);
    const options = 'https://pokeapi.co/api/v2/pokemon/' + formattedName;
    https.get(options, function (apiResponse) {
        let data = '';

        apiResponse.on('data', (chunk) => {
          data += chunk;
        });
      
        apiResponse.on('end', () => {
            var isValidJSON = true;
            try {
                JSON.parse(data);
            } catch (e) {
                isValidJSON = false;
            }
            if (isValidJSON) {
                let mon = JSON.parse(data);
                global.monMap.set(formattedName, mon.sprites.front_default);
            }
        });
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

function load_image(name) {
    var formattedName  = formatName(name);
    return global.monMap.get(formattedName);
}

module.exports = { generateOptions, parseGitResponse, getImage, load_image }