import express from "express";
const router = express.Router();

// import controllers and middlewares
import customLogger from "../../middlewares/customware.js";
import mockApi from "../../middlewares/dataseeding.js";
import generatemockData from "../../middlewares/postSeededData.js";
import login from "../../middlewares/authjwtdummy.js";
import validation from "../../middlewares/validation.js";
import { middleware1, middleware2, middleware3 } from "../../middlewares/middchaining.js";
import { errMiddleWare} from "../../middlewares/errhandling.js";
import { addcustomHeader } from "../../middlewares/customheader.js";
import { limiter } from "../../middlewares/ratemiddleware.js";


// api routes

router.get("/reqdetails",customLogger,(req,res)=>{
    res.status(201).send("logged details successfully");
});

router.get("/dataseeding",mockApi(20), (req,res)=>{
    res.status(201).json(req.users);
});

router.post("/postdataseeding",generatemockData(), (req,res)=>{
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

export default router;

