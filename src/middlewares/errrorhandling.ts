// Incorporate the error handling middleware with the previously developed API.

import { Request, Response, NextFunction } from "express";

export const errorhandling= (err: Error, req: Request, res: Response, next: NextFunction)=>{
    console.error("Error Occured: ",err.message);

    return res.status(500).json({
        success:false,
        message: err.message || "Internal server error",
    });
};

