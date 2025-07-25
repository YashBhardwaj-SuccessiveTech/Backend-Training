import { faker } from "@faker-js/faker";
import { Request, Response, NextFunction } from "express";
import { commoninterface } from "../Interfaces/userInterface";

interface CustomRequest extends Request {
  users?: Array<{
    id: string;
    name: string;
    email: string;
  }>;
}

class generateMock{
  public generatemockData(): commoninterface {
    return (req:CustomRequest, res:Response, next:NextFunction) => {
      try{
        let count = parseInt(req.body.count);

        if (!count || isNaN(count) || count<0) {
          return res.status(400).json({ message: "Invalid Count" });
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
      }catch(err){
        console.error(err);
        next(err);
      }
    };
  }
}

export default generateMock;