// 1. purpose of switch
// used to match a value against multiple cases (clean alternative to many if-else)

// 2. drink based on choice
let i = 2;
switch (i) {
  case 1:
    console.log("Tea");
    break;
  case 2:
    console.log("Coffee");
    break;
  case 3:
    console.log("Juice");
    break;
  default:
    console.log("Invalid");
}

// 3. day of week
let j = 3;
switch (j) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other Day");
}

// 4. string values
let k = "Chocolate";
switch (k) {
  case "Vanilla":
    console.log("Vanilla selected");
    break;
  case "Chocolate":
    console.log("Chocolate selected");
    break;
  case "Strawberry":
    console.log("Strawberry selected");
    break;
}

// 5. default when no match
let l = 10;
switch (l) {
  case 1:
    console.log("One");
    break;
  default:
    console.log("No match");
}

// 6. break usage
let i2 = 1;
switch (i2) {
  case 1:
    console.log("Case 1");
    break; // stops here
  case 2:
    console.log("Case 2");
}

// 7. no break (fall-through)
let j2 = 1;
switch (j2) {
  case 1:
    console.log("Case 1");
  case 2:
    console.log("Case 2");
}
// prints both

// 8. fall-through demo
let k2 = 2;
switch (k2) {
  case 1:
  case 2:
  case 3:
    console.log("1, 2 or 3");
    break;
}

// 9. menu selection
let l2 = "Home";
switch (l2) {
  case "Home":
    console.log("Welcome Home");
    break;
  case "About":
    console.log("About Page");
    break;
  case "Contact":
    console.log("Contact Page");
    break;
}

// 10. strict comparison
let x = "1";
switch (x) {
  case 1:
    console.log("Number 1");
    break;
  case "1":
    console.log("String 1");
    break;
}
// matches "1" → strict (===)

// 11. step-by-step match
let y = 2;
switch (y) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
}


// 12. default execution
let z = 99;
switch (z) {
  case 1:
    console.log("One");
    break;
  default:
    console.log("Default runs");
}
// default runs when no case matches