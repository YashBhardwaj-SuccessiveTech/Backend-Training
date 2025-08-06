import { Request, Response, NextFunction } from "express";
import validationRules from "../config/validationrules";


class DynamicValidate{
  public dynamicvalidate(req: Request, res: Response, next: NextFunction) {
    const routeRules = validationRules[req.path];
    if (!routeRules) return next();

    for (const field in routeRules) {
      const rule = routeRules[field];
      const value = req.body[field];

      if (rule.required && (value === undefined || value === null || value === "")) {
        return res.status(400).json({ message: `${field} is required` });
      }

      if (rule.type && typeof value !== rule.type) {
        return res.status(400).json({ message: `${field} must be a ${rule.type}` });
      }

      if (rule.minLength && value.length < rule.minLength) {
        return res.status(400).json({ message: `${field} must be at least ${rule.minLength} characters long` });
      }
    }

    next();
  }
}

export default DynamicValidate;
