function createAdder(a) {
  if (typeof a !== 'number') {
    throw new Error('Argument must be number');
  }
  return function addA(b) {
    if (typeof b !== 'number') {
      throw new Error('Argument must be number');
    }
    return a + b;
  };
}

module.exports = createAdder;