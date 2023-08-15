const numbers = [10, 20, 30, 40, 50];

// Destructuring. Example
const [ten, twenty, thirty] = numbers;
console.log(ten, twenty, thirty);

// Extract the last element of the array
const [, , , , fifty] = numbers;
console.log(fifty);
