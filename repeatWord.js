function repeatWord(word, count) {
  if (typeof word !== 'string' || typeof count !== 'number' || count <= 0) {
    throw new Error('Invalid arguments');
  }
  const result = [];
  for (let i = 1; i <= count; i++) {
    result.push(`${word}${i}`);
  }
  return result.join(', ');
}

module.exports = repeatWord;
