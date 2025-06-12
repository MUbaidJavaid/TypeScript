declare class Authe {
    login(name: string, password: string): string;
}
declare class Student extends Authe {
    private name;
    private age;
    constructor(name: string, age: number);
    getDetails(): string;
}
declare class Teacher extends Authe {
    private name;
    private subject;
    constructor(name: string, subject: string);
    getDetails(): string;
}
declare var student: Student;
declare var teacher: Teacher;
