const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, item) => total += item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total *= item);
};

const power = function(numb, pwr) {
	return numb ** pwr;
};

const factorial = function(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
