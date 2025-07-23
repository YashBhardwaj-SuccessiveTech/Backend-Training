import express, { NextFunction } from "express";
import { Request,Response } from "express";
const router = express.Router();

interface CustomRequest extends Request {
  users?: Array<{
    id: string;
    name: string;
    email: string;
  }>;
}


// import controllers and middlewares
import Middlechain from "../middlewares/middchaining.js";
import Errmiddware from "../middlewares/errhandling.js";
import AddCustomHeader from "../middlewares/customheader.js";
import Ratelimit from "../middlewares/ratemiddleware.js";
import ValidationMidd from "../middlewares/validateuser.js";
import Formvalidate from "../middlewares/validateform.js";
import ValidateQuery from "../middlewares/queryparam.js";
import Geolocation from "../middlewares/validatelocation.js";
import ErrorHandling from "../middlewares/errrorhandling.js";
import ThrowError from "../middlewares/throwerror.js";
import ValidationCheck from "../middlewares/validationcheck.js";
import mockApii from "../middlewares/dataseeding.js";
import generateMock from "../middlewares/postSeededData.js";
import customlog from "../middlewares/customware.js";
import Login from "../middlewares/authjwtdummy.js";
import validationn from "../middlewares/validation.js";
import DynamicValidate from "../middlewares/dynamicfetch.js";
import HealthCheck from "../controllers/healthcheck.js";


// Making Classes

const custlog = new customlog();
const mockdata = new mockApii();
const generatedata = new generateMock();
const loginn = new Login();
const validate = new validationn();
const globalerrmidd = new Errmiddware();
const midchain = new Middlechain();
const addcusHeader = new AddCustomHeader();
const ratelimiter = new Ratelimit();
const validMidd = new ValidationMidd();
const formvalidate = new Formvalidate();
const validateQuery = new ValidateQuery();
const geoloc = new Geolocation();
const dynamicvalid = new DynamicValidate();
const throwerr = new ThrowError();
const ValidCheck = new ValidationCheck();
const errorHandle = new ErrorHandling();
const healthcheck = new HealthCheck();



// api routes

router.get("/reqdetails",custlog.customLogger,(req,res)=>{
    res.status(201).send("logged details successfully");
});

router.get("/dataseeding",mockdata.mockApi(20), (req: CustomRequest,res: Response)=>{
    res.status(201).json(req.users);
});

router.post("/postdataseeding",generatedata.generatemockData(), (req: CustomRequest,res: Response)=>{
    res.status(201).json(req.users);
});

router.get("/login",loginn.login,(req,res)=>{
    res.status(201).json("token generated successfully");
});

router.get("/validate",validate.validation,(req,res)=>{
    res.status(201).json("validation successful");
});

router.get("/error", (req: Request, res: Response) => {
  throw new Error("This is a test error!");
});

router.use(globalerrmidd.errMiddleWare);

router.get("/chaining",midchain.middleware1, midchain.middleware2, midchain.middleware3,(req: Request,res: Response)=>{
    res.status(201).json("Middleware Chaining Done");
});

router.get("/custom",addcusHeader.addcustomHeader("customHeader","Yash"), (req,res)=>{
    res.send("hello");
})

router.get("/ratelimited", ratelimiter.limiter, (req, res) => {
  res.status(200).json({ message: "You are within the rate limit." });
});

// Assignment-4 Routes Begin

router.get("/validation",validMidd.validationmidd,(req, res)=>{
  res.status(201).send("Successfully validate");
});

router.get("/validateform", formvalidate.validateform,(req, res)=>{
  res.status(201).send("Form Successfully Validated");
});

router.get("/validateparams/:id",validateQuery.validateNumericQuery,(req: Request, res: Response)=>{
  res.status(201).send("Numeric validation of Query Done");
});

router.get("/validatelocation",geoloc.geolocmidd,(req,res)=>{
  res.send("Location validated successfully");
});

router.get("/dynamicfetch",dynamicvalid.dynamicvalidate,(req:Request, res: Response)=>{
  res.send("dynamically fetched the validation Rules");
});

// Assignment-5 Routes Begin

router.get("/errorhandling",throwerr.throwerror,(req, res)=>{
  res.send("error Handling done");
});


router.get("/errdemo", async (req: Request, res: Response, next:NextFunction) => {
  try {
    await new Promise((_,reject)=>{
      setTimeout(()=>{
     reject(new Error("Intentional async error"));
      }, 500)
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/validationcheck",ValidCheck.validationcheck, (req: Request, res: Response)=>{
  res.status(200).json({
    success: true,
    message: "user registered Successfully"
  })
});

router.get("/health",healthcheck.checkServerHealth);



router.use(errorHandle.errorhandling);


export default router;

