const express = require('express');
// const authenticate = require('../auth/auth-middleware.js'); 
const router = express.Router();

const Recipes = require('./recipe-model');

// GET all recipes
router.get('/', (req, res) => { 
    Recipes.getAllRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errMessage: 'Failed to get recipes, sorry!' })
    })
});

module.exports = router;