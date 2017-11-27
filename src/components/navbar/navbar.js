import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

const navbar = props =>
  <nav className="navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">NYT</Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/"
            || window.location.pathname === "/home"
            ? "active"
            : ""}><Link to="/">Home</Link></li>
        
        <li className={
            window.location.pathname === "/saved"
            ? "active"
            : ""}><Link to="/saved">Saved</Link></li>
        
      </ul>
    </div>  
  </nav>

export default navbar;