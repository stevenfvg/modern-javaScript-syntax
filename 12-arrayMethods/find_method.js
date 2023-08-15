const shoppingCart = [
  { name: 'Monitor 27 Inches', price: 500 },
  { name: 'TV', price: 100 },
  { name: 'Tablet', price: 100 },
  { name: 'Earphones', price: 300 },
  { name: 'Keyboard', price: 400 },
  { name: 'Cell Phone', price: 100 },
];

// Using the 'find()' method to find the first product with a price of 100.
// The callback function evaluates if the price of the product is equal to 100.
console.log(shoppingCart.find((product) => product.price === 100));
