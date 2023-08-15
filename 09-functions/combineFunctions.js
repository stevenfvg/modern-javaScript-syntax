// Example of communication between functions:
startApp();

function startApp() {
  console.log('Starting app...');

  showMessage();
}

function showMessage() {
  console.log('Hello World!');
}

// Example with multiple functions that pass values:
let total = 0;

function addToCart(price) {
  return (total += price);
}

function calculateIva(total) {
  return total * 1.15;
}

total = addToCart(300);
total = addToCart(100);
total = addToCart(600);

const totalToPay = calculateIva(total);

console.log(`Subtotal ${total}$`)
console.log(`The total to pay is ${totalToPay}$`)
