// Object literal
const product = {
  name: '20 Inch Monitor',
  price: 300,
  available: true,
};

// Object constructor
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.available = true;
}

// Example of how to create new products with the constructor method
const product2 = new Product('24 inch monitor', '600');
const product3 = new Product('27 inch monitor', '900');

console.log(product2);
console.log(product3);
