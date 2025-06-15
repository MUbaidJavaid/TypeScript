"use strict";
class StaticInClass {
    static staticProperty = "I am a static property";
    nameWithStatic;
    constructor(name) {
        this.nameWithStatic = name;
    }
    static staticMethod() {
        return "I am a static method   " + this.staticProperty;
    }
    static staticMethodWithParams(param) {
        return `Static method called with param: ${param}`;
    }
}
var staticInClass = new StaticInClass("Static Example");
// Example usage
console.log(StaticInClass.staticProperty); // I am a static property
console.log(StaticInClass.staticMethod()); // I am a static method
console.log(StaticInClass.staticMethodWithParams("Hello")); // Static method called with param: Hello
// Exporting the class
