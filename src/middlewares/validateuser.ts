// assign -4

// Incorporate the validation middleware with the previously developed API.

import { Request, Response, NextFunction } from "express"
import { userSchema } from "../utils/Users"

export const validationmidd = (req: Request, res: Response, next: NextFunction)=>{
    const {error, value} = userSchema.validate(req.body,{abortEarly:false});
    if(error){
        console.log(error);
        return res.send(error.details);
    }
    next();
}