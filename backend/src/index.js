// server/index.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const middlewares = require('./middlewares');
const routes = require('./routes');
const { scrape_shadows } = require('./content/shadows');
const { scrape_events } = require('./content/events');
const { scrape_raids } = require('./content/raids');
const { scrape_eggs } = require('./content/eggs');
const { scrape_researches } = require('./content/researches');
const { scrape_leaders } = require('./content/leaders');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(middlewares.setHeaders);
app.use('/github_api', routes);
app.use(express.json());
app.use(cors());

scrape_shadows();
scrape_events();
scrape_raids();
scrape_eggs();
scrape_researches();
scrape_leaders();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

