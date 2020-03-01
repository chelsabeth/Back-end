const db = require('../database/dbConfig.js');

module.exports = {
    getAllRecipes,
    getById,
    insert
}

function getAllRecipes() {
    return db('recipes as r')
        .select('r.title', 'r.creator', 'r.ingredients', 'r.directions', 'r.category')
        .join('users as u', 'r.user_id', '=', 'u.id')
        .orderBy('r.user_id');
}

function getById(id) {
    return db('recipes')
      .where({ id })
      .first();
  }

function insert(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(ids => {
            return getById(ids[0]);
        });
}