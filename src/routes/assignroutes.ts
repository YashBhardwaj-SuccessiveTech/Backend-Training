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
import Middlechain from "../middlewares/middchaining";
import Errmiddware from "../middlewares/errhandling";
import AddCustomHeader from "../middlewares/customheader";
import Ratelimit from "../middlewares/ratemiddleware";
import ValidationMidd from "../middlewares/validateuser";
import Formvalidate from "../middlewares/validateform";
import ValidateQuery from "../middlewares/queryparam";
import Geolocation from "../middlewares/validatelocation";
import ErrorHandling from "../middlewares/errrorhandling";
import ThrowError from "../middlewares/throwerror";
import ValidationCheck from "../middlewares/validationcheck";
import mockApii from "../middlewares/dataseeding";
import generateMock from "../middlewares/postSeededData";
import customlog from "../middlewares/customware";
import Login from "../middlewares/authjwtdummy";
import validationn from "../middlewares/validation";
import DynamicValidate from "../middlewares/dynamicfetch";


// Making Objects of Classes

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


// api routes

router.get("/reqdetails",custlog.customLogger,(req:Request,res:Response)=>{
    res.status(200).send("logged details successfully");
});

router.get("/dataseeding",mockdata.mockApi(20), (req: CustomRequest,res: Response)=>{
    res.status(200).json(req.users);
});

router.post("/postdataseeding",generatedata.generatemockData(), (req: CustomRequest,res: Response)=>{
    res.status(201).json(req.users);
});

router.get("/login",loginn.login,(req,res)=>{
    res.status(200).json("token generated successfully");
});

router.get("/validate",validate.validation,(req,res)=>{
    res.status(200).json("validation successful");
});

router.get("/error", (req: Request, res: Response) => {
  throw new Error("This is a test error!");
});

router.use(globalerrmidd.errMiddleWare);

router.get("/chaining",midchain.middleware1, midchain.middleware2, midchain.middleware3,(req: Request,res: Response)=>{
    res.status(200).json("Middleware Chaining Done");
});

router.get("/custom",addcusHeader.addcustomHeader("customHeader","Yash"), (req,res)=>{
    res.send("hello");
})

router.get("/ratelimited", ratelimiter.limiter, (req, res) => {
  res.status(200).json({ message: "You are within the rate limit." });
});

// Assignment-4 Routes Begin

router.get("/validation",validMidd.validationmidd,(req, res)=>{
  res.status(200).send("Successfully validate");
});

router.get("/validateform", formvalidate.validateform,(req, res)=>{
  res.status(200).send("Form Successfully Validated");
});

router.get("/validateparams/:id",validateQuery.validateNumericQuery,(req: Request, res: Response)=>{
  res.status(200).send("Numeric validation of Query Done");
});

router.get("/validatelocation",geoloc.geolocmidd,(req,res)=>{
  res.send("Location validated successfully");
});

router.get("/dynamicfetch",dynamicvalid.dynamicvalidate,(req:Request, res: Response)=>{
  res.send("dynamically fetched the validation Rules");
});

router.post("/register",dynamicvalid.dynamicvalidate,(req:Request, res: Response)=>{
  res.send("dynamically fetched the validation Rules");
});

// Assignment-5 Routes Begin

router.get("/errorhandling",throwerr.throwerror,(req:Request, res:Response)=>{
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

router.use(errorHandle.errorhandling);


export default router;

