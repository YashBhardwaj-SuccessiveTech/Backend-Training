"use strict";
// 6.Create a route that expects certain parameters in the request. Implement validation checks and throw a validation error if the checks fail. 
// Handle validation errors gracefully and send a JSON response with error details.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
class ValidationCheck {
    constructor() {
        this.validationcheck = (req, res, next) => {
            const { username, email, password } = req.body;
            if (!username || typeof username !== "string") {
                return next((0, http_errors_1.default)(422, "username is required and must be string"));
            }
            if (!password || password.length < 6) {
                return next((0, http_errors_1.default)(422, "Invalid password"));
            }
            if (!email || !email.includes("@")) {
                return next((0, http_errors_1.default)(422, "A valid email is required"));
            }
            next();
        };
    }
}
exports.default = ValidationCheck;
