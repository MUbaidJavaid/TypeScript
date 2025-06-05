"use strict";
var tuple = ["Alice", 30];
// var tuple: [name: string, age: number] = ["Alice", 30, "Engineer"];//wrong
tuple.push("Engineer"); // This will work, but it's not type-safe
var tuple2 = ["Alice", 30, "Engineer", "Developer"];
// This allows for additional string elements after the first two
var tuple3 = ["Alice", 30]; // This is also valid
