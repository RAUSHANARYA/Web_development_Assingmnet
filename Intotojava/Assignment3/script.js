// 1.Create two variables and perform addition,
// subtraction, multiplication, and division.

let a = 3
let b = 6
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a/b);

// 2. Find the remainder when two numbers are
// divided using the modulus operator.

console.log(a%b);

// 3.Use the exponent operator to calculate power
// of a number.

console.log(a ** b);

// 4.Assign a value to a variable and then update it
// using += and -= operators.

a += 5;   
a -= 3;   
console.log(a);

// 5.Use *= and /= operators to modify a variable’s
// value.

b *= 3;   
b /= 2;  
console.log(b);

// 6.Compare two values using == and === and
// observe the result.

let x = 5;
let y = "5";
console.log(x == y);   // true (loose comparison)
console.log(x === y);  // false (strict, checks type)

// 7.Use comparison operators (>, <, >=, <=) to check
// different conditions.

let num = 10;
console.log(num > 5);   // true
console.log(num < 5);   // false
console.log(num >= 10); // true
console.log(num <= 8);  // false

// 8.Create two variables and check if both
// conditions are true using &&.

let age = 20;
let hasID = true;
console.log(age > 18 && hasID); // true

// 9.Use ! operator to reverse a boolean value.

let isLoggedIn = false;
console.log(!isLoggedIn);

// 10. Demonstrate pre-increment and postincrement and observe the difference.

let p = 5;
console.log(++p); // 6 (increment first)
console.log(p++); // 6 (print, then increment → becomes 7)
console.log(p); //7

// 11. Demonstrate pre-decrement and postdecrement and observe the difference.

let q = 5;
console.log(--q); // 4
console.log(q--); // 4 (then becomes 3)
console.log(q);   // 3

// 12. Use the ternary operator to check if a number
// is pass or fail (marks ≥ 40).

let marks = 45;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);

// 13. Combine multiple conditions using logical
// operators (like marks > 80 AND attendance > 75).

let attendance = 80;
console.log(marks > 80 && attendance > 75); // false

// 14. Use typeof operator to check the data type of
// different values.

console.log(typeof 10);        // number
console.log(typeof "hello");   // string
console.log(typeof true);      // boolean
console.log(typeof null);      // object (JS bug, remember this)