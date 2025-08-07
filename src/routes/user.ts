import express from "express";
const userRouter = express.Router();

// Controllers import 
import registration from "../controllers/signup";
import authentication from "../middlewares/authenticatemiddleware"
import Login from "../controllers/loginController";

const checkauthentication = new authentication();
const register = new registration();
const login = new Login();


// Atuthentication Routes
userRouter.get("/student", checkauthentication.authenticate, checkauthentication.isStudent, (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to protected Student page"
    });
});

userRouter.get("/admin", checkauthentication.authenticate, checkauthentication.isAdmin, (req, res)=>{
    res.json({
        success:true,
        message:"Welcome to protected Admin page"
    })
});

userRouter.post("/login", login.login);
userRouter.post("/register", register.signup);

export default userRouter;
 