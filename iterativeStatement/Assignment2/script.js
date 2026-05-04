// 1.Write a program to print numbers from 1 to 5
// using a while loop.

let i=1
while(i<=5)
{
    console.log(i);
    i++
}

// 2.Write a program to print numbers from 5 to 1
// using a while loop.

let j=5
while(j>=1)
{
    console.log(j);
    j--
}

// 3.Write a program to print numbers starting
// from 2 and keep adding 2 while the number
// becomes less than 11.

let k=2
while(k<=11)
{
    console.log(k);
    k+2
}

// 4.Write a program to calculate the sum of
// numbers from 10 to 5 using a while loop.

let sum = 0;
let l = 10;
while (l >= 5) {
  sum += l;
  l--;
}
console.log(sum); // 40

// 5. while loop roles (initialization, condition, increment)
let i = 1; // initialization
while (i <= 3) { // condition
  console.log(i); // work
  i++; // increment
}

// 6. step-by-step trace
let j = 1;
while (j <= 3) {
  console.log(j);
  j++;
}
// runs: 1 → 2 → 3 → stop

// 7. condition false at start
let k = 5;
while (k < 3) {
  console.log(k);
  k++;
}
// runs 0 times

// 8. no update inside loop
let l = 1;
while (l <= 3) {
  console.log(l);
  // no increment → infinite loop
}

// 9. infinite loop example
let i2 = 1;
while (i2 > 0) {
  console.log(i2);
  i2++;
}
// never stops

// 10. condition controls stopping
let j2 = 1;
while (j2 <= 5) {
  console.log(j2);
  j2++;
}
// stops when j2 becomes 6

// 11. increment vs decrement
let k2 = 5;
while (k2 >= 1) {
  console.log(k2);
  k2--; // backward loop
}

// 12. number of times loop runs
let l2 = 1;
while (l2 <= 4) {
  console.log(l2);
  l2++;
}
// runs 4 times