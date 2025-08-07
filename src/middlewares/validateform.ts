// Write a middleware function to validate user input for a registration form. 
// Check if the required fields are present and if they meet certain criteria (e.g., password strength, email format).
import { Request, Response, NextFunction } from "express"
import Joi from "joi"
import { commoninterface } from "../Interfaces/userInterface";

const formSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(10).required(),
    email:Joi.string().email().required(),
    age: Joi.number().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    
})

class Formvalidate{
    public validateform: commoninterface = (req:Request, res:Response, next: NextFunction)=>{
        const {error, value} = formSchema.validate(req.body, {abortEarly: false});
        if(error){
            console.log(error);
            return res.send(error.details);
        }
        next();
    }
}

export default Formvalidate;
