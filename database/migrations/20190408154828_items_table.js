exports.up = function(knex) {
    return knex.schema.createTable('items', items => {
        items.increments();
  
        items
            .string('name', 128)
            .notNullable()
            .unique();

        items.integer('durability').notNullable();

        items.integer('enhancement').notNullable();

        items.string('displayName', 128).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
