// Develop an authentication middleware using a JWT dummy token.

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretkey = process.env.SECRET_KEY;

const products = [
  { id: 1, name: "tablet", price: 2500 },
  { id: 2, name: "phone", price: 2600 },
];

export default function login(req, res, next) {
  let token = jwt.sign({ data: products }, secretkey);
  console.log(token);
  // res.status(201).json({token});
  next();
}


