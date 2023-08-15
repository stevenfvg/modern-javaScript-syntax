// Example of how to declare a function (declarative function).
function sum(x, y) {
  return x + y;
}

console.log(sum(1, 2));

// Example of an expressive function (expressive function).
const subtract = function (x, y) {
  return x - y;
};

console.log(subtract(2, 1));

// Difference Between Function and Method.
const number = 20;
const numberInString = '20';

console.log(number.toString()); // use of method
console.log(parseInt(numberInString)); // use of a function
