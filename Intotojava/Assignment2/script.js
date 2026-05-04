// 1.Create variables to store your name, age, and
// student status (true/false).

let name1 = "Shivanshi";
let age1 = 21;
let isStudent1 = true;

// 2.Declare variables using var, let, and const.

var a
let b
// const c

// 3.Declare a variable first and assign a value later
// (declaration + initialization).

var ab
let bc
// const cd

ab='sv'
bc="hello"
cd=23

// 4.Create variables of different data
// types: number, string, boolean.

let num1 = 10;          // number
let str = "Hello";     // string
let isActive = true;  // boolean

// 5.Create one variable with undefined and
// another with null.

let x;        // undefined
let y = null; // null

// 6.Use typeof to check the data type of different
// variables.

console.log(x); //->typeof x in console->undefined and y->object

// 7.Create multiple variables and display their
// values together.

let name = "Shivanshi";
let age = 21;
let isStudent = true;

console.log(name, age, isStudent);

// 8.Create variables and perform a simple
// calculation (like addition).

let p = 5
let q = 7
console.log(p+q);

// 9.Create an object to store student details (name
// and age).

const student = {
  stuname: "Shivanshi",
  age: 21
};

// 10.Show dynamic typing by changing a variable
// from number to string.

let value = 10;      // number
value = "Ten";       // now string

console.log(value);

// 11.Create a const variable and observe what
// happens when you try to change its value.

const num = 4
// num = 3 -> error
console.log(num);
