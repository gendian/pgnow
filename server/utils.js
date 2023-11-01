const constants=require('./constants');
const https = require('https');
const fs = require("fs");
const { parse } = require("csv-parse");
// Note, the `stream/promises` module is only available
// starting with Node.js version 16
const { finished } = require('stream/promises');

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
    // format lowercase remove non-alphanumeric
    formattedName = formattedName.toLowerCase();
    formattedName = formattedName.replace("[^a-zA-Z0-9]", "");
    formattedName = formattedName.replace(/(\r\n|\n|\r)/gm, "");
    formattedName = formattedName.replaceAll(" ", "");
    formattedName = formattedName.replaceAll("(", "");
    formattedName = formattedName.replaceAll(")", "");
    formattedName = formattedName.replaceAll("'", "");

    // move mega to the end of the name
    if (formattedName.includes("mega")) {
        if (formattedName.includes("charizard")) {
            if (formattedName.includes("x")) {
                formattedName = "charizard-mega-x";
            } else if (formattedName.includes("y")) {
                formattedName = "charizard-mega-y";
            }
        } else {
            formattedName = formattedName.replace("mega", "");
            formattedName = formattedName.concat("-mega");
        }
    }
    // remove shadow
    if (formattedName.includes("shadow")) {
        formattedName = formattedName.replace("shadow", "");
    }
    // move alola to the end of the name
    if (formattedName.includes("alola")) {
        formattedName = formattedName.replace("alolan", "");
        formattedName = formattedName.concat("-alola");
    }
    // move galar to the end of the name
    if (formattedName.includes("galar")) {
        formattedName = formattedName.replace("galarian", "");
        formattedName = formattedName.concat("-galar");
    }
    // move hisuian to the end of the name
    if (formattedName.includes("hisui")) {
        formattedName = formattedName.replace("hisuian", "");
        formattedName = formattedName.concat("-hisui");
    }
    // move primal to the end of the name
    if (formattedName.includes("primal")) {
        formattedName = formattedName.replace("primal", "");
        formattedName = formattedName.concat("-primal");
    }
    // allow for formes
    if (formattedName.includes("forme")) {
        formattedName = formattedName.replace("therianforme", "-therian");
        formattedName = formattedName.replace("incarnateforme", "-incarnate");
        formattedName = formattedName.replace("skyforme", "-sky");
        formattedName = formattedName.replace("landforme", "-land");
        formattedName = formattedName.replace("alteredforme", "-altered");
        formattedName = formattedName.replace("originforme", "-origin");
        formattedName = formattedName.replace("attackforme", "-attack");
        formattedName = formattedName.replace("normalforme", "-normal");
        formattedName = formattedName.replace("defenseforme", "-defense");
        formattedName = formattedName.replace("speedforme", "-speed");
        formattedName = formattedName.replace("10", "-10");
        formattedName = formattedName.replace("50", "-50");
        formattedName = formattedName.replace("complete", "-complete");
    }
    if (formattedName.includes("cempasúchil")) {
        formattedName = formattedName.replace("cempasúchil", "");
    }    
    if (formattedName.includes("mime") && formattedName.includes("jr")) {
        formattedName = "mime-jr";
    } else if (formattedName.includes("unown")) {
        // fiddle with the request
        formattedName = "unown";
    } else if (formattedName.includes("pumpkaboo")) {
        // fiddle with the request
        formattedName = "pumpkaboo-average";
    }
    
    return formattedName;
}

function cacheImage(name) {
    var formattedName  = formatName(name);
    global.monMap.set(formattedName, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png");
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
    var image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
    if (name !== null && name !== undefined) {
        var formattedName = formatName(name);
        var imageRetrieved = global.monMap.get(formattedName);
        if (imageRetrieved !== null && imageRetrieved !== undefined) {
            image = imageRetrieved;
        }
    }
    return image;
}

function load_image_list() {
    var imageList = {
        names: [],
        images: []
    }
    for (const [key, value] of global.monMap) {  
        imageList.names.push(key);
        imageList.images.push(value);
    }
    return imageList;
}

async function parse_csv(csvUrl)
{

    // Read and process the CSV file
    const processFile = async () => {
        const records = [];
        const parser = fs
        .createReadStream(csvUrl)
        .pipe(parse({
            delimiter: ",", 
            columns: true
        }));
        parser.on('readable', function(){
        let record; while ((record = parser.read()) !== null) {
        // Work with each record
            records.push(record);
        }
        });
        await finished(parser);
        return records;
    };

    var result = await processFile(csvUrl);
    return result;
}

module.exports = { generateOptions, parseGitResponse, cacheImage, load_image, load_image_list, parse_csv }