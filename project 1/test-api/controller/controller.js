import { userModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { FullName, Email, Password, MobileNumber } = req.body;
    const isExist = await userModel.findOne({ Email });
    if (isExist) {
      res.json({
        success: false,
        code: 400,
        Message: " already register",
        data: "isExist",
        error: true,
      });
    } else {
      const hashPassword = await bcrypt.hash(Password, 10);
      const data = new userModel({
        FullName,
        Email,
        Password: hashPassword,
        MobileNumber,
      });
      const result = await data.save();
      res.json({
        success: true,
        code: 200,
        Message: "register successfully",
        data: "result",
        error: false,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      code: 500,
      Message: "Internal server error ",
      data: [],
      error: true,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const data = await userModel.findOne({ Email });
    if (data) {
      const isMatch = await bcrypt.compare(Password, data.Password);
      if (isMatch) {
        const payload = { Email: data.Email };
        const token = jwt.sign(payload, "jwt_secret", { expiresIn: "24h" });
        res.json({
          success: true,
          code: 400,
          Message: "login successfully",
          data: data,
          token,
          error: false,
        });
      } else {
        res.json({
          success: false,
          code: 404,
          Message: "Invalid Password",
          data: "",
          error: true,
        });
      }
    } else {
      res.json({
        success: false,
        code: 400,
        Message: "user not found",
        data: "",
        error: true,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      code: 500,
      Message: "Internal server Error",
      data: "",
      error: true,
    });
  }
};
export const userController = async (req, res) => {
  try {
    const result = await userModel.find();
    {
      res.json({
        success: true,
        code: 200,
        Message: "user get",
        data: result,
        error: true,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      code: 500,
      Message: "internal server error",
      data: "",
      error: true,
    });
  }
};
export const deleteController = async (req, res) => {
  try {
    const {id}=req.params;
    const result = await userModel.deleteOne({_id:id});
    {
      res.json({
        success:true,
        code:"200",
        Message:"delete",
        data:result,
        error:false
      });
    }
  } catch {
    res.json({
      success: false,
      code: "500",
      Message:"internal server error",
      data:"",
      error:true
    });
  }
};
export const updateController =async(req,res)=>{
    try{

       const {id}=req.params;
       const{FullName, Email, Password, MobileNumber}=req.body
        const  result=await userModel.updateOne({_id:id},{$set:{FullName, Email, Password, MobileNumber}})
        res.json({
           success:"true",
            code:200,
            Message:"Updated",
            data:result,
            error:false
        })

    }catch{
        res.json({
            success:"false",
            code:500,
            Message:"Internal Server Error",
            data:"",
            error:true
        })
    }
}
      
    

     

   
