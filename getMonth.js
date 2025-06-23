function getMonth(n) {
  if (typeof n !== 'number' || n < 1 || n > 12) {
    throw new Error('Month number must be from 1 to 12');
  }

  if (n === 1) return 'январь';
  else if (n === 2) return 'февраль';
  else if (n === 3) return 'март';
  else if (n === 4) return 'апрель';
  else if (n === 5) return 'май';
  else if (n === 6) return 'июнь';
  else if (n === 7) return 'июль';
  else if (n === 8) return 'август';
  else if (n === 9) return 'сентябрь';
  else if (n === 10) return 'октябрь';
  else if (n === 11) return 'ноябрь';
  else return 'декабрь';
}

module.exports = getMonth;
