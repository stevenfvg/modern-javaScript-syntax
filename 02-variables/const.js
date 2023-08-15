const product = 'Tablet';
console.log(product);

// Variables of type const cannot be reassigned and must always start with a value.
// Example

const price = 20;
console.log(price);

/* 
1. Reassignment:
Variables declared with `const` are read-only variables, which means they cannot be reassigned to new values once they have been assigned an initial value. Once you assign a value to a `const` variable, that value remains constant throughout the program.

2. Declaration and initialization:
Variables declared with `const` must be initialized with a value at declaration time. They cannot be assigned a value later.

3. Scope and hoisting:
    - Both `let` and `const` are block-scoped, which means they are only available within the block in which they are declared.
    - As with `let`, variable declarations with `const` do not hoist to the beginning of the block. This means that you cannot use a `const` variable before declaring it in your code.

4. Changeability:
  Although `const` variables are read-only variables, this does not mean that their contents are immutable. If a `const` variable stores an object or an array, the internal elements of that object or array can still be modified.

In short, `const` sets a variable with a constant value that cannot be reassigned. If you need a variable whose value won't change, use `const`. */
