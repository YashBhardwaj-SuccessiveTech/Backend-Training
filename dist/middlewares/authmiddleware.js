"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
const secretkey = "Yash";
const user = { id: 1, name: "Yash", age: 25, password: "Yash@1234" };
app.get("/login", (req, res) => {
    let token = jsonwebtoken_1.default.sign(user, secretkey);
    console.log(token);
    res.status(201).json({ token });
});
app.get("/dashboard", (req, res) => {
    const header = req.headers.authorization;
    if (!header) {
        res.status(400).json({
            message: "invalid header"
        });
        return;
    }
    const token = header.split(' ')[1];
    const data = jsonwebtoken_1.default.verify(token, secretkey);
    console.log(data);
    res.status(201).json({ data });
});
app.listen(8080, () => {
    console.log("server is listening on port 8080");
});
