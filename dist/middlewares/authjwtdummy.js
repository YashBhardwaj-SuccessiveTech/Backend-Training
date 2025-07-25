"use strict";
// Develop an authentication middleware using a JWT dummy token.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretkey = process.env.SECRET_KEY;
const products = [
    { id: 1, name: "tablet", price: 2500 },
    { id: 2, name: "phone", price: 2600 },
];
class Login {
    login(req, res, next) {
        try {
            let token = jsonwebtoken_1.default.sign({ data: products }, secretkey);
            console.log(token);
            res.status(201).json({ token });
            next();
        }
        catch (err) {
            console.log(err);
            res.json(err);
        }
    }
}
exports.default = Login;
