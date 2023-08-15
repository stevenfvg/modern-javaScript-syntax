const money = 300;
let totalToPay = 300;

// Cards
const debitCard = true;
const creditCard = true;

if (money >= totalToPay) {
  console.log('If you can pay');
} else if (debitCard || creditCard) {
  console.log('Yes you can pay by card');
} else {
  console.log('Insufficient fund');
}

// Examples of the && operator to verify that 2 or more conditions are met
const user = true;
const youCanPay = true;

if (user && youCanPay) {
  console.log('If you can buy');
} else if (!user && !youCanPay) {
  console.log("No you can't buy");
} else if (!user) {
  console.log('You must start section or register account');
} else if (!youCanPay) {
  console.log('Insufficient fund');
}

// Example of the OR operator so that at least one condition is fulfilled
const cash = 300;
const credit = 1000;
const available = cash + credit;
totalToPay = 600;

if (cash > totalToPay || credit > totalToPay || available > totalToPay) {
  console.log('If you can pay');
} else {
  console.log('Insufficient fund');
}
