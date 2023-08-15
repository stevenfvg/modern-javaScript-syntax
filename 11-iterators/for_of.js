// Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// iterating an array
for (const number of numbers) {
  console.log(number);
}

console.log('\n');
// iterating an array of objects
const shoppingCart = [
  { name: 'Keys', price: 100 },
  { name: 'Monitor', price: 25 },
  { name: 'keyboard', price: 10 },
  { name: 'Mouse', price: 5 },
  { name: 'Speakers', price: 10 },
];

for (const product of shoppingCart) {
  console.log(product);
}
