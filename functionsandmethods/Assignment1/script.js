// 1. Hello World
function hello() {
  console.log("Hello World");
}
hello();

// 2. display your name
function showName() {
  console.log("Shivanshi");
}
showName();

// 3. welcome message
function welcome() {
  console.log("Welcome to College");
}
welcome();

// 4. parameter (name)
function greet(i) {
  console.log("Hello " + i);
}
greet("Rahul");

// 5. sum of two numbers (print)
function sum(j, k) {
  console.log(j + k);
}
sum(3, 4);

// 6. square of a number
function square(l) {
  console.log(l * l);
}
square(5);

// 7. return addition
function add(i2, j2) {
  return i2 + j2;
}
console.log(add(2, 3));

// 8. return multiplication
function multiply(k2, l2) {
  return k2 * l2;
}
console.log(multiply(4, 5));

// 9. name and age message
function info(i3, j3) {
  console.log(i3 + " is " + j3 + " years old");
}
info("Aman", 20);

// 10. average of three numbers
function average(k3, l3, i4) {
  return (k3 + l3 + i4) / 3;
}
console.log(average(10, 20, 30));

// 11. call multiple times
function greetUser(j4) {
  console.log("Hello " + j4);
}
greetUser("A");
greetUser("B");
greetUser("C");

// 12. greater number
function greater(k4, l4) {
  if (k4 > l4) return k4;
  else return l4;
}
console.log(greater(10, 20));