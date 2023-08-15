// Definition of an array called 'months' that contains the names of the first 7 months of the year.
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Definition of an array called 'shoppingCart' that contains objects representing products.
const shoppingCart = [
  { name: 'Monitor 27 Inches', price: 500 },
  { name: 'TV', price: 100 },
  { name: 'Tablet', price: 200 },
  { name: 'Earphones', price: 300 },
  { name: 'Keyboard', price: 400 },
  { name: 'Cell Phone', price: 700 },
];

// Using the spread operator to create a new array that includes the months from 'months' array and adds 'August'.
console.log([...months, 'August']);

// Definition of a new product object.
const newProduct = { name: 'Hard Disk', price: 300 };
// Using the spread operator to create a new array that includes the contents of 'shoppingCart' array and adds 'newProduct'.
console.log([...shoppingCart, newProduct]);
