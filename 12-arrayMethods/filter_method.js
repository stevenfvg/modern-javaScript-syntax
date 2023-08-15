const shoppingCart = [
  { name: 'Monitor 27 Inches', price: 500 },
  { name: 'TV', price: 100 },
  { name: 'Tablet', price: 200 },
  { name: 'Earphones', price: 300 },
  { name: 'Keyboard', price: 400 },
  { name: 'Cell Phone', price: 700 },
];

// Use the 'filter()' method to get a list of products with prices less than 600.
// The callback function evaluates if the price of the product is less than 600.
console.log(shoppingCart.filter(product => product.price < 600));
