const ratioOfTwoNumbers = require("../ratio/index");

const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const obj = {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num3),
  };
  return obj;
};
module.exports = ratioAndFactorial;
