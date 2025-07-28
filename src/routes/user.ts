import express from "express";
const userRouter = express.Router();

// Controllers import 
import {login , signup } from "../controllers/auth";
import {auth, isStudent, isAdmin} from "../middlewares/Auth"

// route for testing
userRouter.get("/test", auth, (req,res)=>{
    res.json({
        success:true,
        message:"welcome to protected test page"
    });
});


// Atuthentication Routes
userRouter.get("/student", auth, isStudent, (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to protected Student page"
    })
});

userRouter.get("/admin", auth, isAdmin, (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to protected Student page"
    })
});

// routes
userRouter.get("/",(req,res)=>{
    res.status(200).send({
        status:true,
        message:"server working fine",
    })
})
userRouter.post("/login", login);
userRouter.post("/register", signup);

export default userRouter;
