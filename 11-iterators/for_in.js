// Unlike for_of, for_in is an object iterator. Example:
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2023,
  engine: '2.0',
};

for (const property in car) {
  console.log(`${property}: ${car[property]}`);
}

console.log('\n');

// Another way to iterate the keys and values
for (let [property, value] of Object.entries(car)) {
  console.log(`${property}: ${value}`);
}
