// Example array
let array = [10, 20, 30, 40, 50, 60, 70, 80];

// Number to find
let targetNumber = 50;

// Variable to store the position of the target number
let position = 1;

// Iterate through the array
for (let i = 0; i < array.length; i++) {
  // Check if the current element is the target number
  if (array[i] === targetNumber) {
    // Store the position
    position = i;
    // Break the loop as we found the target number
    break;
  }
}

// Check if the number was found and log the result
if (position !== -1) {
  console.log(`Number ${targetNumber} found at position ${position}`);
} else {
  console.log(`Number ${targetNumber} not found in the array`);
}

//Multi Dimensional Array
let salary = [
  ["ABC", 24, 18000],
  ["EFG"],
  ["IJK", 28, 41000, 22, 23],
  ["EFG", 31, 28000, 33],
];
salary[0][3] = "India";
salary[1].push("Mumbai", "Tamil", "English", 30);
salary.push(["MNO", 29, 33300]);
salary.pop();

for (let i = 0; i < salary.length; i++) {
  for (let j = 0; j < salary.length; j++) {
    console.log(salary[i][j]);
  }
}

//students

// Array of students with their names and grades
var students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68],
];

var Avgmarks = 0;

// Loop through the students array to calculate the total marks
for (var i = 0; i < students.length; i++) {
  Avgmarks += students[i][1];
  var avg = Avgmarks / students.length;
}

// Calculate and log the average grade
console.log("Average grade: " + Avgmarks / students.length);

// Determine the grade based on the average
if (avg < 60) {
  console.log("Grade: F");
} else if (avg < 70) {
  console.log("Grade: D");
} else if (avg < 80) {
  console.log("Grade: C");
} else if (avg < 90) {
  console.log("Grade: B");
} else if (avg <= 100) {
  console.log("Grade: A");
}
