import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          OnkeoWeb
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>

          {/* Dropdown for Services */}
          <div
            className="navbar-link dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span>Services</span>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/services/architecture" className="dropdown-item">
                  Design your property
                </Link>
                <Link to="/services/build" className="dropdown-item">
                  Build your property
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
          <Link to="/testimonials" className="navbar-link">
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
