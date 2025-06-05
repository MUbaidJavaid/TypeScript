"use strict";
function functionParams(param1, param2, param3 = true) {
    return `Param1: ${param1}, Param2: ${param2}, Param3: ${param3}`;
}
// The functionParams function takes three parameters: a string, a number, and an optional boolean.
// It returns a formatted string that includes the values of these parameters.
function mainparam() {
    const result = functionParams("Hello", 42);
    console.log(result); // Output: Param1: Hello, Param2: 42, Param3: true
    const resultWithOptional = functionParams("World", 100, false);
    console.log(resultWithOptional); // Output: Param1: World, Param2: 100, Param3: false
}
