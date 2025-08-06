// 10. Implement an error-handling middleware that captures errors
// thrown in the route handlers and sends an appropriate error response.
import { Request, Response, NextFunction } from "express";

class Errmiddware{
  public errMiddleWare = (err: Error, req: Request, res: Response, next:NextFunction) => {
    console.error("Error is:", err.stack);
    res.status(500).json({ message: "Internal server error" });
  };
}

export default Errmiddware;
