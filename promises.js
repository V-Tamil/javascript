// const promise = new Promise((resolve, reject) => {
//   const num = 3;
//   if (num % 2 === 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// console.log(1);

// promise
//   .then(() => console.log("Even number"))
//   .catch(() => console.log("Odd Number"));

// console.log(2);

const url = "https://jsonplaceholder.org/posts";

fetch(url)
  .then((response) => {
    response.json().then((json) => console.log(json));
  })
  .catch((error) => console.log(error));
