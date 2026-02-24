import mongoose from "mongoose";
 const userSchema= new mongoose.Schema({
    FullName :String,
    Email :String,
    Password :String,
    MobileNumber:String
});
export const userModel= mongoose.model("user",userSchema)
