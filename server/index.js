// server/index.js
const path = require('path');
const express = require('express');
const loki = require('lokijs');
const cors = require('cors');
const middlewares = require('./middlewares');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { scrape_events } = require('./api/events');
const { scrape_raids } = require('./api/raids');
const { scrape_eggs } = require('./api/eggs');
const { scrape_researches } = require('./api/researches');
const { scrape_leaders } = require('./api/leaders');
const { scrape_tierList } = require('./api/tierList');
const { scrape_wilds } = require('./api/wilds');
const { cachePokemon } = require('./utils');
const cron = require("node-cron");
const PORT = process.env.PORT || 3001;
const app = express();

global.exclusions = new Array();

var db = new loki('pgnow.db');
global.exclusionCollection = db.addCollection('exclusion');
global.monCollection = db.addCollection('mon');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(middlewares.setHeaders);
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/pgnow_api', routes);
app.use(express.json());
app.use(cors());

scrape_data();

cron.schedule('0 0 10/2 * * *', () => {
  scrape_data();
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function scrape_data() {
  scrape_wilds();
  scrape_events();
  scrape_raids();
  scrape_eggs();
  scrape_researches();
  scrape_leaders();
  scrape_tierList();
}