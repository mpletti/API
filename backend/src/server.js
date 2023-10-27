const express = require('express');

const app = express();

app.get("/", (request, response) => response.status(200).send('Hello'));

app.listen(3000, () => console.log('Server running or port 3000'));

module.exports = app;
