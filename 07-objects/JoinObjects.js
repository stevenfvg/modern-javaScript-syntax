const product = {
  name: '21 Inch Monitor',
  price: 300,
  available: true,
};

const measurements = {
  weight: '1kg',
  Centimeters: '53,34cm',
  width: '46,5cm',
  height: '26,2cm',
};

// Example of how to join two objects with the assign method
// console.log(Object.assign(product, measurements));

// Join objects using the Spread Operator or Rest Operator
console.log({ ...product, ...measurements });
