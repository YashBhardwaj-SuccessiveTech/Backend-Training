// 6.Create a route that expects certain parameters in the request. Implement validation checks and throw a validation error if the checks fail. 
// Handle validation errors gracefully and send a JSON response with error details.

import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { commoninterface } from "../Interfaces/userInterface";

class ValidationCheck{
    public validationcheck: commoninterface = (req: Request, res: Response, next: NextFunction)=>{
        const {username, email , password} = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!username || typeof username !== "string"){
            return next(createError(422, "username is required and must be string"));
        }

        if(!password || password.length<6){
            return next(createError(422, "Invalid password"));
        }

        if(!email || !emailRegex.test(email)){
            return next(createError(422, "A valid email is required"));
        }
        next();
    }
}

export default ValidationCheck;
