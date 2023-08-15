/* In JavaScript, the map() method is used to iterate over an array and create a new array with the results of calling a provided function on each element of the original array. 
It allows you to transform the elements of an array according to a specific logic and create a new array based on the transformed values.

The map() method takes a callback function as its argument, which is executed for each element in the array. 
This callback function can take three parameters: the current element being processed, the index of the current element, and the original array. */

// The syntax for using the map() method is as follows:

const shoppingCart = [
  { name: 'PlayStation 5', price: 600 },
  { name: 'Laptop HP Notebook', price: 250 },
  { name: 'Mouse HP', price: 5 },
  { name: 'Keyboard HP', price: 10 },
  { name: 'HP 32-inch monitor', price: 150 },
];

const newArray = shoppingCart.map(function (product) {
  return `${product.name} - Price: ${product.price}$`;
});

console.log(newArray);
