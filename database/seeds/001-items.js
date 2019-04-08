
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          name: "Lambda Shield",
          durability: 98,
          enhancement: 3,
          displayName: "Lambda Shield"
        },
        {
          name: "Hammer of Thor",
          durability: 99,
          enhancement: 13,
          displayName: "Hammer of Thor"
        },
      ]);
    });
};
