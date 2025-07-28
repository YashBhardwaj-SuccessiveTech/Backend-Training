import { Request, Response, NextFunction } from "express";
import { faker } from "@faker-js/faker";
import { commoninterface } from "../Interfaces/userInterface";


interface CustomRequest extends Request {
  users?: Array<{
    id: string;
    name: string;
    email: string;
  }>;
}

class mockApii{
  public mockApi(count: number): commoninterface {
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
        console.error(err);
        next(err);
      }
    };
  }
}

export default mockApii;