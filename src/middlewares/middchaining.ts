import { Request, Response, NextFunction } from "express";


export function middleware1(req:Request, res:Response, next:NextFunction){
    console.log("First middleware called");
    next();
}

export function middleware2(req:Request, res:Response, next:NextFunction){
    console.log("Second middleware called");
    next();
}

export function middleware3(req:Request, res:Response, next:NextFunction){
    console.log("Third middleware called");
    next();
}

