const product = {
  name: '20 Inch Monitor',
  price: 300,
  available: false,
};

// Add new properties to the object. Example:
product.stock = 1;
if (product.stock >= 0) {
  product.available = true;
}

// Before
console.log(product);

// Delete object properties. Example:
product.stock = 0; //we rewrite the value of the stack property to 0
if (product.stock < 1) {
  product.available = false;
  delete product.stock;
}

//After
console.log(product);
