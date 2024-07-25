// function isOdd(num) {
//   //   if (num % 2 === 0) {
//   //     console.log("this is event number");
//   //   } else {
//   //     console.log("this is  odd number");
//   //   }
//   return num % 2 != 0 ? true : false;
// }

// function isOdd(num) {
//   if (!num || typeof num != "number") {
//     throw "Invalid input";
//   }

//   if (num % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isOdd = (num) => {
//   if (!num || typeof num != "number") {
//     throw "Invalid input";
//   }

//   return num % 2 != 0;
// };

const isOdd = (num) => num % 2 != 0;

console.log(isOdd(2));
