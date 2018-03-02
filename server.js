'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

app.get('/', (request, response) => {
  response.sendFile('index.html');
})

app.get('/github/*', (request, response) => {
  console.log('Routing for:', request.params[0]);
  const url = `https://api.github.com/${request.params[0]}`;
  superagent(url)
    .set(`Authorization`, `token ${process.env.TOKEN}`)
    .then(repos => response.send(repos.text))
    .catch(console.error)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));