function sum(a, b) {
  // a and b are parameters.
  console.log(a + b);
}

sum(2, 3); // the values 2 and 3 are arguments.

// Example:
/* function greet(name, lastName) {
  console.log(`Hello ${name} ${lastName}`);
}

greet('Juan', 'De la Torre'); */

// Default parameters
function greet(name, lastName = '') {
  console.log(`Hello ${name} ${lastName}`);
}

/* If there is no argument for some of the parameters, 
the function will return a default value */

greet('Juan');
