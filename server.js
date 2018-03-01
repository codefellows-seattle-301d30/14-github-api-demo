'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

app.use(express.static('./public'));
app.use(cors());

app.get('/', (request, response) => {
  response.sendFile('index.html');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));