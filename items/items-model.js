const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  succeed,
  fail,
  repair,
  get
};

function find() {
  return db('items').select('id', 'name', 'durability', 'enhancement', 'displayName');
}

function findBy(filter) {
  return db('items').where(filter);
}

async function add(item) {
  const [id] = await db('items').insert(item);

  return findById(id);
}

function findById(id) {
  return db('items')
    .select('id', 'name')
    .where({ id })
    .first();
}

function repair(item) {
	if (item === undefined || item === null) {
		return null;
	} else if (typeof item === "object" && item.hasOwnProperty("durability")) {
		item.durability = 100;
		return { ...item };
  	} else {
		return null;
	}
}

function succeed(item) {
	if (item === undefined || item === null) {
		return null;
	} else if (typeof item === "object" && item.hasOwnProperty("enhancement")) {
		if (item.enhancement === 20) {
			return item;
		} else {
			item.enhancement += 1;
			return { ...item };
		}
  	} else {
		return null;
	}
}

function fail(item) {
	if (item === undefined || item === null) {
		return null;
	} else if (typeof item === "object" && item.hasOwnProperty("enhancement") && item.hasOwnProperty("durability")) {
		if (item.enhancement < 15) {
			item.durability -= 5;
			return { ...item };
		} else if (item.enhancement >= 15) {
			if (item.enhancement > 16) {
				item.enhancement -= 1;
				item.durability -= 10;
				return { ...item };
			} else {
				item.durability -= 10;
				return { ...item };
			}
		}
  	} else {
		return null;
	}
}

function get(item) {
	if (item === undefined || item === null) {
		return null;
	} else if (typeof item === "object" && item.hasOwnProperty("enhancement") && item.hasOwnProperty("displayName")) {
		if (item.enhancement === 0) {
			return item;
		} else if (item.enhancement > 0) {
			const enhanced = "[+" + item.enhancement + "] ";
			item.displayName =  enhanced.concat(item.displayName);
			return { ...item };
		}
  	} else {
		return null;
	}
}