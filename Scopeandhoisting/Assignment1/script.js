// 1. global variable
let i = "Global";
console.log(i);

// 2. global inside function
let j = "Accessible everywhere";
function testGlobal() {
  console.log(j);
}
testGlobal();

// 3. local variable (var inside function)
function localVar() {
  var k = "Local var";
  console.log(k);
}
localVar();

// 4. access local outside (error)
// console.log(k);  ReferenceError

// 5. let inside block
function blockLet() {
  if (true) {
    let l = "Block let";
    console.log(l); // works here
  }
}
blockLet();

// 6. access let outside block (error)
// console.log(l);  ReferenceError

// 7. const inside block
if (true) {
  const i2 = "Block const";
  console.log(i2); // works
}

// 8. access const outside (error)
// console.log(i2);  ReferenceError

// 9. global + local + block
let j2 = "Global variable";

function mixScope() {
  var k2 = "Local variable";

  if (true) {
    let l2 = "Block variable";
    console.log(j2); // global
    console.log(k2); // local
    console.log(l2); // block
  }

  console.log(j2); // global
  console.log(k2); // local
  // console.log(l2);  error
}
mixScope();

// 10. var vs let/const
function scopeTest() {
  if (true) {
    var a = "var scope";
    let b = "let scope";
    const c = "const scope";
  }

  console.log(a); // works (function scoped)
  // console.log(b);  error (block scoped)
  // console.log(c);  error (block scoped)
}
scopeTest();