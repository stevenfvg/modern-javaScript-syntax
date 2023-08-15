// Example of how to create a function or method for the product object
const product = {
  name: '20 Inch Monitor',
  price: 300,
  available: true,
  showInfo: function () {
    console.log(`Product: ${this.name}, Price: ${this.price}$`);
  },
};

product.showInfo();
