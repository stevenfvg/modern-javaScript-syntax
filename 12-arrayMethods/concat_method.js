const firstSemester = ['January', 'February', 'March', 'April', 'May', 'June'];
const secondSemester = ['July', 'August', 'September', 'October', 'November', 'December'];

// Example of how to join 2 arrays with the concat() method.
console.log(firstSemester.concat(secondSemester));

// Example using the Spread Operator.
const monthsOfYear = [...firstSemester, ...secondSemester];
console.log(monthsOfYear);
