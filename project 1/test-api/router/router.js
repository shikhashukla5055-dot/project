import express from "express";
import {registerController,loginController,userController,deleteController,updateController} from "../controller/controller.js"
const router=express.Router()

router.post("/register", registerController)
router.post("/login",loginController)
router.get("/user",userController)
router.delete("/delete/:id",deleteController)
router.put("/update/:id",updateController)


export default router;
