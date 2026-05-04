// 1. jump statements
// break → exits loop immediately
// continue → skips current iteration
// return → exits function and sends value back

// 2. stop when value becomes 5 (break)
let i = 1;
while (i <= 10) {
  if (i === 5) break;
  console.log(i);
  i++;
}
// prints 1 2 3 4

// 3. print 1–10 but stop at 6
let j = 1;
while (j <= 10) {
  if (j === 6) break;
  console.log(j);
  j++;
}
// prints 1 2 3 4 5

// 4. skip 3 using continue
let k = 1;
while (k <= 5) {
  if (k === 3) {
    k++;
    continue;
  }
  console.log(k);
  k++;
}
// prints 1 2 4 5

// 5. skip one value (example: 4)
let l = 1;
while (l <= 6) {
  if (l === 4) {
    l++;
    continue;
  }
  console.log(l);
  l++;
}
// prints 1 2 3 5 6

// 6. break exits immediately
let i2 = 1;
while (i2 <= 5) {
  console.log(i2);
  break;
  // loop stops here after first iteration
}
// prints only 1

// 7. continue skips only current iteration
let j2 = 1;
while (j2 <= 5) {
  j2++;
  if (j2 === 3) continue;
  console.log(j2);
}
// skips 3 but continues rest

// 8. function with return (sum)
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3)); // 5

// 9. total price (price + tax)
function totalPrice(price, tax) {
  return price + tax;
}
console.log(totalPrice(100, 18)); // 118

// 10. code after return does not run
function test() {
  return "Done";
  console.log("This will not execute");
}
console.log(test());

// 11. break vs continue
let k2 = 1;
while (k2 <= 5) {
  if (k2 === 3) break;     // stops loop completely
  console.log(k2);
  k2++;
}
// prints 1 2

let l2 = 1;
while (l2 <= 5) {
  l2++;
  if (l2 === 3) continue;  // skips only 3
  console.log(l2);
}
// continues after skip

// 12. break control flow
let x = 1;
while (x <= 5) {
  if (x === 3) break;
  console.log(x);
  x++;
}
console.log("Loop ended");
// control jumps here after break