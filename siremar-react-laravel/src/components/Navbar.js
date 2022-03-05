import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className='siteName'>Siremar</h1>
      <ul>
        <li>Blog</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact</li>
        <Link to="/login" className="linkName">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}
