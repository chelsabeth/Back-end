const express = require('express');

const recipeRouter = require('../recipes/recipe-router.js');
const userRouter = require('../users/users-router.js');

const server = express();

server.use(logger);
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`server running for BW project!`);
});

server.use('/api/recipes', recipeRouter);
server.use('/api/users', userRouter);

// custom middleware for logger
function logger(req, res, next) {
    const {method, originalUrl} = req;
    console.log(`${method} to ${originalUrl}`)
  
    next();
  }

module.exports = server;