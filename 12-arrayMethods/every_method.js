const shoppingCart = [
  { name: 'Monitor 27 Inches', price: 500 },
  { name: 'TV', price: 100 },
  { name: 'Tablet', price: 200 },
  { name: 'Earphones', price: 300 },
  { name: 'Keyboard', price: 400 },
  { name: 'Cell Phone', price: 700 },
];

// Use the 'every()' method to check if all products have a price less than 1000.
// The callback function evaluates if the price of the product is less than 1000.
console.log(shoppingCart.every(product => product.price < 1000));
