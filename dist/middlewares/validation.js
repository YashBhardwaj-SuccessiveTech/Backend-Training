"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validation;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function validation(req, res, next) {
    const header = req.headers.authorization;
    const secret_key = process.env.SECRET_KEY;
    if (!header) {
        res.status(401).json({
            message: "not authorized"
        });
        return;
    }
    const token = header.split(' ')[1];
    const data = jsonwebtoken_1.default.verify(token, secret_key);
    console.log(data);
    next();
    // res.status(200).json({data});
}
