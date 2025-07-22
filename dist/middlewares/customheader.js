"use strict";
// 12.Build middleware that adds a custom header to every response.
//  Allow the header value to be configurable.
Object.defineProperty(exports, "__esModule", { value: true });
exports.addcustomHeader = addcustomHeader;
function addcustomHeader(headername, headervalue) {
    return (req, res, next) => {
        res.setHeader(headername, headervalue);
        next();
    };
}
