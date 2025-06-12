enum UserRole {
    ADMIN = 'admin',
    MANAGER = 'manager',
    DEVELOPER = 'developer',
    USER = 'user',
    GUEST = 'guest',
}

let userRole: UserRole = UserRole.ADMIN;
let userRole2: UserRole = UserRole.MANAGER;
let userRole3: UserRole = UserRole.DEVELOPER;
let userRole4: UserRole = UserRole.USER;
let userRole5: UserRole = UserRole.GUEST;

// Example usage of the enum
console.log(userRole);   // Output: 'admin'
console.log(userRole2);  // Output: 'manager'
console.log(userRole3);  // Output: 'developer' 
console.log(userRole4);  // Output: 'user'
console.log(userRole5);  // Output: 'guest'
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

enum Color {
    RED  ,
    GREEN ,
    BLUE ,
    YELLOW ,
    ORANGE ,
    PURPLE,
    BLACK ,
    WHITE ,
    PINK ,
    GRAY ,
    BROWN ,
    CYAN ,
    MAGENTA 
}

var color1: Color = Color.RED;
var color2: Color = Color.GREEN;
var color3: Color = Color.BLUE;
var color4: Color = Color.YELLOW;
var color5: Color = Color.ORANGE;
var color6: Color = Color.PURPLE;
var color7: Color = Color.BLACK;
var color8: Color = Color.WHITE;
var color9: Color = Color.PINK;
var color10: Color = Color.GRAY;
var color11: Color = Color.BROWN;
var color12: Color = Color.CYAN;
var color13: Color = Color.MAGENTA;
// Example usage of the Color enum
console.log(color1);   // Output: 0
console.log(color2);   // Output: 1
console.log(color3);   // Output: 2
console.log(color4);   // Output: 3
console.log(color5);   // Output: 4
console.log(color6);   // Output: 5
console.log(color7);   // Output: 6
console.log(color8);   // Output: 7
console.log(color9);   // Output: 8
console.log(color10);  // Output: 9
console.log(color11);  // Output: 10
console.log(color12);  // Output: 11
console.log(color13);  // Output: 12


