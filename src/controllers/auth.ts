import { Request, Response, NextFunction } from "express";
import User from "../models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
require("dotenv").config();

class createEntry{
    public signup = async (req: Request, res:Response)=>{
        // Fetch details
        const {name, password , email, role } = req.body;

        // check if already exist
        try{
            const existUser = await User.findOne({email});
            if(existUser){
                return res.status(400).send({
                    success: false,
                    message:"User already exist",
                });
            }

            // secure password
            let hashedpassword;
            try{
                hashedpassword = await bcrypt.hash(password,10);
            }
            catch(err){
                return res.status(500).json({
                    success: false,
                    message: "Error in hashing Passwords",
                });
            }
            
            // Create entry for User
            const user = await User.create({
                name, email, password:hashedpassword, role
            });

            return res.status(200).json({
                success:true,
                message:'User Created Successfully'
            });

        }catch(err){
            console.error(err);
            return res.status(500).send({
                success: false,
                message:"User cannot be registered, please try again later",
            });
            
        }
    }


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
                res.status(401).json({
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

                existuser = existuser.toObject();
                existuser.token = token;
                existuser.password = undefined;
                console.log(existuser);

                const options = {
                    expiresIn : new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                    httpOnly : true,
                }

                res.cookie("token", token, options).status(200).json({
                    success:true,
                    token,
                    existuser,
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
            })

        }
    }

}

export default createEntry;