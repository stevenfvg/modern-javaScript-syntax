const product = '20 inch Curved Monitor';

// Example of the .replace method to replace the text string
console.log(product);
console.log(product.replace('inch', '"'));
console.log(product.replace('Curved', 'Gaming'));

// Example of the .slice method to cut the text string according to the position of the text string entered in the method as a parameter.
console.log(product.slice(0, 7));
console.log(product.slice(8));
console.log(product.slice(2, 1)); // If parameter1 > parameter2, the function does not return any value.

// Example of the .substring method as an alternative to the .slice method.
console.log(product.substring(0, 7));
/* With the .substring method if parameter1 > parameter2 this is equivalent to parameter2 < parameter1, 
which returns the position equal to parameter1 of the text string. */
console.log(product.substring(2, 1)); // return 0;

/* The charAt() method in JavaScript is used to get the character at a specific position within a text string. 
This method returns the character located at the specified index in the string. */

// Example
const user = 'Steven';
console.log(user.charAt(0));
