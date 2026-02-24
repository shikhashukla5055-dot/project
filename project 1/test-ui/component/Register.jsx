import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
 const nav= useNavigate()
  const[loading,setLoading]=useState(false)
  const registerValidation = yup.object().shape({
    FullName: yup.string().required().min(2).max(18),
    Email: yup.string().required().min(2).max(30).email(),
    Password: yup.string().required().min(2).max(18),
    MobileNumber: yup.string().required().min(2).max(18),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });
   const handleRegister = async (data) => {
    setLoading(true)
    // console.log(data);
    
    const res = await axios.post("http://localhost:5000/api/register", data);
   if(res?.data?.success == true){
     Swal.fire({
      title:"Register",
      text:res?.data?.Message,
      icon:"success"
     })
     reset()
     nav("/")
   }else{
    Swal.fire({
      title:"Register",
      text:res?.data?.Message,
      icon:"error"
     })

   }
   setLoading(false)


     }
   
 // const handleRegister = async (data) => {
  //try {
    //const res = await axios.post(
     // "http://localhost:5000/api/register",
    //  data
    //);
   // console.log(res.data);
 // } catch (err) {
  //  console.error(err.response?.data || err.message);
 // }
//};

  return (
    <>
    {loading && <p>loading.........</p>}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-3">
            <div className="img-logo">
              <img
                className="img-fluid"
                src="https://img.freepik.com/premium-vector/sign-page-abstract-concept-vector-illustration_107173-25670.jpg?semt=ais_hybrid&w=740&q=80"
                alt=" "
              />
            </div>
          </div>
          <div className="col-sm-6">
            <h1 className="text-primary text-center mt-5">Register From</h1>{" "}
            <br />
            <form onSubmit={handleSubmit(handleRegister)}>
              <input
                {...register("FullName")}
                type="text"
                className="form-control mb-3"
                placeholder="Enter Your Name"
              />
              {errors?.FullName && (
                <p className="text-danger">{errors?.FullName?.message}</p>
              )}
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
                {...register("MobileNumber")}
                type="number"
                className="form-control mb-3"
                placeholder="Enter Your Mobile No."
              />
              {errors?.MobileNumber && (
                <p className="text-danger">{errors?.MobileNumber?.message}</p>
              )}
              <input
                type="submit"
                className="form-control btn btn-primary text-light "
                value="Register"
              />
            </form>
            <p className="mt-3 text-center">
              {" "}
              Already Have an account <Link to={"/"}>Login Here</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
