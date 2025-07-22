import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export default function validation(req,res,next){
    const header = req.headers.authorization;
    const secret_key = process.env.SECRET_KEY;
    if(!header){
        res.status(401).json({
            message: "not authorized"
        })
    }
    const token = header.split(' ')[1];
    const data = jwt.verify(token, secret_key);
    console.log(data);
    next();
    // res.status(200).json({data});
}

