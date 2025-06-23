const getMonth = require('./getMonth');

test('get month names correctly', () => {
  expect(getMonth(1)).toBe('январь');
  expect(getMonth(12)).toBe('декабрь');
  expect(getMonth(6)).toBe('июнь');
});

test('throws error for invalid months', () => {
  expect(() => getMonth(0)).toThrow();
  expect(() => getMonth(13)).toThrow();
  expect(() => getMonth('1')).toThrow();
});
