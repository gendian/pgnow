const jsd = require('jsdom');
const { JSDOM } = jsd;

function scrape_tweets()
{
    return new Promise(resolve => {
        JSDOM.fromURL("https://twitter.com/PokemonGoApp", {
        })
        .then((dom) => {

            var content = dom.window.document.querySelector('div[data-testid="tweetPhoto"').childNodes;
            var tweets = [];
            
            content.forEach(c =>
            {
                if (c.nodeName == "img")
                {
                    var imagesrc = c.src;
                }
            })
            console.log("Scraping tweets");
            global.tweets = tweets;
        }).catch(_err =>
            {
                console.log(_err);
            });
        })
}

function get_tweets() {
    return global.tweets;
}

module.exports = { scrape_tweets, get_tweets }