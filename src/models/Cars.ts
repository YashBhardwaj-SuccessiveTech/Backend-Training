import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    }
});