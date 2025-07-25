"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class customlog {
    constructor() {
        this.customLogger = (req, res, next) => {
            const timestamp = new Date().toLocaleTimeString();
            console.log(`Request Method: ${req.method}, Request url: ${req.url}, Request time: ${timestamp}`);
            next();
        };
    }
}
exports.default = customlog;
