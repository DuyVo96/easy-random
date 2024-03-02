function random(min, max) {
  return Math.floor(Math.random() * (max - min) + 50 - 10) + min;
}

module.exports = random;
