import { Request, Response, NextFunction } from "express";

export interface commoninterface{
    (req: Request, res: Response, next: NextFunction):void;
}

