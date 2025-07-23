import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Request, Response, NextFunction } from "express";


dotenv.config();

class validationn{
    public validation(req:Request,res:Response,next:NextFunction){
        const header = req.headers.authorization;
        const secret_key = process.env.SECRET_KEY as string;
        if(!header){
            res.status(401).json({
                message: "not authorized"
            })
            return;
        }
        const token = header.split(' ')[1];
        const data = jwt.verify(token, secret_key);
        console.log(data);
        next();
        // res.status(200).json({data});
    }
}

export default  validationn;