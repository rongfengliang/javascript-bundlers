const {isNumber} = require('./values');

function add(a, b) {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  }
  return NaN;
}

function subtract(a, b) {
  if(isNumber(a) && isNumber(b)) {
    return a - b;
  }
  return NaN;
}

module.exports = {
  add, subtract,
};
