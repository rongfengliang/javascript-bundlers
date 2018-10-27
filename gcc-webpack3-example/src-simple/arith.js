import {isNumber} from './values.js'

const add = (a, b) => {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  }
  return NaN;
}

export {
  add,
};
