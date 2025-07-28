import express from "express";
const userRouter = express.Router();

// Controllers import 
import createEntry from "../controllers/auth";
import authentication from "../middlewares/Auth"

const authobj = new authentication();
const create = new createEntry();

// route for testing
userRouter.get("/test", authobj.auth, (req,res)=>{
    res.json({
        success:true,
        message:"welcome to protected test page"
    });
});


// Atuthentication Routes
userRouter.get("/student", authobj.auth, authobj.isStudent, (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to protected Student page"
    })
});

userRouter.get("/admin", authobj.auth, authobj.isAdmin, (req, res)=>{
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
});

userRouter.post("/login", create.login);
userRouter.post("/register", create.signup);

export default userRouter;
 