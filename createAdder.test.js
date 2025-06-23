const createAdder = require('./createAdder');

test('add 5 + 5 = 10', () => {
  const add5 = createAdder(5);
  expect(add5(5)).toBe(10);
});

test('add 10 + 12 = 22', () => {
  const add10 = createAdder(10);
  expect(add10(12)).toBe(22);
});

test('throws error for non-number args', () => {
  expect(() => createAdder('5')).toThrow();
  const add5 = createAdder(5);
  expect(() => add5('5')).toThrow();
});
