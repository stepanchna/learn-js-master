const countDown = require('./countDown');

test('countDown from 3', () => {
  expect(countDown(3)).toBe('3 2 1');
});

test('countDown from 1', () => {
  expect(countDown(1)).toBe('1');
});

test('throws error for non-positive or non-number', () => {
  expect(() => countDown(0)).toThrow();
  expect(() => countDown(-2)).toThrow();
  expect(() => countDown('3')).toThrow();
});
