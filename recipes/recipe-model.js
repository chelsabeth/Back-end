const db = require('../database/dbConfig.js');

module.exports = {
    getAllRecipes,
}

function getAllRecipes() {
    return db.select('*').from('recipes')
}