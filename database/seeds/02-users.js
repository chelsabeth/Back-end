
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'chelsabeth', password: '123abc'},
        {id: 2, username: 'bradford', password: 'pass1'},
        {id: 3, username: 'gracieg', password: 'pass123'}
      ]);
    });
};
