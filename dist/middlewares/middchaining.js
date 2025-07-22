"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware1 = middleware1;
exports.middleware2 = middleware2;
exports.middleware3 = middleware3;
function middleware1(req, res, next) {
    console.log("First middleware called");
    next();
}
function middleware2(req, res, next) {
    console.log("Second middleware called");
    next();
}
function middleware3(req, res, next) {
    console.log("Third middleware called");
    next();
}
