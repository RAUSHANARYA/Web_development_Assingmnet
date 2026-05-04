// 1. function expression stored in variable
let i = function () {
  console.log("Hello");
};
i();

// 2. execute using variable name
let j = function () {
  console.log("Executed using variable");
};
j();

// 3. takes one value
let k = function (x) {
  console.log(x);
};
k(10);

// 4. store and print message
let l = function () {
  let msg = "This is a message";
  console.log(msg);
};
l();

// 5. two parameters
let i2 = function (a, b) {
  console.log(a, b);
};
i2(5, 6);

// 6. two different function expressions
let j2 = function () {
  console.log("First function");
};
let k2 = function () {
  console.log("Second function");
};
j2();
k2();

// 7. assign to another variable
let l2 = function () {
  console.log("Original");
};
let copy = l2;
l2();
copy();

// 8. return value
let i3 = function (a, b) {
  return a + b;
};
console.log(i3(2, 3));

// 9. call multiple times
let j3 = function (x) {
  console.log("Value:", x);
};
j3(1);
j3(2);
j3(3);

// 10. calling before declaration
// console.log(k3(2,3)); ❌ ERROR (not hoisted like function declaration)

let k3 = function (a, b) {
  return a + b;
};
console.log(k3(2, 3));

// 11. average of three numbers
let l3 = function (a, b, c) {
  return (a + b + c) / 3;
};
console.log(l3(10, 20, 30));