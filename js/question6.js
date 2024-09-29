//Write a program to determine the largest of three numbers using nested if-else.

function largestNumber(first, second, third) {
  let largest;
  if (first >= second && first >= third) {
    largest = first;
  } else if (second >= first && second >= third) {
    largest = second;
  } else {
    largest = third;
  }
  console.log(largest);
}

largestNumber(1, 5, 8);
