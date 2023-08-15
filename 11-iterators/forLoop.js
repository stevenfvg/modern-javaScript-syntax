// Basic example
/* for (let i = 0; i <= 10; i++) {
  console.log(`number: ${i}`);
} */

/*
 * Exercise for job interview
 *
 * Exercise 1:
 * Show in the console the numbers from 1 to 10 indicating the EVEN and ODD numbers.
 *
 */
console.log('Exercise 1');
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} even number`);
  } else {
    console.log(`${i} odd number`);
  }
}

// Break and continue example

/*
 * Exercise 2:
 *
 * Print the numbers 1 to 10 on the console with a for and stop the for loop at number 5.
 *
 */
console.log(`\n Exercise 2`);
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

/*
 * Exercise 3
 *
 * Show the previous exercise on the console with the numbers from 1 to 10,
 * but continuing the cycle from number 5. In this way, the console should only print the numbers from 5 to 10.
 *
 */
console.log(`\n Exercise 3`);
for (let i = 1; i <= 10; i++) {
  if (i >= 5) {
    console.log(i);
    continue;
  }
}
