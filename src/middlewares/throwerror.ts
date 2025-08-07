import { Request, Response, NextFunction } from "express";
import { commoninterface } from "../Interfaces/userInterface";

class ThrowError{
    public throwerror: commoninterface = (req: Request, res: Response, next: NextFunction)=>{
        next(new Error("something went wrong"));
    }
}

export default ThrowError;
