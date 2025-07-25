"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// import controllers and middlewares
const middchaining_1 = __importDefault(require("../middlewares/middchaining"));
const errhandling_1 = __importDefault(require("../middlewares/errhandling"));
const customheader_1 = __importDefault(require("../middlewares/customheader"));
const ratemiddleware_1 = __importDefault(require("../middlewares/ratemiddleware"));
const validateuser_1 = __importDefault(require("../middlewares/validateuser"));
const validateform_1 = __importDefault(require("../middlewares/validateform"));
const queryparam_1 = __importDefault(require("../middlewares/queryparam"));
const validatelocation_1 = __importDefault(require("../middlewares/validatelocation"));
const errrorhandling_1 = __importDefault(require("../middlewares/errrorhandling"));
const throwerror_1 = __importDefault(require("../middlewares/throwerror"));
const validationcheck_1 = __importDefault(require("../middlewares/validationcheck"));
const dataseeding_1 = __importDefault(require("../middlewares/dataseeding"));
const postSeededData_1 = __importDefault(require("../middlewares/postSeededData"));
const customware_1 = __importDefault(require("../middlewares/customware"));
const authjwtdummy_1 = __importDefault(require("../middlewares/authjwtdummy"));
const validation_1 = __importDefault(require("../middlewares/validation"));
const dynamicfetch_1 = __importDefault(require("../middlewares/dynamicfetch"));
// Making Classes
const custlog = new customware_1.default();
const mockdata = new dataseeding_1.default();
const generatedata = new postSeededData_1.default();
const loginn = new authjwtdummy_1.default();
const validate = new validation_1.default();
const globalerrmidd = new errhandling_1.default();
const midchain = new middchaining_1.default();
const addcusHeader = new customheader_1.default();
const ratelimiter = new ratemiddleware_1.default();
const validMidd = new validateuser_1.default();
const formvalidate = new validateform_1.default();
const validateQuery = new queryparam_1.default();
const geoloc = new validatelocation_1.default();
const dynamicvalid = new dynamicfetch_1.default();
const throwerr = new throwerror_1.default();
const ValidCheck = new validationcheck_1.default();
const errorHandle = new errrorhandling_1.default();
// api routes
router.get("/reqdetails", custlog.customLogger, (req, res) => {
    res.status(201).send("logged details successfully");
});
router.get("/dataseeding", mockdata.mockApi(20), (req, res) => {
    res.status(201).json(req.users);
});
router.post("/postdataseeding", generatedata.generatemockData(), (req, res) => {
    res.status(201).json(req.users);
});
router.get("/login", loginn.login, (req, res) => {
    res.status(201).json("token generated successfully");
});
router.get("/validate", validate.validation, (req, res) => {
    res.status(201).json("validation successful");
});
router.get("/error", (req, res) => {
    throw new Error("This is a test error!");
});
router.use(globalerrmidd.errMiddleWare);
router.get("/chaining", midchain.middleware1, midchain.middleware2, midchain.middleware3, (req, res) => {
    res.status(201).json("Middleware Chaining Done");
});
router.get("/custom", addcusHeader.addcustomHeader("customHeader", "Yash"), (req, res) => {
    res.send("hello");
});
router.get("/ratelimited", ratelimiter.limiter, (req, res) => {
    res.status(200).json({ message: "You are within the rate limit." });
});
// Assignment-4 Routes Begin
router.get("/validation", validMidd.validationmidd, (req, res) => {
    res.status(201).send("Successfully validate");
});
router.get("/validateform", formvalidate.validateform, (req, res) => {
    res.status(201).send("Form Successfully Validated");
});
router.get("/validateparams/:id", validateQuery.validateNumericQuery, (req, res) => {
    res.status(201).send("Numeric validation of Query Done");
});
router.get("/validatelocation", geoloc.geolocmidd, (req, res) => {
    res.send("Location validated successfully");
});
router.get("/dynamicfetch", dynamicvalid.dynamicvalidate, (req, res) => {
    res.send("dynamically fetched the validation Rules");
});
router.post("/register", dynamicvalid.dynamicvalidate, (req, res) => {
    res.send("dynamically fetched the validation Rules");
});
// Assignment-5 Routes Begin
router.get("/errorhandling", throwerr.throwerror, (req, res) => {
    res.send("error Handling done");
});
router.get("/errdemo", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error("Intentional async error"));
            }, 500);
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}));
router.get("/validationcheck", ValidCheck.validationcheck, (req, res) => {
    res.status(200).json({
        success: true,
        message: "user registered Successfully"
    });
});
router.use(errorHandle.errorhandling);
exports.default = router;
