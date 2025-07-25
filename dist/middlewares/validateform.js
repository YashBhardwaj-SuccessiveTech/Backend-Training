"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const formSchema = joi_1.default.object({
    username: joi_1.default.string().alphanum().min(3).max(10).required(),
    email: joi_1.default.string().email().required(),
    age: joi_1.default.number().required(),
    password: joi_1.default.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
class Formvalidate {
    constructor() {
        this.validateform = (req, res, next) => {
            const { error, value } = formSchema.validate(req.body, { abortEarly: false });
            if (error) {
                console.log(error);
                return res.send(error.details);
            }
            next();
        };
    }
}
exports.default = Formvalidate;
