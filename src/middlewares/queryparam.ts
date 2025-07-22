// 5.Create middleware to validate that specific query parameters in a route are numeric. 
// If a non-numeric value is provided, respond with an appropriate error message.

import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const querySchema = Joi.number().required();

export const validateNumericQuery = (req: Request, res: Response, next: NextFunction) => {
  const { error } = querySchema.validate(req.params.id);

  if (error) {
    console.log(error);
    return res.send(error.details);
  }

  next();
};

