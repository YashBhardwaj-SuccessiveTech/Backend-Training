import { Request, Response, NextFunction } from "express";

export const throwerror = (req: Request, res: Response, next: NextFunction)=>{
    next(new Error("something went wrong"));
}