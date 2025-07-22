import { faker } from "@faker-js/faker";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  users?: Array<{
    id: string;
    name: string;
    email: string;
  }>;
}

export default function generatemockData() {
  return (req:CustomRequest, res:Response, next:NextFunction) => {
    let count = parseInt(req.body.count);

    if (!count) {
      res.status(401).json({ message: "Invalid Request" });
    }

    const user = [];
    for (let i = 0; i < count; i++) {
      user.push({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
      });
    }
    req.users = user;
    next();
  };
}

