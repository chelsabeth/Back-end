const express = require('express');
// const authenticate = require('../auth/auth-middleware.js'); 
const router = express.Router();
const db = require('../recipes/recipe-model.js')

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


// POST new recipe
router.post('/', validatePost, (req, res) => {
    const newRecipe = req.body;

    db.insert(newRecipe).then(brandNewRecipe => {
        res
            .status(200)
            .json(brandNewRecipe)
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: 'There was an error while saving to the database'
                });
            });
    });
});


// GET recipe by id
router.get("/:id", validateRecipeId, (req, res) => {
    const recipeID = req.params.id;
  
    db.getById(recipeID)
      .then(specificRec => {
        if (specificRec) {
          res.status(200).json(specificRec);
        } else {
          res.status(500).json({
            error: "No recipe with that ID"
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: "The recipe information could not be retrieved"
        });
      });
  });


// CUSTOM MIDDLEWARE
function validatePost(req, res, next) {
    const data = req.body;
    if (!data) {
        res.status(400).json({ error: 'missing required fields' })
    } else if (!data.title) {
        res.status(400).json({ error: 'missing required title' })
    } else if (!data.ingredients) {
        res.status(400).json({ error: 'missing required ingredients' })
    } else if (!data.directions) {
        res.status(400).json({ error: 'missing required directions' })
    } else if (!data.category) {
        res.status(400).json({ error: 'missing required category' })
    } else {
        next();
    }
}

function validateRecipeId(req, res, next) {
    const recipeID = Number(req.params.id);
    if (typeof recipeID === "number") {
      next();
    } else {
      res.status(404).json({
        message: "The recipe with the specific ID does not exist"
      });
    }
  }

module.exports = router;