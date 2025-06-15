"use strict";
class GetSet {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
}
var getSet = new GetSet("John", 30);
console.log(getSet.name); // John
console.log(getSet.age); // 30
getSet.name = "Jane";
console.log(getSet.name); // Jane
getSet.age = 25;
console.log(getSet.age); // 25 
