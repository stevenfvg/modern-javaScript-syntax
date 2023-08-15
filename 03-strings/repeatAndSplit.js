/* The repeat() method in JavaScript is used to create and return a new string that consists of concatenating the same value repeated a specified number of times.

The repeat() method accepts a required argument that represents the number of times the value will be repeated in the resulting string. 
This argument must be a non-negative integer. If a decimal number is provided, it will be rounded to the nearest whole number. */

// Example:
const product = '20 inch Curved Monitor';
const repeatedText = ' On sale'.repeat(3);

console.log(`${product}, ${repeatedText} !!!`);

/* The split() method is used to split a text string into an array of substrings based on a specified separator. 
The split() method takes the separator as an argument and returns a new array containing the resulting substrings.

The separator can be a text string or a regular expression. If a text string is supplied as a separator, 
the split() method will look for that exact string in the original string and perform the split at each occurrence. 
If a regular expression is provided as a separator, the split() method will perform the split on each match to the regular expression. */

// Example:
const products = 'Monitors, Keyboards, Mouse, Laptops';
console.log(products.split(', '));

/* It is also possible to provide an optional second argument to the split() method to limit the number of splits performed. 
This is useful when you only want to split the string into a certain number of parts. */

// Example:
console.log(products.split(', ', 2));
