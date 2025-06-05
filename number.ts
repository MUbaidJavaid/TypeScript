var num1: number = 10;
var num2: number = 20;


var Totale: number = num1 + num2;
console.log("Totale : " + Totale);

// octal, hexadecimal, and binary numbers defined in TypeScript
// Note: Octal numbers are not recommended in modern JavaScript/TypeScript.
var oct: number = 0o100001;
var hex: number = 0x100001;
var bin: number = 0b100001;

var num: number = 100;
var num3 = '200';

// var Totale2: number = num + parseInt(num3);
// var Totale2: number = num + Number(num3);
var Totale2: number = num + +num3;
console.log("Totale2 : " + Totale2);


var data : number | string = 100;
data = "Hello World";
console.log("Data : " + data);
