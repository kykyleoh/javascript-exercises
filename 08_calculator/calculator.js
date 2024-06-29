const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((total, currVal) => {return total + currVal} ,0);
};

const multiply = function(arr) {
  return arr.reduce((total, currVal) => {return total * currVal}, 1);
};

const power = function(num, pow) {
	return num**pow
};

const factorial = function(num) {
  if (num == 0 || num == 1) {return 1};

	let arr = Array();
  for (let i=1; i<=num; i++) {
    arr.push(i);
  }
  return multiply(arr);
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
