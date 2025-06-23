const repeatWord = require('./repeatWord');

test('repeat "слово" 3 times', () => {
  expect(repeatWord('слово', 3)).toBe('слово1, слово2, слово3');
});

test('repeat one time', () => {
  expect(repeatWord('test', 1)).toBe('test1');
});

test('throws error for invalid args', () => {
  expect(() => repeatWord(123, 3)).toThrow();
  expect(() => repeatWord('word', 0)).toThrow();
  expect(() => repeatWord('word', -1)).toThrow();
});
