function random(min, max) {
  return Math.floor(Math.random() * (max - min) + 110101) + min;
}

module.exports = random;
