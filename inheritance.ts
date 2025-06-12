console.log("Inheritance Example");
// This code demonstrates inheritance in TypeScript with a base class and two derived classes.



class Authe {
 login(name: string, password: string) {
   if(name && password) {
     return (`User ${name} logged in successfully.`);
   }else {
        return "Login failed. Please provide valid credentials.";
    }

 }

}

class Student extends Authe {
    constructor(private name: string, private age: number) {
    super();
    }
    
    getDetails(): string {
    return `Student Name: ${this.name}, Age: ${this.age}`;
    }
    
}

class Teacher extends Authe {
    constructor(private name: string, private subject: string) {
        super();
    }
    
    getDetails(): string {
        return `Teacher Name: ${this.name}, Subject: ${this.subject}`;
    }
}

var student = new Student("Alice", 20);
var teacher = new Teacher("Bob", "Mathematics");

console.log(student.getDetails());
console.log(teacher.getDetails());
console.log(student.login("Alice", "password123"));
console.log(teacher.login("Bob", "password456"));