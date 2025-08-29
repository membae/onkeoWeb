import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/arqmat logo.png" alt="" />
        </Link>

        {/* Hamburger icon */}
        <div 
          className="hamburger" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>

          {/* Dropdown for Services */}
          <div
            className="navbar-link dropdown"
            onMouseEnter={() => !isMobileMenuOpen && setShowDropdown(true)}
            onMouseLeave={() => !isMobileMenuOpen && setShowDropdown(false)}
          >
            <span>Services</span>
            {(showDropdown || isMobileMenuOpen) && (
              <div className="dropdown-menu">
                <Link to="/services/architecture" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Design your property
                </Link>
                <Link to="/services/build" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Build your property
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/testimonials" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
