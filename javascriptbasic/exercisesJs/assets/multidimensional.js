const students = [
  ["John", 20, 14, 0, 34, 23],
  ["Jane", 80, 94, 90, 74, 93],
];
let failCount = 0;
const studentsTotalMarks = [];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  let totalMarks = 0;

  let isFailed = false;

  for (let j = 1; j < student.length; j++) {
    const marks = student[j];

    if (marks < 35 && !isFailed) {
      failCount++;
      isFailed = true;
    }

    totalMarks += marks;
  }

  studentsTotalMarks.push({
    name: student[0],
    marks: totalMarks,
  });

  console.log(student[0], "Total Marks", totalMarks);
  console.log(student[0], "Avg Marks", totalMarks / (student.length - 1));
}

studentsTotalMarks.sort((a, b) => b.marks - a.marks);

for (let i = 0; i < studentsTotalMarks.length; i++) {
  console.log(i + 1, studentsTotalMarks[i].name + " rank");
}

console.log("Failed Students Count: ", failCount);
console.log("1st Rank", studentsTotalMarks[0]);
