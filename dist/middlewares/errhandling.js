"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errMiddleWare = void 0;
const errMiddleWare = (err, req, res, next) => {
    console.error("Error is:", err.stack);
    res.status(500).json({ message: "Internal server error" });
};
exports.errMiddleWare = errMiddleWare;
