const https = require('https');

function get_exclusions()
{    
    var results = global.exclusionCollection.where(function(obj) {
        return (obj.name !== undefined);
    });
    return results;
}

function overwrite_exclusions(exclusionArray)
{    
    if (exclusionArray !== undefined) {
        global.exclusionCollection.clear();
        exclusionArray.forEach(exclusion => {
            const exObj = {
                "name": exclusion
            }
            global.exclusionCollection.insert(exObj);
        });        
    } else {
        console.log("exclusions is not an object");
    }
}

module.exports = { get_exclusions, overwrite_exclusions }