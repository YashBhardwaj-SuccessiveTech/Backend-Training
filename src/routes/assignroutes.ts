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
import customLogger from "../middlewares/customware.js";
import mockApi from "../middlewares/dataseeding.js";
import generatemockData from "../middlewares/postSeededData.js";
import login from "../middlewares/authjwtdummy.js";
import validation from "../middlewares/validation.js";
import { middleware1, middleware2, middleware3 } from "../middlewares/middchaining.js";
import { errMiddleWare} from "../middlewares/errhandling.js";
import { addcustomHeader } from "../middlewares/customheader.js";
import { limiter } from "../middlewares/ratemiddleware.js";
import { validationmidd } from "../middlewares/validateuser.js";
import { validateform } from "../middlewares/validateform.js";
import { validateNumericQuery } from "../middlewares/queryparam.js";
import { geolocmidd } from "../middlewares/validatelocation.js";
import dynamicvalidate from "../middlewares/dynamicfetch.js";
import { errorhandling } from "../middlewares/errrorhandling.js";
import { throwerror } from "../middlewares/throwerror.js";
import { validationcheck } from "../middlewares/validationcheck.js";


// api routes

router.get("/reqdetails",customLogger,(req,res)=>{
    res.status(201).send("logged details successfully");
});

router.get("/dataseeding",mockApi(20), (req: CustomRequest,res: Response)=>{
    res.status(201).json(req.users);
});

router.post("/postdataseeding",generatemockData(), (req: CustomRequest,res: Response)=>{
    res.status(201).json(req.users);
})

router.get("/login",login,(req,res)=>{
    res.status(201).json("token generated successfully");
});

router.get("/validate",validation,(req,res)=>{
    res.status(201).json("validation successful");
});

router.get("/error", (req, res) => {
  throw new Error("This is a test error!");
});

router.use(errMiddleWare);

router.get("/chaining",middleware1, middleware2, middleware3,(req,res)=>{
    res.status(201).json("Middleware Chaining Done");
});

router.get("/custom",addcustomHeader("customHeader","Yash"), (req,res)=>{
    res.send("hello");
})

router.get("/ratelimited", limiter, (req, res) => {
  res.status(200).json({ message: "You are within the rate limit." });
});

// Assignment-4 Routes Begin

router.get("/validation",validationmidd,(req, res)=>{
  res.status(201).send("Successfully validate");
});

router.get("/validateform", validateform,(req, res)=>{
  res.status(201).send("Form Successfully Validated");
});

router.get("/validateparams/:id",validateNumericQuery,(req: Request, res: Response)=>{
  res.status(201).send("Numeric validation of Query Done");
});

router.get("/validatelocation",geolocmidd,(req,res)=>{
  res.send("Location validated successfully");
});

router.get("/dynamicfetch",dynamicvalidate,(req:Request, res: Response)=>{
  res.send("dynamically fetched the validation Rules");
});

// Assignment-5 Routes Begin

router.get("/errorhandling",throwerror,(req, res)=>{
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

router.get("/validationcheck",validationcheck, (req: Request, res: Response)=>{
  res.status(200).json({
    success: true,
    message: "user registered Successfully"
  })
})


router.use(errorhandling);


export default router;

