// let amount = 95;
// let msg = `"You have 5 itemes in your cart.
// Your bill amount is $${amount}  "`;
// console.log(msg);

// arrays
// let cities = ["chennai", "Madurai", "Trichy"];
// let marks = [10, 20, 30, 40, 50];
// console.log(marks.length);
// console.log(cities.length);
// console.log(marks[marks.length - 1]);

// 2D Array
// let matrix = [
//   [3, 4, 5],
//   [4, 5, 7],
//   [6, 7, 8],
// ];
// console.log(matrix[2][1]);

// Exercise (variable)

// var price = 100;
// var product = "iphone15";
// var tax = 10;
// console.log(product);
// console.log("total = ", price + tax);

// let furitName = "apple";
// let count = 5;
// let price = 20;
// let total = count * price;
// console.log("name of the furit = ", furitName);
// console.log("total price of the fruits = ", total);

// Exercise (function)

// function iphone() {
//   console.log("This is iphone phone");
// }
// iphone();

// function redmi() {
//   console.log("This is Redmi Phone");
// }
// redmi();

// function oppo() {
//   console.log("This is Oppo Phone");
// }
// oppo();
// let a = 5;
// let b = 10;
// function add() {
//   console.log(a + b);
// }
// add();

// function favourite() {
//   const favouriteActor = "Vijay";
//   const favouritePlayer = "Dhoni";
//   const favouriteMovie = "killy";
//   console.log(`Favourite Actor : ${favouriteActor}
// Favourite Player : ${favouritePlayer}
// Favourite Movie : ${favouriteMovie}`);
// }
// favourite();

// Exercise (function and use return key word )
// function add() {
//     return 10 + 20;
//   }
//   console.log(add());

// Exercise (function pass the perametre)

// function area(length, breadth) {
//   let a = length * breadth;
//   console.log("Area is : " + a);
// }
// area(20, 10);

// function add(a, b) {
//   return a + b;
// }
// let total = add(10, 20);
// console.log(add(10, 10));

// Exercise (if condition)

// if (false) {
//   console.log("It is true");
// } else {
//   console.log("It is false");
// }

// let rain = false;
// if (rain) {
//   console.log("Take an umbrella");
// } else {
//   console.log("Enjoy the sunshine");
// }

// let homework = true;
// if (homework) {
//   console.log("Great job!");
// } else {
//   console.log("Finish your homework before playing");
// }

// let cookies = true;
// if (cookies) {
//   console.log("Would you like a cookie?");
// } else {
//   console.log("Time to bake more cookies");
// }

// let brush = false;
// if (brush) {
//   console.log("your teeth are clean");
// } else {
//   console.log("Go brush your teeth now");
// }

// let birthday = true;
// if (birthday) {
//   console.log("Happy Birthday!Enjoy Your special day");
// } else {
//   console.log("Have a great day");
// }

// let season = "autumn";
// if (season == "spring") {
//   console.log("Enjoy the blooming flower.");
// } else if (season == "summer") {
//   console.log("Have fun in the sun.");
// } else if (season == "autumn") {
//   console.log("Admire the colorful leaves.");
// } else if (season == "winter") {
//   console.log("Bundle up and stay warm");
// } else {
//   console("Happy the all Season");
// }

// let number = 2;
// if (number == 2) {
//   console.log("The number is even number");
// } else if (number == 3) {
//   console.log("This is odd number");
// }

// let character = "vowel";
// if (character == "vowel") {
//   console.log("a,e,i,o,u");
// } else if ((character = "consonant")) {
//   console.log("it is a consonant");
// }

// for loop
// for (count = 10; count >= 1; count = count - 1) {
//   console.log(count);
// }
// for (count = 1; count <= 10; count = count + 1) {
//   console.log(count * 2);
// }
// for (count = 1; count <= 20; count++) {
//   if (count % 2 == 0) {
//     console.log(count);
//   }
// }
// for (i = 10; i >= 0; i--) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// for (i = 5; i >= 0; i--) {
//   console.log(i);
// }
// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }
// for (i = 1; i <= 20; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }
// for (i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// While loop
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// let odd = 1;
// while (odd <= 10) {
//   if (odd % 2 !== 0) {
//     console.log(odd);
//   }
//   odd++;
// }

// do while loop.
// let even = 1;
// do {
//   if (even % 2 == 0) {
//     console.log(even);
//   }
//   even++;
// } while (even <= 10);
// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// Document object model (DOM Manipulation)
// function changeword() {
//   document.getElementById("title").textContent = "Bye World";
// }
// two value add
// function submit() {
//   const num1 = Number(document.getElementById("num1").value);
//   const num2 = Number(document.getElementById("num2").value);
//   const result = document.getElementById("result");
//   const total = num1 + num2;
//   result.textContent = total;
// }

// Random number varum(0.0.......0.9)
// let a = Math.random();
// console.log(a);
// console.log(Math.floor(a * 10) + 1);

// Floor
// let b = Math.floor(1.99);
// console.log(b);
// let randomnumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomnumber);
