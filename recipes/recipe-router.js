const express = require('express');
const router = express.Router();

const Recipes = require('./recipe-model');

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