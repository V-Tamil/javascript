// Even Number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumberposition = [];

for (i = 0; i < numbers.length; i++) {
  if (i % 2 == 0) {
    evenNumberposition.push(numbers[i]);
  }
}
console.log("EvenPostions:", evenNumberposition);

//Find Number
const FindNumber = 6;
const matchingKeys = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === FindNumber) {
    matchingKeys.push(numbers[i]);
  }
}
console.log("Find the Number : ", matchingKeys);

// Small Number
const smallnum = [10, 6, 5, 40, 50, 3, 70, 80];

let smallestNumber = smallnum[0];

for (let i = 1; i < smallnum.length; i++) {
  if (smallnum[i] < smallestNumber) {
    smallestNumber = smallnum[i];
  }
}
console.log("The smallest number is", smallestNumber);

// Large Number
const largenum = [10, 2, 100, 40, 50, 360, 7, 110];
let largestNumber = largenum[0];

for (let i = 1; i < largenum.length; i++) {
  if (largenum[i] > largestNumber) {
    largestNumber = largenum[i];
  }
}
console.log("The largest number is", largestNumber);

// Example array
let array = [10, 20, 5, 40, 50, 3, 70, 80];

// 3, 5, 10, 20, 40, 50,..

// function findSecSmallestItem(numbers) {
//   const sortedArray = numbers.sort((a, b) => a - b);
//   return sortedArray[1];
// }

// console.log(findSecSmallestItem(array));

function secondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }

  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] != first) {
      second = arr[i];
    }
  }

  return second;
}

// Example usage:
let array = [5, 2, 9, 1, 5, 6];
console.log(secondSmallest(array));
