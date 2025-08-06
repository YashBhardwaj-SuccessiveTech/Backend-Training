// 12.Build middleware that adds a custom header to every response.
//  Allow the header value to be configurable.

import { Request, Response, NextFunction } from "express";
import { commoninterface } from "../Interfaces/userInterface";

class AddCustomHeader{
    public addcustomHeader(headername: string, headervalue: string):commoninterface{
        return(req: Request,res: Response,next: NextFunction)=>{
            res.setHeader(headername, headervalue);
            next();
        }
    }
}

export default AddCustomHeader;
