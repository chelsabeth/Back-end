

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'Lasagna', ingredients: 'cheese, sauce, noodles', directions: 'join cheese, noodles, and sauce, cook real good', category: 'dinner', user_id: 1 },
        {id: 2, title: 'Choc Chip Cookies', ingredients: 'choc chips', directions: 'take out of freezer and cook', category: 'dessert', user_id: 1 },
        {id: 3, title: 'Chili', ingredients: 'ground beef, chili seasoning', directions: 'brown burger, add beans, tomato soup, and chili seasoning, let simmer', category: 'dinner', user_id: 2 }
      ]);
    });
};

