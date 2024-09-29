// Write a program to determine if a person is eligible to vote based on their age. The eligible age is 18 and above

function isEligibleVote(value) {
  return value >= 18 ? "Eligible" : "Not Eligible";
}

console.log(isEligibleVote(15));
console.log(isEligibleVote(18));
console.log(isEligibleVote(19));

// Write a program to calculate the grade based on marks. Use the following grade scale:
//90-100: A
//80-89: B
//70-79: C
//60-69: D
//Below 60: F

function calculateGrade(mark) {
  if (mark >= 90 && mark <= 100) {
    return "A";
  }
  if (mark >= 80 && mark <= 89) {
    return "B";
  }
  if (mark >= 70 && mark <= 79) {
    return "C";
  }
  if (mark >= 60 && mark <= 69) {
    return "D";
  }
  if (mark < 60) {
    return "F";
  }
  return "F";
}

console.log(calculateGrade(90));
console.log(calculateGrade(80));
console.log(calculateGrade(70));
console.log(calculateGrade(60));
console.log(calculateGrade(59));
