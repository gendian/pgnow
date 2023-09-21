const { generateOptions } = require('./utils');
const https = require('https');
const constants=require('./constants');
const { get_shadows } = require('./content/shadows');
const { get_events } = require('./content/events');
const { get_raids } = require('./content/raids');
const { get_eggs } = require('./content/eggs');
const { get_researches } = require('./content/researches');
const { get_leaders } = require('./content/leaders');

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

const getResearches= async function (req, res) {
    res.json(get_researches());
}

const getLeaders= async function (req, res) {
    res.json(get_leaders());
}

const getPokeAPI= async function (req, res) {
    const mon = req.params.mon;
    const options = 'https://pokeapi.co/api/v2/pokemon/' + mon;

    console.log(options);

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

module.exports = { getUser, getRepo, getCommit, getContent, getShadows, getEggs, getEvents, getRaids, getResearches, getLeaders, getPokeAPI }