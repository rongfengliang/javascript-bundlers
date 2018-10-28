function isUndef(v) {
  return (v === (void 0));
}

function isNumber(v) {
  return ((typeof v === 'number') && (!Number.isNaN(v)));
}

module.exports = {
  isUndef, isNumber,
};
