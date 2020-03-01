const db = require('../database/dbConfig.js');

module.exports = {
    getAllRecipes,
}

function getAllRecipes() {
    return db('recipes as r')
        .select('r.title', 'r.creator', 'r.ingredients', 'r.directions', 'r.category')
        .join('users as u', 'r.user_id', '=', 'u.id')
        .orderBy('r.user_id');
}