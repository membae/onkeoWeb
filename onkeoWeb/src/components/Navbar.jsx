import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        OnkeoWeb
      </Link>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/services" className="navbar-link">
          Services
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
        <Link to="/testimonials" className='navbar-link'>
          Testimonials
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
