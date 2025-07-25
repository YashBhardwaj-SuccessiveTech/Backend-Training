"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
// const createError = require('http-errors');
const app = (0, express_1.default)();
app.use(express_1.default.json());
// 401 Bad Request
app.post("/badrequest", (req, res, next) => {
    if (!req.body.email) {
        return next((0, http_errors_1.default)(400, 'Email is required'));
    }
    res.send("valid request");
});
// 401 - Unauthorized
app.get('/unauthorized', (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return next((0, http_errors_1.default)(401, "No token provided"));
    }
});
// 403 - Forbidden
app.get('forbidden', (req, res, next) => {
    const user = { role: "user" };
    if (user.role !== 'admin') {
        return next((0, http_errors_1.default)(403, 'Access Denied'));
    }
    res.send('Access permitted');
});
// 409 - Conflict
app.post("/conflict", (req, res, next) => {
    const existmail = "example@am.com";
    if (req.body.email == existmail) {
        return next((0, http_errors_1.default)(409, "email already exist"));
    }
    res.send('Registered');
});
// 500 - Internal server Error
app.get('/crash', (req, res, next) => {
    throw new Error('simulated server crash');
});
// 404 - Route not found
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404, 'Route not found'));
});
// Centralized Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error"
    });
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
