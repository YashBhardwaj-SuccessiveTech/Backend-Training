"use strict";
// Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, and division, respectively in math.js.
//  Utilize the lodash dependency for executing the aforementioned operations.
//  Export all the above methods to make them accessible in any file.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sub = sub;
exports.mult = mult;
exports.div = div;
// const lodash = require('lodash');
const lodash_1 = __importDefault(require("lodash"));
function add(n1, n2) {
    return lodash_1.default.add(n1, n2);
}
function sub(n1, n2) {
    return lodash_1.default.subtract(n1, n2);
}
function mult(n1, n2) {
    return lodash_1.default.multiply(n1, n2);
}
function div(n1, n2) {
    if (n2 == 0) {
        throw new Error("divisor can't be zero");
    }
    return lodash_1.default.divide(n1, n2);
}
// module.exports = {add, mult, div, sub};
