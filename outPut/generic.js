"use strict";
function Generic(data) {
    return data;
}
// Example usage
const stringData = Generic("Hello, World!");
const numberData = Generic(42);
const booleanData = Generic(true);
const objectData = Generic({ name: "Alice", age: 30 });
const arrayData = Generic([1, 2, 3, 4, 5]);
const tupleData = Generic([1, "Alice", true]);
const nullData = Generic(null);
