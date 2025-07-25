import express from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../config/configuration';

const app = express();

const secretkey = config.SECRET_KEY;
const port = config.PORT;

const user = {id:1, name:"Yash", age:25, password:"Yash@1234"}

app.get("/login",(req,res)=>{
    let token = jwt.sign(user,secretkey);
    console.log(token);
    res.status(201).json({token});
});

app.get("/dashboard", (req,res)=>{
    const header = req.headers.authorization;
    if(!header){
        res.status(400).json({ 
            message: "invalid header"
        })
        return;
    }

    const token = header.split(' ')[1];
    const data = jwt.verify(token, secretkey);
    console.log(data);
    res.status(201).json({ data });
})

app.listen(port, ()=>{
    console.log("server is listening on port 8080");
});