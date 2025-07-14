// Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, and division, respectively in math.js.
//  Utilize the lodash dependency for executing the aforementioned operations.
//  Export all the above methods to make them accessible in any file.
// const lodash = require('lodash');
import lodash from "lodash";
export function add(n1, n2) {
    return lodash.add(n1, n2);
}
export function sub(n1, n2) {
    return lodash.subtract(n1, n2);
}
export function mult(n1, n2) {
    return lodash.multiply(n1, n2);
}
export function div(n1, n2) {
    if (n2 == 0) {
        throw new Error("divisor can't be zero");
    }
    return lodash.divide(n1, n2);
}
// module.exports = {add, mult, div, sub};
