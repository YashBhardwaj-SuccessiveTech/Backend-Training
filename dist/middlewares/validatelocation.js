"use strict";
// 6.Implement middleware to validate the geographic location of the client.
// If the request is not coming from an expected region, respond with an error.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const allowedCountries = ["IN"];
class Geolocation {
    constructor() {
        this.geolocmidd = (req, res, next) => {
            var _a;
            // Get ip
            const ip = ((_a = req.headers["x-forwarded-for"]) === null || _a === void 0 ? void 0 : _a.split(",")[0]) ||
                req.socket.remoteAddress ||
                "";
            console.log(ip);
            if (ip === "::1") {
                console.log(`Access granted`);
                return next();
            }
            const geo = geoip_lite_1.default.lookup(ip);
            if (!geo || !allowedCountries.includes(geo.country)) {
                return res.status(403).json({
                    message: "Access denied. Your region is not allowed.",
                    success: false,
                });
            }
            console.log(`Access granted from ${geo.country}`);
            next();
        };
    }
}
exports.default = Geolocation;
