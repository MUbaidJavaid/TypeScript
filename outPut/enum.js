"use strict";
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["MANAGER"] = "manager";
    UserRole["DEVELOPER"] = "developer";
    UserRole["USER"] = "user";
    UserRole["GUEST"] = "guest";
})(UserRole || (UserRole = {}));
let userRole = UserRole.ADMIN;
let userRole2 = UserRole.MANAGER;
let userRole3 = UserRole.DEVELOPER;
let userRole4 = UserRole.USER;
let userRole5 = UserRole.GUEST;
// Example usage of the enum
console.log(userRole); // Output: 'admin'
console.log(userRole2); // Output: 'manager'
console.log(userRole3); // Output: 'developer' 
console.log(userRole4); // Output: 'user'
console.log(userRole5); // Output: 'guest'
// You can also use the enum in a switch statement
// switch (userRole) {
//     case UserRole.ADMIN:
//         console.log("User is an admin.");
//         break;
//     case UserRole.MANAGER:
//         console.log("User is a manager.");
//         break;
//     case UserRole.DEVELOPER:
//         console.log("User is a developer.");
//         break;
//     case UserRole.USER:
//         console.log("User is a regular user.");
//         break;
//     case UserRole.GUEST:
//         console.log("User is a guest.");
//         break;
//     default:
//         console.log("Unknown user role.");
//         break;
// }
// You can also iterate over the enum values
// for (const role in UserRole) {
//     if (isNaN(Number(role))) { // Check to avoid numeric keys
//         console.log(`Role: ${role}, Value: ${UserRole[role]}`);
//     }
// }
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
    Color[Color["YELLOW"] = 3] = "YELLOW";
    Color[Color["ORANGE"] = 4] = "ORANGE";
    Color[Color["PURPLE"] = 5] = "PURPLE";
    Color[Color["BLACK"] = 6] = "BLACK";
    Color[Color["WHITE"] = 7] = "WHITE";
    Color[Color["PINK"] = 8] = "PINK";
    Color[Color["GRAY"] = 9] = "GRAY";
    Color[Color["BROWN"] = 10] = "BROWN";
    Color[Color["CYAN"] = 11] = "CYAN";
    Color[Color["MAGENTA"] = 12] = "MAGENTA";
})(Color || (Color = {}));
var color1 = Color.RED;
var color2 = Color.GREEN;
var color3 = Color.BLUE;
var color4 = Color.YELLOW;
var color5 = Color.ORANGE;
var color6 = Color.PURPLE;
var color7 = Color.BLACK;
var color8 = Color.WHITE;
var color9 = Color.PINK;
var color10 = Color.GRAY;
var color11 = Color.BROWN;
var color12 = Color.CYAN;
var color13 = Color.MAGENTA;
// Example usage of the Color enum
console.log(color1); // Output: 0
console.log(color2); // Output: 1
console.log(color3); // Output: 2
console.log(color4); // Output: 3
console.log(color5); // Output: 4
console.log(color6); // Output: 5
console.log(color7); // Output: 6
console.log(color8); // Output: 7
console.log(color9); // Output: 8
console.log(color10); // Output: 9
console.log(color11); // Output: 10
console.log(color12); // Output: 11
console.log(color13); // Output: 12
