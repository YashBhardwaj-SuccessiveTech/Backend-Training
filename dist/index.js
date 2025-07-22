"use strict";
// In the project's root directory, generate an 'index.js' file to solicit two user inputs via commands. 
// Execute all operations specified in 'lib/math.js' according to the given commands.
//  The structure of your project would look something like this:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const math_1 = require("./lib/math");
const [input1, input2] = process.argv.slice(2);
const n1 = parseInt(input1);
const n2 = parseInt(input2);
const addition = (0, math_1.add)(n1, n2);
const subtraction = (0, math_1.sub)(n1, n2);
const multiplication = (0, math_1.mult)(n1, n2);
const division = (0, math_1.div)(n1, n2);
const csvHeader = "Operation,Num1,Num2,result\n";
const csvrows = [
    `Addition, ${n1},${n2},${addition}`,
    `Subtraction, ${n1},${n2},${subtraction}`,
    `Multiplication, ${n1},${n2},${multiplication}`,
    `Division, ${n1},${n2},${division}`
];
const csvContent = csvHeader + csvrows.join("\n");
const filepath = path_1.default.resolve("result.csv");
fs_1.default.writeFileSync(filepath, csvContent, "utf8");
console.log(`Results saved to ${filepath}`);
