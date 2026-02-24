import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token,setToken]=useState('')
  const navigate=useNavigate()
 const location =useLocation()
  useEffect(()=>{
   const data= JSON.parse(localStorage.getItem("token"))
  setToken(data)
  },[location.pathname])
  const handleLogOut=()=>{
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              {!token? <>
                 <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  register
                </Link>
              </li>
              </>:<>
               <li className="nav-item">
                <Link className="nav-link" to="/View">
                  View
                </Link>
                
              </li>
               <li className="nav-item">
                <Link className="nav-link" to={"/"} onClick={handleLogOut} >
                 log-out
                </Link>
              </li>
              
              </>}
             
              
          
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
