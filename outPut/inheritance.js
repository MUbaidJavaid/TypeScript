"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Inheritance Example");
// This code demonstrates inheritance in TypeScript with a base class and two derived classes.
const authe_1 = require("./modules/authe");
class Student extends authe_1.Authe {
    name;
    age;
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Student Name: ${this.name}, Age: ${this.age}`;
    }
}
class Teacher extends authe_1.Authe {
    name;
    subject;
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
    }
    getDetails() {
        return `Teacher Name: ${this.name}, Subject: ${this.subject}`;
    }
}
var student = new Student("Alice", 20);
var teacher = new Teacher("Bob", "Mathematics");
console.log(student.getDetails());
console.log(teacher.getDetails());
console.log(student.login("Alice", "password123"));
console.log(teacher.login("Bob", "password456"));
