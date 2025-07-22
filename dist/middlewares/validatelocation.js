"use strict";
// 6.Implement middleware to validate the geographic location of the client.
// If the request is not coming from an expected region, respond with an error.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatelocation = void 0;
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const request_ip_1 = __importDefault(require("request-ip"));
const allowedCountries = ["IN"];
const validatelocation = (req, res, next) => {
    const ip = request_ip_1.default.getClientIp(req);
    const geo = geoip_lite_1.default.lookup(ip || "0.0.0.0");
    console.log(geo);
    if (!geo) {
        return res
            .status(403)
            .json({ error: "Could not determine your location." });
    }
    // If user's country is not in the allowed list
    if (!allowedCountries.includes(geo.country || "")) {
        return res
            .status(403)
            .json({ error: `Access denied from region: ${geo.country}` });
    }
    // Location is allowed, proceed to the next middleware or route
    next();
};
exports.validatelocation = validatelocation;
