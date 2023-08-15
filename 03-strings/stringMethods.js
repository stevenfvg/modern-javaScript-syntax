const product = '27 inch monitor';
console.log(product);

// The length method returns the number of characters found in the text string.
console.log(product.length);

/* The indexOf() method in JavaScript is used to find the first occurrence of a specific value within an array or a string. 
This method returns the index of the first occurrence of the searched value, or -1 if the value is not found.

The indexOf() method accepts a required argument that represents the value to search for. 
It can be a number, a text string or any other type of data. 
In addition, it also accepts an optional second argument called fromIndex, which specifies the index from which to start the search.

Here are some examples of using the indexOf() method: */

// Example: Search for a text string within another string.
const str = 'Hello, World!';
const index = str.indexOf('World');
console.log(index);
