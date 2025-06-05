"use strict";
var Null = null;
// Null = 10; // This will cause a TypeScript error because `null` can only hold the value `null`.
console.log("Null : " + typeof Null);
var Null2 = null;
console.log("Null2 : " + typeof Null2);
// Note: In TypeScript, `null` is a subtype of all types, meaning you can assign `null` to any variable.
// However, the `null` type itself is distinct and can only hold the value `null`.
var Undefined = undefined;
console.log("Undefined : " + typeof Undefined);
var Undefined2 = undefined;
console.log("Undefined2 : " + typeof Undefined2);
// Note: In TypeScript, `undefined` is also a subtype of all types, similar to `null`.
