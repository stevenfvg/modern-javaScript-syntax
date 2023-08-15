/*
 * FizzBuzz Job Interview Challenge:
 *
 * Print the numbers from 1 to 100 on the console, all numbers that are multiples of 3 should print the word 'Fizz' on the console.
 * All numbers that are multiples of 5 should print the word 'Buzz' and those that are multiples of 3 and 5 should print FizzBuzz.
 *
 * 3, 6, 9, 12 ... fizz
 * 5, 10, 15, 20 ... buzz
 * 15, 30, 45 ... fizzBuzz!
 *
 */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} fizzBuzz!`);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
  }
}
