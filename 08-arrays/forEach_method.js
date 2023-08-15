const shoppingCart = [
  { name: 'PlayStation 5', price: 600 },
  { name: 'Laptop HP Notebook', price: 250 },
  { name: 'Mouse HP', price: 5 },
  { name: 'Keyboard HP', price: 10 },
  { name: 'HP 32-inch monitor', price: 150 },
];

shoppingCart.forEach(function (product) {
  console.log(`${product.name} - Price: ${product.price}$`);
});
