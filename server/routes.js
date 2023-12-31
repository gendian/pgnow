const express = require('express');
const controllers=require('./controllers');

const router = express.Router();

router.get('/user/:user', controllers.getUser)
router.get('/repo/:user/:reponame', controllers.getRepo)
router.get('/commit/:user/:reponame', controllers.getCommit)
router.get('/content/:contentType', controllers.getContent) // eggs, events, raids, or research DEPRECATED

router.get('/pokeapi/:mon', controllers.getPokeAPI) // PokeAPI
router.get('/shadow_raids', controllers.getShadows) // shadow raids
router.get('/events', controllers.getEvents) // events
router.get('/raids', controllers.getRaids) // raids
router.get('/eggs', controllers.getEggs) // eggs
router.get('/wilds', controllers.getWilds) // wild spawns
router.get('/researches', controllers.getResearches) // researches
router.get('/leaders', controllers.getLeaders) // leaders
router.get('/tierList', controllers.getTierList) // tier list for attackers
router.get('/tweets', controllers.getTweets) // tweets from pokemon go app
router.get('/exclusions', controllers.getExclusions) // tweets from pokemon go app
router.get('/pokemon', controllers.getAllPokemon) // load all pokemon
router.get('/pokemon/:mon', controllers.getPokemon) // load 1 pokemon

router.post('/exclusions', controllers.saveExclusions) // receive exclusions

module.exports = router;