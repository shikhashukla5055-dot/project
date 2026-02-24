import mongoose from "mongoose";
 const dbConnect=async()=>{


 const conn = await mongoose.connect("mongodb://localhost:27017/test")
if(conn){
    console.log("database connected...")
}
}
export default dbConnect;