"use strict";
var sym = Symbol("sym");
var sym2 = Symbol("sym2");
function f() {
    return sym;
}
function f2() {
    return sym2;
}
var id = Symbol("id");
function f3() {
    return id;
}
var obj = {
    [sym]: "value1",
    [sym2]: "value2",
    [id]: "value3"
};
