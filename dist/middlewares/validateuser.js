"use strict";
// assign -4
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationmidd = void 0;
const Users_1 = require("../utils/Users");
const validationmidd = (req, res, next) => {
    const { error, value } = Users_1.userSchema.validate(req.body, { abortEarly: false });
    if (error) {
        console.log(error);
        return res.send(error.details);
    }
    next();
};
exports.validationmidd = validationmidd;
