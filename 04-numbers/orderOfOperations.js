// In JavaScript, the order of operations follows standard mathematical rules.

// 1. Basic arithmetic operations:

let result = 10 + 5 * 2; // First do the multiplication and then the addition.
console.log(result); // 20

result = (10 + 5) * 2; // Parentheses have higher precedence and are resolved first.
console.log(result); // 30

result = 10 / 2 + 5; // Division is done first and then addition.
console.log(result); // 10

// 2. Operations with parentheses:

let result2 = (10 + 5) * 2 - 8 / 4; // The operations inside parentheses are solved first.
console.log(result2); // 29

result2 = ((10 + 5) * 2 - 8) / 4; // Nested parentheses are resolved first.
console.log(result2); // 4.25


// 3. Operations with multiple operators:

let result3 = 10 + 5 * 2 - 8 / 4; // Multiplication and division are done first, then addition and subtraction.
console.log(result3); // 19

result3 = 10 % 4 + 6 / 2 - 1; // First the module is done, then the division, and finally the addition and subtraction.
console.log(result3); // 3
