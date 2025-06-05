"use strict";
var object = {
    name: "Alice",
    age: 30
};
// This is a simple object with properties name and age
// You can access properties like this: 
console.log(object.name); // "Alice"
console.log(object.age); // 30
var object2 = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};
var object3 = {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
    salary: undefined // This can be a string, number, or undefined
};
object3.salary = 50000; // Now salary is a number
object3.location = "New York"; // You can add new properties dynamically
object3.age = "31"; // You can also change the type of existing properties
console.log(object3);
