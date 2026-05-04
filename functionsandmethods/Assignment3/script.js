// 1. print message
let i = () => {
  console.log("Welcome to JavaScript");
};
i();

// 2. greeting with name
let j = (name) => {
  console.log("Hello " + name);
};
j("Shivanshi");

// 3. add two numbers (return)
let k = (a, b) => {
  return a + b;
};
console.log(k(2, 3));

// 4. multiply and print
let l = (a, b) => {
  console.log(a * b);
};
l(4, 5);

// 5. square
let i2 = (x) => {
  return x * x;
};
console.log(i2(6));

// 6. sum of three numbers
let j2 = (a, b, c) => {
  return a + b + c;
};
console.log(j2(1, 2, 3));

// 7. string length
let k2 = (str) => {
  return str.length;
};
console.log(k2("Hello"));

// 8. positive or negative
let l2 = (num) => {
  if (num > 0) return "Positive";
  else return "Negative";
};
console.log(l2(-5));

// 9. difference
let i3 = (a, b) => {
  return a - b;
};
console.log(i3(10, 4));

// 10. return message
let j3 = () => {
  return "Learning Arrow Functions";
};
console.log(j3());

// 11. average of three numbers
let k3 = (a, b, c) => {
  return (a + b + c) / 3;
};
console.log(k3(10, 20, 30));