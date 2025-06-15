"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassInterfaceImplementation = exports.ClassInterface = void 0;
class ClassInterface {
    className;
    methods;
    constructor(className, methods) {
        this.className = className;
        this.methods = methods;
    }
    getClassName() {
        return this.className;
    }
    getMethods() {
        return this.methods;
    }
    addMethod(method) {
        this.methods.push(method);
    }
    removeMethod(method) {
        this.methods = this.methods.filter(m => m !== method);
    }
}
exports.ClassInterface = ClassInterface;
exports.ClassInterfaceImplementation = ClassInterface;
// Example usage
const myClass = new ClassInterface("MyClass", ["method1", "method2"]);
console.log(myClass.getClassName()); // MyClass
console.log(myClass.getMethods()); // ["method1", "method2"]
myClass.addMethod("method3");
console.log(myClass.getMethods()); // ["method1", "method2", "method3"]
myClass.removeMethod("method1");
console.log(myClass.getMethods()); // ["method2", "method3"]
exports.default = ClassInterface;
// This code defines a TypeScript interface and class that implements it, allowing for dynamic management of class names and methods.
// The interface `ClassInterface` defines methods for getting the class name, retrieving methods, adding a method, and removing a method.   
// The class `ClassInterface` implements this interface, providing concrete functionality for managing a class's name and its methods.
// The example usage demonstrates how to create an instance of the class, retrieve its name and methods, add a new method, and remove an existing method.
// The code is structured to allow for easy extension and modification, making it suitable for various applications where class management is needed.
// The code is structured to allow for easy extension and modification, making it suitable for various applications where class management is needed.
// The code is structured to allow for easy extension and modification, making it suitable for various applications where class management is needed.
