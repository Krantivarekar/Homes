import React from "react";
import "./Footer.css";

// Importing Font Awesome icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Media Icons */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <p>
          Contact us:{" "}
          <a href="mailto:contact@navayuva.com" className="contact-link">
            contact@navayuva.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+1234567890" className="contact-link">
            +123 456 7890
          </a>
        </p>
      </div>

      <p className="copy-text">&copy; NAVAYUVA. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
