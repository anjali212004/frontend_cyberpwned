import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Import custom styles
import { Link } from "react-router-dom";
// Assuming you'll import your logo like this
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="cyberpwned-navbar navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        {/* Logo & Brand */}
        <Link className="cyberpwned-brand" to="/">
          {/* Replace text with logo image */}
          <img src={Logo} alt="Cyberpwned Logo" className="cyberpwned-logo" />
        </Link>
        
        {/* Navbar Toggle Button (For Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav" style={{flexFlow:"0"}}>
          <ul className="cyberpwned-nav navbar-nav me-auto mb-2 mb-lg-0">
            <li className="cyberpwned-nav-item">
              <Link className="cyberpwned-nav-link" to="/features">Features</Link>
            </li>
            <li className="cyberpwned-nav-item">
              <Link className="cyberpwned-nav-link" to="/about">About</Link>
            </li>
            <li className="cyberpwned-nav-item">
              <Link className="cyberpwned-nav-link" to="/privacy">Privacy Policy</Link>
            </li>
            <li className="cyberpwned-nav-item">
              <Link className="cyberpwned-nav-link" to="/breaches">Who have been breached?</Link>
            </li>
            <li className="cyberpwned-nav-item">
              <Link className="cyberpwned-nav-link" to="/faq">FAQ</Link>
            </li>
            <li className="cyberpwned-nav-item">
              <Link className="cyberpwned-nav-link" to="/contact">Contact</Link>
            </li>
            <li className="cyberpwned-nav-item">
              <Link className="cyberpwned-nav-link" to="/pricing">Pricing</Link>
            </li>
          </ul>
          
          {/* Auth Buttons - API button removed */}
          <div className="cyberpwned-buttons">
            <Link to="/login" className="cyberpwned-btn cyberpwned-btn-login">Log In</Link>
            <Link to="/signup" className="cyberpwned-btn cyberpwned-btn-signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;