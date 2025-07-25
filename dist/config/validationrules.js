"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationRules = {
    "/register": {
        username: { required: true, type: "string" },
        password: { required: true, type: "string", minLength: 8 }
    },
    "/login": {
        username: { required: true, type: "string" },
        password: { required: true, type: "string" }
    }
};
exports.default = validationRules;
