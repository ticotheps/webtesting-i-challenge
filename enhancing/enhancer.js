module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  item.durability = 100;
  return { ...item };
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
