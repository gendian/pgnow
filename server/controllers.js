const { generateOptions } = require('./utils');
const https = require('https');
const constants=require('./constants');
const { get_events } = require('./api/events');
const { get_raids, get_shadows } = require('./api/raids');
const { get_eggs } = require('./api/eggs');
const { get_wilds } = require('./api/wilds');
const { get_researches } = require('./api/researches');
const { get_leaders } = require('./api/leaders');
const { get_tierList } = require('./api/tierList');
const { get_tweets } = require('./api/tweets');
const { load_image, load_image_list } = require('./utils');

const getUser= async function (req, res) {
    const user = req.params.user;
    const options = generateOptions('/users/' + user)

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

const getRepo= async function (req, res) {
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = generateOptions('/repos/' + user + '/' + reponame) 

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

const getCommit= async function (req, res) {
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = generateOptions('/repos/' + user + '/' + reponame + '/commits')

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

// DON'T USER ME (RATE LIMITING ISSUES)
const getContent= async function (req, res) {
    const contentType = req.params.contentType;

    const options = generateOptions('/repos/bigfoott/ScrapedDuck/contents/' + contentType + '.json?ref=data');

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

const getShadows= async function (req, res) {
    res.json(get_shadows());
}

const getRaids= async function (req, res) {
    res.json(get_raids());
}

const getEvents= async function (req, res) {
    res.json(get_events());
}

const getEggs= async function (req, res) {
    res.json(get_eggs());
}

const getWilds= async function (req, res) {
    res.json(get_wilds());
}

const getResearches= async function (req, res) {
    res.json(get_researches());
}

const getLeaders= async function (req, res) {
    res.json(get_leaders());
}

const getTierList= async function (req, res) {
    res.json(get_tierList());
}

const getTweets= async function (req, res) {
    res.json(get_tweets());
}

const getPokeAPI= async function (req, res) {
    const mon = req.params.mon;
    const options = 'https://pokeapi.co/api/v2/pokemon/' + mon;

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

const loadImage= async function (req, res) {
    res.json(load_image(req.params.name));
}

const loadImageList= async function (req, res) {
    res.json(load_image_list());
}

module.exports = { getUser, getRepo, getCommit, getContent, getShadows, getEggs, getWilds, getEvents, getRaids, getResearches, getLeaders, getPokeAPI, 
        loadImage, loadImageList, getTierList, getTweets }