"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Errmiddware {
    constructor() {
        this.errMiddleWare = (err, req, res, next) => {
            console.error("Error is:", err.stack);
            res.status(500).json({ message: "Internal server error" });
        };
    }
}
exports.default = Errmiddware;
