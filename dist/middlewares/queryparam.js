"use strict";
// 5.Create middleware to validate that specific query parameters in a route are numeric. 
// If a non-numeric value is provided, respond with an appropriate error message.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const querySchema = joi_1.default.number().required();
class ValidateQuery {
    constructor() {
        this.validateNumericQuery = (req, res, next) => {
            const { error } = querySchema.validate(req.params.id);
            if (error) {
                console.log(error);
                return res.send(error.details);
            }
            next();
        };
    }
}
exports.default = ValidateQuery;
