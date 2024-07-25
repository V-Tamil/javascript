const person = {
  name: "siva",
  age: 30,
  hobbies: ["game", "coding"],
  address: {
    city: "kulathur",
  },
};

console.log("Original Object", person);

// console.log(person.name);

// person["name"] = "tamil";
// console.log(person["name"]);

// delete person.hobbies;

// console.log(person.address.city);

// console.log(Object.keys(person));

// console.log(Object.values(person));

Object.assign(person, { name: "srk" });
console.log(person);
