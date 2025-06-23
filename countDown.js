function countDown(n) {
  if (typeof n !== 'number' || n <= 0) throw new Error('n must be positive number');
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result.join(' ');
}

module.exports = countDown;