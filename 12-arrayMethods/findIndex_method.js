const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const shoppingCart = [
  { name: 'Monitor 27 Inches', price: 500 },
  { name: 'TV', price: 100 },
  { name: 'Tablet', price: 200 },
  { name: 'Earphones', price: 300 },
  { name: 'Keyboard', price: 400 },
  { name: 'Cell Phone', price: 700 },
];

// Example of how to find the index of a value in an array manually with forEach.
months.forEach((month, index) => {
  if (month === 'February') {
    console.log(`${month} located in the index: ${index}`);
  }
});

// Example of how to find the index of a value using the findIndex method.
console.log(months.findIndex(month => month === 'April'));

// Using the findIndex method on an array of objects.
console.log(shoppingCart.findIndex(product => product.price === 100));
