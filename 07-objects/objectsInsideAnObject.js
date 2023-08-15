const product = {
  name: '21 Inch Monitor',
  price: 300,
  available: true,
  specifications: {
    measurements: {
      weight: '1kg',
      Centimeters: '53,34cm',
      width: '46,5cm',
      height: '26,2cm',
    },
    manufacturing: {
      country: 'China',
    },
  },
};

// Access the properties of the specifications object
console.log(product.specifications.measurements);

// Get the country of manufacture of the product
console.log(product.specifications.manufacturing.country);

// Apply destructuring
const {
  specifications: {
    measurements,
    manufacturing: { country },
  },
} = product;
console.log('Getting properties with destructuring: ');
console.log(measurements);
console.log(country);
