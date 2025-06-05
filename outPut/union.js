"use strict";
var unionOfvariable = "union";
// The variable unionOfvariable can hold a string, number, null, an empty array, an empty object, or undefined.
unionOfvariable = 42; // Now it holds a number
unionOfvariable = null; // Now it holds null
unionOfvariable = []; // Now it holds an empty array
unionOfvariable = {}; // Now it holds an empty object
unionOfvariable = undefined; // Now it holds undefined
// The unionOfvariable can change its type dynamically, demonstrating the flexibility of union types in TypeScript.
// The unionOfvariable can be used in various scenarios where multiple types are needed.
function unionFunction(param) {
    if (typeof param === "string") {
        return `String value: ${param}`;
    }
    else if (typeof param === "number") {
        return `Number value: ${param}`;
    }
    else if (typeof param === "boolean") {
        return `Boolean value: ${param}`;
    }
    return "Unknown type";
}
// The unionFunction takes a parameter that can be a string, number, or boolean.
function mainUnion() {
    const resultString = unionFunction("Hello");
    console.log(resultString); // Output: String value: Hello
    const resultNumber = unionFunction(42);
    console.log(resultNumber); // Output: Number value: 42
    const resultBoolean = unionFunction(true);
    console.log(resultBoolean); // Output: Boolean value: true
}
// The mainUnion function demonstrates the usage of unionFunction with different types of parameters.
mainUnion();
// The output will show how the function handles each type of input.
// Output:
// String value: Hello
// Number value: 42
// Boolean value: true
// The unionFunction can be used to handle different types of data in a flexible way.
// It allows for a single function to process multiple types, making the code more versatile and reusable.
// This is particularly useful in scenarios where the type of data may vary, such as user input or API responses.
var unionArray = ["Hello", 42, "World"];
// The unionArray can hold both strings and numbers.
unionArray.push(100); // Adding a number
unionArray.push("TypeScript"); // Adding a string
console.log(unionArray); // Output: ["Hello", 42, "World", 100, "TypeScript"]
// The unionArray demonstrates how to create an array that can hold multiple types.
function unionArrayFunction(arr) {
    return arr.map(item => {
        if (typeof item === "string") {
            return `String: ${item}`;
        }
        else if (typeof item === "number") {
            return `Number: ${item}`;
        }
        return "Unknown type";
    }).join(", ");
}
// The unionArrayFunction takes an array of strings and numbers and returns a formatted string.
function mainUnionArray() {
    const result = unionArrayFunction(unionArray);
    console.log(result); // Output: String: Hello, Number: 42, String: World, Number: 100, String: TypeScript
}
// The mainUnionArray function demonstrates the usage of unionArrayFunction with an array containing both strings and numbers.
mainUnionArray();
// The output will show how the function processes each item in the array.
// Output:
// String: Hello, Number: 42, String: World, Number: 100, String: TypeScript
// The unionArrayFunction can be used to handle arrays with mixed types, allowing for flexible data processing.
// It can be useful in scenarios where data may come from different sources or formats, such as user input or API responses.
// This approach allows for more dynamic and adaptable code, making it easier to work with various data types in TypeScript.
var unionObject = {
    name: "Alice",
    age: 30
};
// The unionObject can hold either an object with name and age or an object with title and year.
unionObject = {
    title: "TypeScript Guide",
    year: 2023
};
// Now it holds an object with title and year
function unionObjectFunction(obj) {
    if ("name" in obj && "age" in obj) {
        return `Name: ${obj.name}, Age: ${obj.age}`;
    }
    else if ("title" in obj && "year" in obj) {
        return `Title: ${obj.title}, Year: ${obj.year}`;
    }
    return "Unknown object type";
}
// The unionObjectFunction takes an object that can be either of the two types defined above.
function mainUnionObject() {
    const result1 = unionObjectFunction({ name: "Bob", age: 25 });
    console.log(result1); // Output: Name: Bob, Age: 25
    const result2 = unionObjectFunction({ title: "JavaScript Basics", year: 2022 });
    console.log(result2); // Output: Title: JavaScript Basics, Year: 2022
}
// The mainUnionObject function demonstrates the usage of unionObjectFunction with different object types.
mainUnionObject();
// The output will show how the function handles each type of object.
// Output:
// Name: Bob, Age: 25
// Title: JavaScript Basics, Year: 2022
// The unionObjectFunction can be used to process objects with different structures, allowing for flexible data handling.
// This is particularly useful in scenarios where the data structure may vary, such as API responses or user input.
// It allows for a single function to handle multiple object types, making the code more versatile and reusable.
