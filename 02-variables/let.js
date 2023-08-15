let product = 'Tablet';

// Assign the value of the product variable
product = '24 inch laptop';
product = 20;

// Example: assign value to undefined variable using let.
let price;
price = 300;
console.log(price);

/* In JavaScript, the `var` and `let` keywords are used to declare variables, but there are some important differences between them.

1. Scope:
    - `var`: Variables declared with `var` have function scope or global scope, depending on whether they are declared inside or outside a function. If a variable is declared with `var` inside a function, its scope is limited to that function. If it is declared outside of any function, its scope will be global, which means it will be available throughout the entire program.
    - `let`: Variables declared with `let` are block-scoped, which means they are only available within the block in which they are declared. A block can be a function, a `for` loop, an `if` conditional, among others. Outside of the block, the variable is not available.

2.Hosting:
    - `var`: Variable declarations with `var` are "hoisted" to the beginning of the function or global scope in which they are found. This means that you can use a `var` variable before explicitly declaring it in your code, even though its initial value will be `undefined`.
    - `let`: Variable declarations with `let` are not "raised" to the beginning of the block. This means that you cannot use a `let` variable before declaring it in your code. You are required to declare the variable before using it.

3. Reassignment:
    - `var`: You can reassign a variable declared with `var` as many times as you want within its scope.
    - `let`: As with `var`, you can reassign a variable declared with `let`, but only within the same block. You cannot redeclare a `let` variable in the same scope.

In short, the main difference between `var` and `let` lies in their scope and how they are handled in the hoisting process. `let` provides a stricter block scope and avoids the problems associated with hoisting and the use of undeclared variables. Therefore, it is recommended to use `let` instead of `var` in modern JavaScript code.
 */
