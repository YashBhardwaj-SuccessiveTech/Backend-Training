// 12.Build middleware that adds a custom header to every response.
//  Allow the header value to be configurable.

import { Request, Response, NextFunction } from "express";

export function addcustomHeader(headername: string, headervalue: string){
    return(req: Request,res: Response,next: NextFunction)=>{
        res.setHeader(headername, headervalue);
        next();
    }
}
