"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThrowError {
    constructor() {
        this.throwerror = (req, res, next) => {
            next(new Error("something went wrong"));
        };
    }
}
exports.default = ThrowError;
