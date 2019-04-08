const express = require('express');

const configureMiddleware = require('./middleware.js');
const itemsRouter = require('../users/items-router.js');

const server = express();

configureMiddleware(server);

server.use('/api/items', itemsRouter);

server.get('/', (req, res) => {
  res.send("The server for the web-testing-i-challenge project! ...It's alive!");
});

module.exports = server;