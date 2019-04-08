module.exports = {
	succeed,
  	fail,
  	repair,
  	get
};

function repair(item) {
	if (typeof item === "object" && item.hasOwnProperty("durability")) {
			item.durability = 100;
			return { ...item };
  	} else {
		return null;
  	}
}

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
