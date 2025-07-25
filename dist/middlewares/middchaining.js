"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Middlechain {
    constructor() {
        this.middleware1 = (req, res, next) => {
            console.log("First middleware called");
            next();
        };
        this.middleware2 = (req, res, next) => {
            console.log("Second middleware called");
            next();
        };
        this.middleware3 = (req, res, next) => {
            console.log("Third middleware called");
            next();
        };
    }
}
exports.default = Middlechain;
