import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgb(40, 36, 36)',
    color: 'white',
    padding: '2rem 0',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  // const logoStyle = {
  //   fontSize: '1.8rem',
  //   fontWeight: 'bold',
  //   color: 'rgba(212, 64, 54, 0.9)',
  //   marginBottom: '1.5rem',
  //   display: 'block',
  // };

  const sectionStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const navStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '2rem',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '1rem',
    padding: '0.5rem 0',
  };

  

  const copyrightStyle = {
    borderTop: '1px solid rgba(83, 159, 149, 0.30)',
    paddingTop: '1.5rem',
    marginTop: '1.5rem',
    color: '#ccc',
    fontSize: '0.9rem',
  };

  // Function to handle hover effect
  const handleMouseEnter = (e) => {
    e.target.style.color = 'rgba(197, 71, 71, 0.9)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = 'white';
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <Link className="cyberpwned-brand" to="/">
          <img src={Logo} alt="Cyberpwned Logo" className="cyberpwned-logo" />
        </Link>
        
        <div style={sectionStyle}>
          <nav style={navStyle}>
            <Link
              to="/" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Link>
            <Link
              to="/about" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About
            </Link>
            <Link
              to="/features" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Features
            </Link>
            <Link
              to="/breaches" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Have Been Pwned
            </Link>
            <Link 
              to="/contact" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </Link>
            <Link 
              to="/privacy" 
              style={linkStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        
        <div style={copyrightStyle}>
          <p>© {new Date().getFullYear()} CyberPwned. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;