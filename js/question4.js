// Write a switch case to print the name of a day (e.g., 1 for Sunday, 2 for Monday, etc.) based on a number input.4.

function nameOfDay(value) {
  switch (value) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";

    default:
      return "No Day";
  }
}

console.log(nameOfDay(1));
console.log(nameOfDay(2));
console.log(nameOfDay(3));
console.log(nameOfDay(4));
console.log(nameOfDay(5));
console.log(nameOfDay(6));
console.log(nameOfDay(7));

// Write a program to print the first 10 natural numbers using a for loop.

function naturalNumber() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

naturalNumber();

// Write a program to print the multiplication table of a number entered by the user

function multiplicationTable(value) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * value);
  }
}

multiplicationTable(5);

// Write a program to calculate the factorial of a number using a while loop.

function factorialNumber(value) {
  let i = 1;
  let result = 1;
  while (i <= value) {
    result *= i;
    i++;
  }
  console.log(result);
}

factorialNumber(5);

// Write a program that sums all numbers between 1 and 100 that are divisible by 5

function divisibleBy5() {
  let value = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      value += i;
    }
  }
  console.log(value);
}

divisibleBy5();
