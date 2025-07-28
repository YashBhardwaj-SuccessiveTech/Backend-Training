// 9. Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.
import { Request, Response, NextFunction } from "express";
import { commoninterface } from "../Interfaces/userInterface";

class customlog{
  public customLogger: commoninterface = (req:Request, res: Response, next:NextFunction) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`Request Method: ${req.method}, Request url: ${req.url}, Request time: ${timestamp}`);
    next();
  };
}
export default customlog;

