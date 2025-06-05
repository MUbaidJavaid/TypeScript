"use strict";
var num1 = 10;
var num2 = 20;
var Totale = num1 + num2;
console.log("Totale : " + Totale);
// octal, hexadecimal, and binary numbers defined in TypeScript
// Note: Octal numbers are not recommended in modern JavaScript/TypeScript.
var oct = 0o100001;
var hex = 0x100001;
var bin = 0b100001;
var num = 100;
var num3 = '200';
// var Totale2: number = num + parseInt(num3);
// var Totale2: number = num + Number(num3);
var Totale2 = num + +num3;
console.log("Totale2 : " + Totale2);
var data = 100;
data = "Hello World";
console.log("Data : " + data);
