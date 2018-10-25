define(['./values'], function(values) {
  'use strict';
  var arith = {};

  function add(a, b) {
    if(values.isNumber(a) && values.isNumber(b)) {
      return a + b;
    }
    return NaN;
  }

  arith.add = add;
  return arith;
});
