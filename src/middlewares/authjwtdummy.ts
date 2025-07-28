// Develop an authentication middleware using a JWT dummy token.

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "../config/configuration";

interface Products{
  id:number,
  name:string,
  price:number
}

const secretkey = config.SECRET_KEY;

const products: Products[] = [
  { id: 1, name: "tablet", price: 2500 },
  { id: 2, name: "phone", price: 2600 },
];

class Login{
  public login(req: Request, res: Response, next: NextFunction) {
    try{
      let token = jwt.sign({ data: products }, secretkey);
      console.log(token);
      res.status(201).json({token});
      next();
    }catch(err){
      console.log(err);
      res.json(err);
    }
  }
}

export default Login;