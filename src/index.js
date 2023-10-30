// server/index.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const middlewares = require('./middlewares');
const routes = require('./routes');
const { scrape_events } = require('./content/events');
const { scrape_raids } = require('./content/raids');
const { scrape_eggs } = require('./content/eggs');
const { scrape_researches } = require('./content/researches');
const { scrape_leaders } = require('./content/leaders');
const { scrape_tierList } = require('./content/tierList');
const { scrape_wilds } = require('./content/wilds');
const cron = require("node-cron");
const PORT = process.env.PORT || 3001;
const app = express();

global.monMap = new Map();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(middlewares.setHeaders);
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
  scrape_events();
  scrape_raids();
  scrape_eggs();
  scrape_researches();
  scrape_leaders();
  scrape_tierList();
  scrape_wilds();
}

