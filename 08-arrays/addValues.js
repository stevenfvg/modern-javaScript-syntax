const numbers = [4, 2, 3];

// Add values manually
numbers[0] = 1;
numbers[3] = 4;

console.table(numbers);

// Methods to add new values
const shoppingCart = [];

// Define a product
const product = {
  name: 'Mechanical Keyboard',
  length: '60%',
  price: 100,
};

const product2 = {
  name: 'Mechanical Keyboard',
  length: '65%',
  price: 120,
};

/* Imperative form using the push and unshift methods

// Add elements to the end of the array
shoppingCart.push(product);

// Add elements to the beginning of the array
shoppingCart.unshift(product2);

// List products
console.table(shoppingCart); */

// Declarative form using the Spread Operator
let listShoppingCart;

// Add elements to the end of the array
listShoppingCart = [...shoppingCart, product];
console.table(listShoppingCart);

// Add elements to the beginning of the array
listShoppingCart = [product2, ...listShoppingCart];
console.table(listShoppingCart);
