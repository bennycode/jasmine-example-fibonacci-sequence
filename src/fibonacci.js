const errors = require('./errors');

function fibonacci(n) {
  if (isNaN(n)) {
    throw new Error(errors.NOT_A_NUMBER);
  }

  if (n < 0) {
    throw new Error(errors.NOT_POSITIVE);
  } else if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports = fibonacci;
