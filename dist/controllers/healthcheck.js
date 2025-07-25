"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthCheck {
    checkServerHealth(req, res) {
        res.status(200).json({
            success: true,
            message: "Server is healthy ",
            timestamp: new Date().toISOString(),
        });
    }
}
exports.default = HealthCheck;
