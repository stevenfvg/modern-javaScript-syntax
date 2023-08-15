// Example of the Switch to evaluate multiple conditions:

const paymentMethod = 'cash';

switch (paymentMethod) {
  case 'cash':
    console.log(`Payment made with ${paymentMethod}`);
    break;
  case 'debit':
    console.log(`Payment made with ${paymentMethod}`);
    break;
  case 'creditCard':
    console.log(`Payment made with ${paymentMethod}`);
    break;
  default:
    console.log('Payment method not selected or payment method not supported');
    break;
}

