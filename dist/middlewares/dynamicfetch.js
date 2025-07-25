"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validationrules_1 = __importDefault(require("../config/validationrules"));
class DynamicValidate {
    dynamicvalidate(req, res, next) {
        const routeRules = validationrules_1.default[req.path];
        if (!routeRules)
            return next();
        for (const field in routeRules) {
            const rule = routeRules[field];
            const value = req.body[field];
            if (rule.required && (value === undefined || value === null || value === "")) {
                return res.status(400).json({ message: `${field} is required` });
            }
            if (rule.type && typeof value !== rule.type) {
                return res.status(400).json({ message: `${field} must be a ${rule.type}` });
            }
            if (rule.minLength && value.length < rule.minLength) {
                return res.status(400).json({ message: `${field} must be at least ${rule.minLength} characters long` });
            }
        }
        next();
    }
}
exports.default = DynamicValidate;
