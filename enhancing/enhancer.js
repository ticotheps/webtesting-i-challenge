module.exports = {
	succeed,
  	fail,
  	repair,
  	get
};

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
  return { ...item };
}

function get(item) {
  return { ...item };
}
