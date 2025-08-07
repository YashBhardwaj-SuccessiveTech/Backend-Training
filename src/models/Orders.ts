import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    orderId:{
        type:String,
        required:true,
        unique:true,
    },
    customerName:{
        type:String,
        required:true,
    },
    orderDate:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        required:true,
        enum : ["Pending","Shipped","Delivered"]
    },
    items:[
        {
            productname:{
                type:String,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            },
            price:{
                type:Number,
                required:true,
            }
        }
    ],
    totalAmount:{
        type:Number,
        required:true
    }
});

export default mongoose.model("Order", OrderSchema);
