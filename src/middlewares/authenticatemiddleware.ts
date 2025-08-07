// auth , isStudent, isAdmin
import jwt from "jsonwebtoken";
import { Request,Response, NextFunction } from "express";
import { config } from "../config/configuration";

interface UserPayload {
  id: string;
  email: string;
  role: "Student" | "Admin" | "Visitor";
}

interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

class authentication{
    public  authenticate = (req:AuthenticatedRequest , res: Response, next: NextFunction)=>{
        try{
            // extract jwt token
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return res.status(401).json({
                    success: false,
                    message: "Token missing or invalid format"
                });
            }

            const token = authHeader.split(" ")[1];
            if(!token){
                return res.status(201).json({
                    success: false,
                    message:"Token missing"
                });   
            }

            // verify the token
            try{
                const payload = jwt.verify(token, config.SECRET_KEY as string);
                console.log(payload);
                req.user = payload as UserPayload;
            }
            catch(error){
                return res.status(401).json({
                    success:false,
                    message:"token is invalid"
                });
            }

            next();
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:"something went wrong, while  verifying the token"
            })
        }
    }


    public isStudent = (req: AuthenticatedRequest,res:Response,next:NextFunction)=>{
        try{
            if(req.user?.role !== "Student"){
                return res.status(401).json({
                    success:false,
                    message:"this is protected route for students"
                });
            }
            next();
        }catch(error){
            return res.status(500).json({
                success:false,
                message:"User role is not matching"
            })
        }
    }


    public isAdmin = (req: AuthenticatedRequest, res:Response, next:NextFunction)=>{
        try{
            if(req.user?.role !== "Admin"){
                return res.status(401).json({
                    success:false,
                    message:"This is protected route for Admin"
                });
            }
            next();
        }catch(error){
            return res.status(500).json({
                success:false,
                message:"User role not matching"
            })
        }
    }

}


export default authentication;
