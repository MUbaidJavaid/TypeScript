"use strict";
var any = 1;
any = "string";
any = true;
any = {};
any = [];
any = function () {
    console.log("This is a function");
};
console.log("Any type variable: " + any);
// Note: Using 'any' type is generally discouraged in TypeScript as it defeats the purpose of type safety.
var unknownVar = 1;
unknownVar = "string";
unknownVar = true;
unknownVar = {};
unknownVar = [];
unknownVar = function () {
    console.log("This is a function");
};
console.log("Unknown type variable: " + unknownVar);
// Note: 'unknown' is safer than 'any' as it requires type checking before use.
