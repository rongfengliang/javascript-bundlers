define([], function() {
  'use strict';
  var values = {};

  function isUndef(v) {
    return (v === (void 0));
  }

  function isNumber(v) {
    return ((typeof v === 'number') && (!Number.isNaN(v)));
  }

  values.isUndef = isUndef;
  values.isNumber = isNumber;

  return values;

});
