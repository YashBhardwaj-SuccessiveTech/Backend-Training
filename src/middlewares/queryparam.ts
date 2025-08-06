// 5.Create middleware to validate that specific query parameters in a route are numeric. 
// If a non-numeric value is provided, respond with an appropriate error message.

import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { commoninterface } from "../Interfaces/userInterface";

const querySchema = Joi.number().required();

class ValidateQuery{
  public validateNumericQuery: commoninterface = (req: Request, res: Response, next: NextFunction) => {
    const { error } = querySchema.validate(req.params.id);

    if (error) {
      console.log(error);
      return res.send(error.details);
    }

    next();
  };
}

export default ValidateQuery;

