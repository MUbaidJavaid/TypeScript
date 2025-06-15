"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authe = void 0;
class Authe {
    login(name, password) {
        if (name && password) {
            return (`User ${name} logged in successfully.`);
        }
        else {
            return "Login failed. Please provide valid credentials.";
        }
    }
}
exports.Authe = Authe;
