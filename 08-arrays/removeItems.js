const shoppingCart = [
  {
    name: 'Mechanical Keyboard',
    length: '60%',
    price: 100,
  },
  {
    name: 'Mechanical Keyboard',
    length: '65%',
    price: 120,
  },
  {
    name: 'Cell phone',
    length: 'N/A',
    price: 800,
  },
];

/* Remove the last element of the array using the pop method. Example:
shoppingCart.pop();
console.table(shoppingCart);

Remove from start of array. Example:
shoppingCart.shift();
console.table(shoppingCart); */

// Remove elements with the splice method
shoppingCart.splice(1, 1);
console.table(shoppingCart);
