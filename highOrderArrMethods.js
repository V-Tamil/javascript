// High Order Array Methods

/* foreach method */
// const array = ["Tom", "Jerry", "John"];

// array.forEach((name, idx) => {
//   console.log(name, idx);
// });

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i], i);
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

// const names = employees.map((emp) => emp.name);

// console.log(names);

// const names = [];

// for (let i = 0; i < employees.length; i++) {
//   names.push(employees[i].name);
// }

// console.log(names);

/* filter method */

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

// const newEmployees = employees.filter((emp) => {
//   if (emp.role === "Thief") {
//     return false;
//   } else {
//     return true;
//   }
// });

// Refactored filter code

// const newEmployees = employees.filter((emp) => emp.role !== "Thief");

// const newEmployees = [];

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].role !== "Thief") {
//     newEmployees.push(employees[i]);
//   }
// }

// console.log("newEmployees", newEmployees);




