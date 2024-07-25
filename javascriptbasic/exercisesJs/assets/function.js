// simple function method
function add() {
  return 10 + 20;
}
console.log(add());
// large line function method
// function add1() {
//   let no1 = 20;
//   let no2 = 20;
//   restul = no1 + no2;

//   return restul;
// }
// let re = add1();
// console.log(re);

// object and function
// let empolyee = {
//   name: "tamil",
//   age: 21,
//   greetings: function () {
//     console.log("hello");
//   },
// };
// console.log(empolyee.name);
// console.log(empolyee.greetings());

// factory function
// function dispaly() {
//   let details = {
//     name: "tamil",
//     age: 23,
//     greetings() {
//       console.log(this.age);
//     },
//   };
//   return details;
// }
// let re = display();
// re.greet();
// console.log(display("tamil").greet());

console.log("================");

// Function creating new objects
// without use of 'new' keyword
function createRobot(name) {
  return {
    name: name,
    talk: function () {
      console.log("My name is " + name + ", the robot.");
    },
  };
}

//Create a robot with name Chitti
const robo1 = createRobot("Chitti");

robo1.talk();

// Create a robot with name Chitti 2.O Upgraded
const robo2 = createRobot("Chitti 2.O Upgraded");

robo2.talk();

console.log("===================");

let Person = function (name, age) {
  // creating person object
  let person = {};

  // parameters as keys to this object
  person.name = name;
  person.age = age;

  // function to greet
  person.greeting = function () {
    return (
      "Hello I am " + person.name + ". I am " + person.age + " years old. "
    );
  };
  return person;
};

let person1 = Person("Abhishek", 20);
console.log(person1.greeting());

let person2 = Person("Raj", 25);
console.log(person2.greeting());
