const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const shoppingCart = [
  { name: 'Monitor 27 Inches', price: 500 },
  { name: 'TV', price: 100 },
  { name: 'Tablet', price: 200 },
  { name: 'Earphones', price: 300 },
  { name: 'Keyboard', price: 400 },
  { name: 'Cell Phone', price: 700 },
];

// Check if a value exists in an array manually
months.forEach(month => {
  if (month === 'January') {
    console.log(`${months[0]} if it exists`);
  }
});

/* Check for the existence of a value within an array with the 
.includes method, this method is not compatible with object arrays. */
console.log(months.includes('January'));

// Using the .some method to check for the existence of a value in an array and array of objects.
const result1 = months.some(month => month === 'February');
console.log(result1);

const result2 = shoppingCart.some(product => product.name === 'Tablet');
console.log(result2);
