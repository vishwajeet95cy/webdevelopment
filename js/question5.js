//Write a program to check if a number is positive, negative, or zero using the ternary operator.

function checkNumberIFElse(value) {
  if (value > 0) {
    console.log("Positive number");
  } else if (value < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero");
  }
}

checkNumberIFElse(10);
checkNumberIFElse(0);
checkNumberIFElse(-1);

function checkNumberTernary(value) {
  return value > 0 ? "Positive number" : value < 0 ? "Negative number" : "Zero";
}

console.log(checkNumberTernary(10));
console.log(checkNumberTernary(0));
console.log(checkNumberTernary(-1));
