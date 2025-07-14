// In the project's root directory, generate an 'index.js' file to solicit two user inputs via commands. 
// Execute all operations specified in 'lib/math.js' according to the given commands.
//  The structure of your project would look something like this:

import path from "path";
import fs from "fs";


import { add, div, mult, sub } from "../src/lib/math";

const [ input1, input2 ] = process.argv.slice(2);

const n1= parseInt(input1);
const n2 = parseInt(input2);

const addition = add(n1, n2);
const subtraction = sub(n1, n2);
const multiplication = mult(n1, n2);
const division = div(n1, n2);

const csvHeader = "Operation,Num1,Num2,result\n";

const csvrows = [
    `Addition, ${n1},${n2},${addition}`,
    `Subtraction, ${n1},${n2},${subtraction}`,
    `Multiplication, ${n1},${n2},${multiplication}`,
    `Division, ${n1},${n2},${division}`
];

const csvContent = csvHeader + csvrows.join("\n");

const filepath = path.resolve("result.csv");

fs.writeFileSync(filepath, csvContent, "utf8");

console.log(`Results saved to ${filepath}`);

