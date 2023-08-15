'use strict'; // Use strict mode to enable the freeze method of objects.

const product = {
  name: '20 Inch Monitor',
  price: 300,
  available: false,
};

// Object.freeze(product);
Object.seal(product);

/*
 * The freeze method helps us keep objects intact,
 * so that their values and properties cannot be modified.
 */

// Add new properties to the object. Example:
/* product.stock = 1;
if (product.stock >= 0) {
  product.available = true;
} */

// Before
// console.log(product);

// Delete object properties. Example:
/* product.stock = 0; //we rewrite the value of the stack property to 0
if (product.stock < 1) {
  product.available = false;
  delete product.stock;
} */

//After
// console.log(product);

/*
 * If we apply changes to the object with the freeze method,
 * the method will return an error to the console.
 */

// Check if the object is frozen
console.log(Object.isFrozen(product));

/*
 * The seal method allows us to rewrite the values of the object's properties,
 * but it does not allow us to extend or reduce the object.
 */

// Check if the object is sealed
console.log(Object.isSealed(product));

// Example
product.available = true;
console.log(product.available);
