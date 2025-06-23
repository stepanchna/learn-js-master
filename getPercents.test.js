const getPercents = require('./getPercents');

test('returns correct percent of number', () => {
  expect(getPercents(30, 200)).toBe(60);
  expect(getPercents(50, 100)).toBe(50);
  expect(getPercents(0, 100)).toBe(0);
});

test('handles corner cases', () => {
  expect(getPercents(150, 200)).toBe(300);
  expect(getPercents(-10, 200)).toBe(-20);
  expect(getPercents(50, 0)).toBe(0);
});

test('throws error on invalid arguments', () => {
  expect(() => getPercents('30', 200)).toThrow();
  expect(() => getPercents(30, '200')).toThrow();
  expect(() => getPercents(null, 100)).toThrow();
  expect(() => getPercents(30)).toThrow();
});

