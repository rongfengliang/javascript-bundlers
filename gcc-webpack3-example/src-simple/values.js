const isUndef = (v) => (v === (void 0));
const isNumber = (v) => ((typeof v === 'number') && (!Number.isNaN(v)));

export {
  isUndef, isNumber,
};
