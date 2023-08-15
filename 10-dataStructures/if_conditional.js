let score = 1000;

// Example of the if condition:
if (score == 1000) {
  console.log("if it's the same...");
}

// != different, == equal to
if (score != 1000) {
  console.log('Yeah! is different.');
} else {
  console.log('No! is different.');
}

// Strict comparator
if (score === '1000') {
  console.log("If it's the same");
} else {
  console.log('It is not the same');
}

// Example of how to stop the execution of an if with a function
score = 500;

function checkScore() {
  if (score >= 400) {
    console.log('Excellent!');
    return; // The return checks the condition, if it is fulfilled it stops the execution of the if.
    /*
     * Note:
     * For return to work, it must be executed inside a function.
     */
  }
  if (score >= 300) {
    console.log('Good score');
    return;
  }
}

checkScore();
