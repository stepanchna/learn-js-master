function getPercents(percent, number) {
  if (typeof percent !== 'number' || typeof number !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return (percent / 100) * number;
}

module.exports = getPercents;

