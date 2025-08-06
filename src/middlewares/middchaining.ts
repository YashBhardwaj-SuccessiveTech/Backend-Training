import { Request, Response, NextFunction } from "express";
import { commoninterface } from "../Interfaces/userInterface";

class Middlechain{
    public middleware1:commoninterface= (req:Request, res:Response, next:NextFunction)=>{
        console.log("First middleware called");
        next();
    }

    public middleware2:commoninterface=(req:Request, res:Response, next:NextFunction)=>{
        console.log("Second middleware called");
        next();
    }

    public middleware3:commoninterface=(req:Request, res:Response, next:NextFunction)=>{
        console.log("Third middleware called");
        next();
    }
}

export default Middlechain;
