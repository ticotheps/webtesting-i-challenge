module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // return { ...item };
  return null;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
