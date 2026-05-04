// 1. strict mode + var
"use strict";
var i = 10;
console.log(i);

// 2. using variable without declaration
// j = 20;  ReferenceError in strict mode

// 3. strict mode inside function
function test1() {
  "use strict";
  // k = 30;  ReferenceError
}
test1();

// 4. value of this in strict mode
function test2() {
  "use strict";
  console.log(this); // undefined
}
test2();

// 5. delete variable
"use strict";
var x = 5;
// delete x;  SyntaxError

// 6. duplicate parameters
// function sum(a, a) {  SyntaxError in strict mode
//   return a + a;
// }

// 7. octal number
// let y = 010;  SyntaxError in strict mode

// 8. reserved keyword
// let eval = 10;  SyntaxError

// 9. compare strict vs non-strict

// non-strict
function normal() {
  z = 100; // allowed (creates global)
  console.log(z);
}
normal();

// strict
function strictFn() {
  "use strict";
  // w = 200;  ReferenceError
}
strictFn();

// 10. combined strict behavior
function demo() {
  "use strict";

  // undeclared variable
  // a = 1;  ReferenceError

  // duplicate parameter
  // function test(a, a) {}  SyntaxError

  console.log(this); // undefined
}
demo();