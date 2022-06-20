import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{


    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand  text-white" href="inventory system">EVENT SYSTEM</a >
 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white">REGISTER</Link >
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active  text-white" >LOGIN</Link >
        </li>
        <li className="nav-item">
          <Link to="admin" className="nav-link active active text-white ">ADMIN</Link >
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link active text-white" >USER</Link >
        </li>
  </ul>
  </div>
  </nav>
            {/* <Link to='/'>Home</Link>/
            <Link to='/admin'>Admin</Link>/
            <Link to='/user'>User</Link>/
            <Link to='/view'>view</Link> */}
        </>
    )
}
export default Navbar;