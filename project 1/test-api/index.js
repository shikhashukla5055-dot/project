 import express from 'express'
 import dbConnect from './dbconnect/db.js';
import router from './router/router.js';
import cors from "cors"

 const app=express()
   const PORT=5000;
    app.use(cors())
 // app.use(cors({
  //origin: "http://localhost:5173", // or 5173 if using Vite
  //methods: ["GET", "POST"],
 // credentials: true
//})); 
  app.use(express.json())
   dbConnect()
   app.use("/api",router)
   app.listen(PORT,()=>{
    console.log("server chal rha hai...");
   })
