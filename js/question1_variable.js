// Create variables to store your name, age, and whether you are a student (boolean). Log these variables to the console.

const user = {
  name: "vishwa",
  age: 20,
  student: true,
};

console.log(user);

// Write a program to swap the values of two variables without using a third variable.
let a = 5;
let b = 4;
console.log({ a, b });

a = a + b;
b = a - b;
a = a - b;
console.log({ a, b });
