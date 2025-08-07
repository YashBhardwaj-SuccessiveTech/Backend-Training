import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";
import { config } from '../config/configuration';

class validationn{
    public validation(req:Request,res:Response,next:NextFunction){
        try{
            const header = req.headers.authorization;
            const secret_key = config.SECRET_KEY;
            if(!header){
                res.status(401).json({
                    message: "not authorized"
                });
                return;
            }
            const token = header.split(' ')[1];
            const data = jwt.verify(token, secret_key);
            console.log(data);
            next();
        }catch(err){
            console.log(err);
            res.json(err);
        }
    }
}

export default  validationn;
