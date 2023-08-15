const shoppingCart = [
  { name: 'Monitor 27 Inches', price: 500 },
  { name: 'TV', price: 100 },
  { name: 'Tablet', price: 200 },
  { name: 'Earphones', price: 300 },
  { name: 'Keyboard', price: 400 },
  { name: 'Cell Phone', price: 700 },
];

// Use the 'reduce()' method to calculate the total prices in the shopping cart.
// t = total
// p = product
// 0 is the second argument passed to the reduce() method that specifies the initial value of the accumulator before starting the iterations.
console.log(shoppingCart.reduce((t, p) => t + p.price, 0));

/* (t, p) => t + p.price: The callback function used in the reduce() method. It takes two arguments: t (accumulator) and p (current product in the iteration). 
The function adds the price of the current product to the accumulator. */
