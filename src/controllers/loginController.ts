import { Request, Response} from "express";
import User from "../models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
require("dotenv").config();

class Login{
    public login = async (req: Request, res:Response)=>{
        const {email, password} = req.body;

        try{
            // check if both present 
            if(!email || !password){
                return res.status(401).send({
                    success: false,
                    message:"Give both email as well as passwords"
                })
            }

            // check if user exist or not 
            let existuser = await User.findOne({email});
            if(!existuser){
                return res.status(401).json({
                    success: false,
                    message:"User is not registered do signup"
                });
            }

            const payload = {
                email: existuser.email,
                id: existuser._id,
                role: existuser.role,
            }

            // verify password and generate a JWT token
            if(await bcrypt.compare(password, existuser.password)){
                // password match
                let token = jwt.sign(payload, process.env.SECRET_KEY as string, {expiresIn: "2h"});
                const user = await User.findById(existuser._id).select("-password");
                existuser.password = "";
                console.log(existuser);
                res.status(200).json({
                    success:true,
                    token,
                    payload,
                    message:"User logged in Successfully",
                });
            }
            else{
                // password do not match
                return res.status(403).json({
                    success:false,
                    message:"Password Incorrect"
                });
            }
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message:"Login failure",
            });
        }
    }

}

export default Login;