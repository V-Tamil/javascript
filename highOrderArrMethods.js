// High Order Array Methods

/* foreach method */
// const array = ["Tom", "Jerry", "John"];

// array.forEach((data, idx) => {
//   console.log(data, idx);
// });

// const forLoop = (data, idx) => {
//   console.log(data, idx);
// };

// for (let i = 0; i < array.length; i++) {
//   forLoop(array[i], i, array);
// }

/* map method */

// const employees = [
//   {
//     name: "Tom",
//     role: "Mouse Hunter",
//   },
//   {
//     name: "Jerry",
//     role: "Thief",
//   },
//   {
//     name: "John",
//     role: "Software Engineer",
//   },
// ];

// const names = employees.map((emp) => {
//   return emp.name;
// });

// console.log(names);

// const names = [];

// for (let i = 0; i < employees.length; i++) {
//   names.push(employees[i].name);
// }

// console.log(names);

/* filter method */

const employees = [
  {
    name: "Tom",
    role: "Mouse Hunter",
  },
  {
    name: "Jerry",
    role: "Thief",
  },
  {
    name: "John",
    role: "Software Engineer",
  },
];

// const newEmployees = employees.filter((emp) => {
//   if (emp.role === "Thief") {
//     return false;
//   } else {
//     return true;
//   }
// });

// console.log(newEmployees);

// Refactored filter code

// const newEmployees = employees.filter((emp) => emp.role !== "Thief");
// console.log(newEmployees);

// const newEmployees = [];

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].role !== "Thief") {
//     newEmployees.push(employees[i]);
//   }
// }

// console.log("newEmployees", newEmployees);
