import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
  const [loading ,setLoading]=useState(false)
 const nav= useNavigate()
  const registerValidation = yup.object().shape({
    Email: yup.string().required().min(2).max(30).email(),
    Password: yup.string().required().min(2).max(18),
  });
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });
  const handleRegister = async(data) => {
    setLoading(true)
  const res= await axios.post('http://localhost:5000/api/login',data)
 if(res?.data?.success===true){
  Swal.fire({
    title:"Login",
    text:res?.data?.Message,
    icon:"success"
  })
 nav("/view")
 localStorage.setItem("token",JSON.stringify(res?.data))
 }else{
  Swal.fire({
    title:"Login",
    text:res?.data?.Message,
    icon:"error"
  })
 }
 setLoading(false)
    
  };
  return (
    <>
    {loading  && <p>loading..........</p>}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-3">
            <div className="img-logo">
              <img
                className="img-fluid"
                src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
                alt=" "
              />
            </div>
          </div>
          <div className="col-sm-6">
            <h1 className="text-primary text-center mt-5">Login From</h1>{" "}
            <br />
            <form onSubmit={handleSubmit(handleRegister)}>
              <input
                {...register("Email")}
                type="email"
                className="form-control mb-3"
                placeholder="Enter Your Email"
              />
              {errors?.Email && (
                <p className="text-danger">{errors?.Email?.message}</p>
              )}
              <input
                {...register("Password")}
                type="password"
                className="form-control mb-3"
                placeholder="Enter Your password"
              />
              {errors?.Password && (
                <p className="text-danger">{errors?.Password?.message}</p>
              )}
              <input
                type="submit"
                className="form-control btn btn-primary text-light "
                value="Login"
              />
            </form>
            <p className="mt-3 text-center">
              {" "}
              Have account <Link to={"/Register"}>Register Here</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
