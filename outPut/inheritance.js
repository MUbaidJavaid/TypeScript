"use strict";
class Authe {
    login(name, password) {
        if (name && password) {
            return (`User ${name} logged in successfully.`);
        }
        else {
            return "Login failed. Please provide valid credentials.";
        }
    }
}
class Student extends Authe {
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
class Teacher extends Authe {
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
