import { Request, Response} from "express";
import User from "../models/User"
import bcrypt from "bcrypt"
class registration{
    public signup = async (req: Request, res:Response)=>{
        // Fetch details
        const {name, password , email, role } = req.body;

        // check if already exist
        try{
            const existUser = await User.findOne({email});
            if(existUser){
                return res.status(400).send({
                    success: false,
                    message:"User already exist",
                });
            }

            // secure password
            let hashedpassword;
            try{
                hashedpassword = await bcrypt.hash(password,10);
            }
            catch(err){
                return res.status(500).json({
                    success: false,
                    message: "Error in hashing Passwords",
                });
            }
            
            // Create entry for User
            const user = await User.create({
                name, email, password:hashedpassword, role
            });

            return res.status(200).json({
                success:true,
                message:'User Created Successfully'
            });

        }catch(err){
            console.error(err);
            return res.status(500).send({
                success: false,
                message:"User cannot be registered, please try again later",
            });
            
        }
    }

}

export default registration;
