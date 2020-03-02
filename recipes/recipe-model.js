const db = require('../database/dbConfig.js');

module.exports = {
    getAllRecipes,
    getById,
    insert,
    update
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
        .insert(recipe, 'id')
        .then(ids => {
            const [id] = ids;

            return db('recipes')
                .where({ id })
                .first();
        });
}

function update(id, changes) {
    return db('recipes')
        .where('id', id)
        .update(changes)
        .then(count => {
            if (count > 0) {
                return getById(id);
            }
        })
}