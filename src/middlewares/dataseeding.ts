import { Request, Response, NextFunction } from "express";
import { faker } from "@faker-js/faker";


interface CustomRequest extends Request {
  users?: Array<{
    id: string;
    name: string;
    email: string;
  }>;
}

export default function mockApi(count: number) {
  return (req: CustomRequest, res: Response, next:NextFunction) => {
    try {
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
    } catch (err) {
      console.log(err);
    }
  };
}
