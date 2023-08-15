// Ternary if example
const authenticated = true;
const youCanPay = true;

console.log(authenticated ? 'If you are authenticated' : 'Not authenticated');

// Nested condition example
console.log(
  authenticated
    ? youCanPay
      ? 'If you are authenticated'
      : "Yes authenticated, but can't pay"
    : 'You are not authenticated'
);
