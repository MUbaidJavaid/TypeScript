"use strict";
let useDataTypeGuards = 'string';
useDataTypeGuards = 42; // This is valid
if (typeof useDataTypeGuards === 'string') {
    console.log('useDataTypeGuards is a string');
}
else if (typeof useDataTypeGuards === 'number') {
    console.log('useDataTypeGuards is a number');
}
else if (typeof useDataTypeGuards === 'boolean') {
    console.log('useDataTypeGuards is a boolean');
}
else if (useDataTypeGuards === null) {
    console.log('useDataTypeGuards is null');
}
// Example of a type guard function
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isNull(value) {
    return value === null;
}
if (isString(useDataTypeGuards)) {
    console.log('useDataTypeGuards is a string');
}
else if (isNumber(useDataTypeGuards)) {
    console.log('useDataTypeGuards is a number');
}
else if (isBoolean(useDataTypeGuards)) {
    console.log('useDataTypeGuards is a boolean');
}
else if (isNull(useDataTypeGuards)) {
    console.log('useDataTypeGuards is null');
}
function processData(data) {
    if (isString(data)) {
        console.log(`Processing string: ${data}`);
    }
    else if (isNumber(data)) {
        console.log(`Processing number: ${data}`);
    }
    else if (isBoolean(data)) {
        console.log(`Processing boolean: ${data}`);
    }
    else if (isNull(data)) {
        console.log('Processing null value');
    }
    else {
        console.log('Unknown data type');
    }
}
// Example usage
processData('Hello, world!');
processData(42);
processData(true);
processData(null);
function processUser(user) {
    if (isString(user.name)) {
        console.log(`User name: ${user.name}`);
    }
    else {
        console.log('User name is not a string');
    }
    if (isNumber(user.age)) {
        console.log(`User age: ${user.age}`);
    }
    else {
        console.log('User age is not a number');
    }
    if (isBoolean(user.isActive)) {
        console.log(`User active status: ${user.isActive}`);
    }
    else {
        console.log('User active status is not a boolean');
    }
}
// Example usage
const userTypeGuard = {
    name: 'Alice',
    age: 30,
    isActive: true
};
processUser(userTypeGuard);
function executeCallback(callback) {
    if (typeof callback === 'function') {
        callback('Callback executed successfully!');
    }
    else {
        console.log('Provided callback is not a function');
    }
}
// Example usage
const myCallback = (message) => {
    console.log(message);
};
executeCallback(myCallback);
function processStringArray(arr) {
    if (Array.isArray(arr) && arr.every(isString)) {
        console.log('Processing string array:', arr);
    }
    else {
        console.log('Provided array is not a valid string array');
    }
}
// Example usage
const myStringArray = ['apple', 'banana', 'cherry'];
processStringArray(myStringArray);
function processStringNumberTuple(tuple) {
    if (Array.isArray(tuple) && tuple.length === 2 && isString(tuple[0]) && isNumber(tuple[1])) {
        console.log(`Processing tuple: ${tuple[0]}, ${tuple[1]}`);
    }
    else {
        console.log('Provided tuple is not a valid StringNumberTuple');
    }
}
// Example usage
const myTuple = ['example', 123];
processStringNumberTuple(myTuple);
function processGeneric(data) {
    if (isString(data)) {
        console.log(`Processing generic string: ${data}`);
    }
    else if (isNumber(data)) {
        console.log(`Processing generic number: ${data}`);
    }
    else if (isBoolean(data)) {
        console.log(`Processing generic boolean: ${data}`);
    }
    else if (isNull(data)) {
        console.log('Processing generic null value');
    }
    else {
        console.log('Unknown generic data type');
    }
}
// Example usage
processGeneric('Generic string');
processGeneric(42);
processGeneric(true);
processGeneric(null);
//  Example of using type guards with a class type
class User {
    name;
    age;
    isActive;
    constructor(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
}
function processUserClass(user) {
    if (isString(user.name)) {
        console.log(`User name: ${user.name}`);
    }
    else {
        console.log('User name is not a string');
    }
    if (isNumber(user.age)) {
        console.log(`User age: ${user.age}`);
    }
    else {
        console.log('User age is not a number');
    }
    if (isBoolean(user.isActive)) {
        console.log(`User active status: ${user.isActive}`);
    }
    else {
        console.log('User active status is not a boolean');
    }
}
// Example usage
const userClass = new User('Bob', 25, true);
processUserClass(userClass);
// Example of using type guards with a union type in a class
class DataProcessor {
    process(data) {
        if (isString(data)) {
            console.log(`Processing string: ${data}`);
        }
        else if (isNumber(data)) {
            console.log(`Processing number: ${data}`);
        }
        else if (isBoolean(data)) {
            console.log(`Processing boolean: ${data}`);
        }
        else if (isNull(data)) {
            console.log('Processing null value');
        }
        else {
            console.log('Unknown data type');
        }
    }
}
// Example usage
const dataProcessor = new DataProcessor();
dataProcessor.process('Hello, world!');
dataProcessor.process(42);
dataProcessor.process(true);
dataProcessor.process(null);
function processShape(shape) {
    if (shape.kind === 'circle') {
        console.log(`Processing circle with radius: ${shape.radius}`);
    }
    else if (shape.kind === 'rectangle') {
        console.log(`Processing rectangle with width: ${shape.width} and height: ${shape.height}`);
    }
    else {
        console.log('Unknown shape type');
    }
}
// Example usage
const circle = { kind: 'circle', radius: 10 };
const rectangle = { kind: 'rectangle', width: 5, height: 10 };
processShape(circle);
processShape(rectangle);
function processMappedType(data) {
    if (isString(data)) {
        console.log(`Processing mapped string: ${data}`);
    }
    else if (isNumber(data)) {
        console.log(`Processing mapped number: ${data}`);
    }
    else if (isBoolean(data)) {
        console.log(`Processing mapped boolean: ${data}`);
    }
    else if (isNull(data)) {
        console.log('Processing mapped null value');
    }
    else {
        console.log('Unknown mapped data type');
    }
}
const mappedDataGuards = { key: 'value' };
processMappedType(mappedDataGuards);
function processConditionalType(data) {
    if (isString(data)) {
        console.log(`Processing conditional string: ${data}`);
    }
    else if (isNumber(data)) {
        console.log(`Processing conditional number: ${data}`);
    }
    else if (isBoolean(data)) {
        console.log(`Processing conditional boolean: ${data}`);
    }
    else if (isNull(data)) {
        console.log('Processing conditional null value');
    }
    else {
        console.log('Unknown conditional data type');
    }
}
// Example usage
processConditionalType('Conditional string');
processConditionalType(42);
processConditionalType(true);
processConditionalType(null);
function processAliasType(data) {
    if (isString(data)) {
        console.log(`Processing alias string: ${data}`);
    }
    else if (isNumber(data)) {
        console.log(`Processing alias number: ${data}`);
    }
    else if (isBoolean(data)) {
        console.log(`Processing alias boolean: ${data}`);
    }
    else if (isNull(data)) {
        console.log('Processing alias null value');
    }
    else {
        console.log('Unknown alias data type');
    }
}
// Example usage
processAliasType('Alias string');
processAliasType(42);
processAliasType(true);
processAliasType(null);
