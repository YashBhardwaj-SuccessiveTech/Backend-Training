"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// import controllers and middlewares
const customware_js_1 = __importDefault(require("../middlewares/customware.js"));
const dataseeding_js_1 = __importDefault(require("../middlewares/dataseeding.js"));
const postSeededData_js_1 = __importDefault(require("../middlewares/postSeededData.js"));
const authjwtdummy_js_1 = __importDefault(require("../middlewares/authjwtdummy.js"));
const validation_js_1 = __importDefault(require("../middlewares/validation.js"));
const middchaining_js_1 = require("../middlewares/middchaining.js");
const errhandling_js_1 = require("../middlewares/errhandling.js");
const customheader_js_1 = require("../middlewares/customheader.js");
const ratemiddleware_js_1 = require("../middlewares/ratemiddleware.js");
const validateuser_js_1 = require("../middlewares/validateuser.js");
const validateform_js_1 = require("../middlewares/validateform.js");
const queryparam_js_1 = require("../middlewares/queryparam.js");
const validatelocation_js_1 = require("../middlewares/validatelocation.js");
// api routes
router.get("/reqdetails", customware_js_1.default, (req, res) => {
    res.status(201).send("logged details successfully");
});
router.get("/dataseeding", (0, dataseeding_js_1.default)(20), (req, res) => {
    res.status(201).json(req.users);
});
router.post("/postdataseeding", (0, postSeededData_js_1.default)(), (req, res) => {
    res.status(201).json(req.users);
});
router.get("/login", authjwtdummy_js_1.default, (req, res) => {
    res.status(201).json("token generated successfully");
});
router.get("/validate", validation_js_1.default, (req, res) => {
    res.status(201).json("validation successful");
});
router.get("/error", (req, res) => {
    throw new Error("This is a test error!");
});
router.use(errhandling_js_1.errMiddleWare);
router.get("/chaining", middchaining_js_1.middleware1, middchaining_js_1.middleware2, middchaining_js_1.middleware3, (req, res) => {
    res.status(201).json("Middleware Chaining Done");
});
router.get("/custom", (0, customheader_js_1.addcustomHeader)("customHeader", "Yash"), (req, res) => {
    res.send("hello");
});
router.get("/ratelimited", ratemiddleware_js_1.limiter, (req, res) => {
    res.status(200).json({ message: "You are within the rate limit." });
});
// Assignment-4 Routes Begin
router.get("/validation", validateuser_js_1.validationmidd, (req, res) => {
    res.status(201).send("Successfully validate");
});
router.get("/validateform", validateform_js_1.validateform, (req, res) => {
    res.status(201).send("Form Successfully Validated");
});
router.get("/validateparams/:id", queryparam_js_1.validateNumericQuery, (req, res) => {
    res.status(201).send("Numeric validation of Query Done");
});
router.get("/validatelocation", validatelocation_js_1.validatelocation, (req, res) => {
    res.send("Location validated successfully");
});
exports.default = router;
