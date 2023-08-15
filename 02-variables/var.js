// Example of initializing a global variable with a global scope with a value.
var product = '24 inch monitor';
console.log(product);

// In JavaScript, global and local scope variables can be reassigned.
product = '19 inch monitor';
console.log(product);

// JavaScript is a dynamically typed language, no data type is specified.
product = 20;
console.log(product);

// Example: assign value to undefined variable
var productInStock;
productInStock = true;
productInStock = false;

// Example: initialize multiple variables
var category = 'footwear',
  brand = 'Nike',
  qualification = 5;

/* In modern JavaScript using the var keyword to declare variables is considered bad practice, 
today the standard for declaring variables is reduced to two keywords, let and const. */
