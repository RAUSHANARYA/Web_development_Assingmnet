// 1. anonymous function in variable
let i = function () {
  console.log("Anonymous function");
};
i();

// 2. print "Hello"
let j = function () {
  console.log("Hello");
};
j();

// 3. add two numbers (return)
let k = function (a, b) {
  return a + b;
};
console.log(k(2, 3));

// 4. call and print output
let l = function (x, y) {
  return x * y;
};
console.log(l(4, 5));

// 5. anonymous inside setTimeout
setTimeout(function () {
  console.log("Executed after delay");
}, 1000);

// 6. print after 2 seconds
setTimeout(function () {
  console.log("2 seconds passed");
}, 2000);

// 7. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed");
})();

// 8. IIFE with message
(function () {
  console.log("Runs instantly");
})();

// 9. call multiple times
let i2 = function () {
  console.log("Called");
};
i2();
i2();
i2();

// 10. anonymous as callback
function process(a, b, fn) {
  return fn(a, b);
}
console.log(process(5, 3, function (x, y) {
  return x - y;
}));

// 11. takes parameters + returns value
let j2 = function (a, b) {
  return a / b;
};
console.log(j2(10, 2));

// 12. all together

// (a) variable
let k2 = function () {
  console.log("Stored function");
};
k2();

// (b) callback
function run(fn) {
  fn();
}
run(function () {
  console.log("Callback function");
});

// (c) IIFE
(function () {
  console.log("IIFE again");
})();