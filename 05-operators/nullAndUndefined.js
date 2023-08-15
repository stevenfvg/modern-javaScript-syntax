// Undefined examples
let undefinedValue;
console.log(undefinedValue);

// Null examples
let nullValue = null;
console.log(nullValue);

// Comparison
console.log(undefinedValue == nullValue);
console.log(undefinedValue != nullValue);

// Check the data type
console.log(typeof undefinedValue);
console.log(typeof nullValue);

/*
 * To prevent errors and anomalies in the behavior of the code,
 * it is always recommended to use the strict comparer for the undefined and null values.
 */

// Strict comparison
console.log(undefinedValue === nullValue);
console.log(undefinedValue !== nullValue);
