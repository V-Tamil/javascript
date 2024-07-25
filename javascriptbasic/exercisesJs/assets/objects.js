const person = {
  name: "tamil",
};
console.log(person);
person.age = 23;
console.log(person);
person.details = function () {
  console.log("hello");
};
console.log(person);
person.name = "rabee";
console.log(person);
delete person.age;
console.log(person);

let details = {
  name: "tamil",
  age: 23,
  qul: "MCA",
};
for (let detail in details) console.log(details[detail]);
for (let detail of Object.keys(details)) console.log(detail);
for (let detail of Object.values(details)) console.log(detail);

for (let detail of Object.entries(details)) console.log(detail);
