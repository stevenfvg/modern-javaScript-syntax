// Examples with the equals comparison operator (=)
const value1 = 20;
const value2 = 30;

const valueInString = '20';

// Compare if 2 values are equal
console.log(value1 == value2);
console.log(value1 == valueInString);

// Strict comparer, also compares the data type of the variable
console.log(value1 === value2);
console.log(value1 === valueInString);

// Examples with the different comparison operator (!=)
const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2);
console.log(value1 != value2);

// Strict mode
console.log(value1 !== valueInString);
console.log(value1 !== parseInt(valueInString));
