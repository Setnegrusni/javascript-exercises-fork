const add = function(firstNum, secondNum) {
  return firstNum + secondNum; //correct
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum; //correct
};

const sum = function(myArr) {
	return myArr.reduce((sumAll, actual) => (sumAll + actual), 0);
};

const multiply = function(myArr) {
 return myArr.reduce((multAll, actual) => (multAll * actual), 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(number) {
let fact = 1;

  if (number < 0) {
    return "ERROR"
  } else {
    if (number === 0 || number === 1) {
      return 1
    } else {
      for (let i = 1; i <= number; i++) {
        fact = fact * i;
      }

      return fact;
    }
  }
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
