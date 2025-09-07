import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
    <div className="navbar">
       <Link to="/">Home</Link>
      <Link to="/insert">👨🏻‍⚕️Insert</Link>   {/* ✅ keep lowercase to match */}
      <Link to="/update">👩🏻‍⚕️Update</Link>
      <Link to="/select">😷Select</Link>
      <Link to="/delete">💉Delete</Link><br/>
    
    </div>
   </>
    

    
  );
};

export default Navbar;
