// 1. var before declaration
console.log(i); // undefined (hoisted, not initialized)
var i = 10;

// 2. var before and after initialization
console.log(j); // undefined
var j = 20;
console.log(j); // 20

// 3. let before declaration
// console.log(k);  ReferenceError (TDZ)
let k = 30;

// 4. const before declaration
// console.log(l);  ReferenceError (TDZ)
const l = 40;

// 5. function declaration hoisting
test(); // works
function test() {
  console.log("Function declaration");
}

// 6. function expression before assignment
// demo();  TypeError (undefined is not a function)
var demo = function () {
  console.log("Function expression");
};
demo();

// 7. function expression behaves like variable
console.log(x); // undefined
var x = function () {
  console.log("Hello");
};
// x(); works only after assignment

// 8. TDZ inside block
{
  // console.log(y);  ReferenceError
  let y = 50;
}

// 9. var vs let hoisting
console.log(a); // undefined
var a = 5;

// console.log(b);  ReferenceError
let b = 6;

// 10. combined behavior
console.log(p); // undefined (var hoisted)
var p = 10;

// console.log(q);  ReferenceError (TDZ)
let q = 20;

// console.log(r);  ReferenceError (TDZ)
const r = 30;

func(); // works (function hoisted)
function func() {
  console.log("Hoisted function");
}