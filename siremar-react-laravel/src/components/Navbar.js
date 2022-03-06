import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="siteName">
        <Link to="/" className="linkName">
          <li>Siremar</li>
        </Link>
      </h1>
      <ul>
        <Link to="/blog" className="linkName">
          <li>Blog</li>
        </Link>
        <Link to="/services" className="linkName">
          <li>Services</li>
        </Link>
        <Link to="/aboutus" className="linkName">
          <li>About Us</li>
        </Link>
        <Link to="/contact" className="linkName">
          <li>Contact</li>
        </Link>
        <Link to="/login" className="linkName">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}
