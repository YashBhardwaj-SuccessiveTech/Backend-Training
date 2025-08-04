import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
        minlength: 3,
        maxlength:20
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength:6,
    },
    role:{
        type: String,
        enum: ["Student", "Admin", "Visitor"],
    }
});

const User = mongoose.model("User", UserSchema);
export default User;