// Develop an authentication middleware using a JWT dummy token.

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

interface Products{
  id:number,
  name:string,
  price:number
}

dotenv.config();

const secretkey = process.env.SECRET_KEY as string;

const products: Products[] = [
  { id: 1, name: "tablet", price: 2500 },
  { id: 2, name: "phone", price: 2600 },
];

export default function login(req: Request, res: Response, next: NextFunction) {
  let token = jwt.sign({ data: products }, secretkey);
  console.log(token);
  // res.status(201).json({token});
  next();
}


