let product = '27 inch monitor, ';
let price = '30 USD ';

// In JavaScript, there are several ways to concatenate strings. Example:

/* Example 1: The concat() method can be used to concatenate strings. 
You can concatenate multiple strings by calling concat() on the first string and passing the other strings as arguments. */

console.log(product.concat(price.concat('at 30% discount')));

// Example 2: `+` operator You can concatenate strings using the + operator.

const str1 = 'Hello, ';
const str2 = 'World!';
const result = str1 + str2;

console.log(result);

/* Example 3: template literals (string templates). 
Template literals are a more modern and readable syntax for concatenating strings. 
Backquotes () are used instead of single or double quotes, and variables or expressions are wrapped in ${}`. */

product = '27 inch monitor';
price = 30;

console.log(`${product}, ${price}$ at 30% discount`);
