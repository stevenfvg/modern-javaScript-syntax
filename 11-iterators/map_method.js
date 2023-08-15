/* .map() is a method just like .forEach().
 * The only difference is that the .map() method creates a new array which can be stored in a variable.
 *
 * Example:
 *
 */

const shoppingCart = [
  { name: 'Keys', price: 100 },
  { name: 'Monitor', price: 25 },
  { name: 'keyboard', price: 10 },
  { name: 'Mouse', price: 5 },
  { name: 'Speakers', price: 10 },
];

const listOfProducts = shoppingCart.map(product => product.name);
console.table(listOfProducts);
