import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Office Location */}
        <div className="footer-column">
          <h4>Office Location</h4>
          <p>
            OnkeoWeb Ltd<br />
            P.O. Box 99 - Kisii, Kenya<br />
            Email: info@onkeoweb.com<br />
            Phone: +254 700 123 456
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/">Testimonials</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">🔗</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} OnkeoWeb. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
