const product = '     20 inch monitor     ';

console.log(product);
console.log(product.length);

// Remove spaces at the beginning of the text string
console.log(product.trimStart);

// Remove spaces at the end of the text string
console.log(product.trimEnd);

/* Remove spaces at the beginning and end of the text string with both methods. */

// Option 1:
console.log(product.trimStart().trimEnd());

// Option 2:
console.log(product.trim());
