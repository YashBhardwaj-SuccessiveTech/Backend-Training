"use strict";
// Incorporate the error handling middleware with the previously developed API.
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandling {
    constructor() {
        this.errorhandling = (err, req, res, next) => {
            console.error("Error Occured: ", err.message);
            return res.status(500).json({
                success: false,
                message: err.message || "Internal server error",
            });
        };
    }
}
exports.default = ErrorHandling;
