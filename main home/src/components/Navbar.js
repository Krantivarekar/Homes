import React from "react";
import { Link } from "react-router-dom"; // Import Link for React Router

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: "#2E1E77", // Dark purple
      padding: "15px 5px",
      position: "sticky", // Sticky navbar at the top
      top: 0,
      zIndex: 1000,
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      gap: "50px", // Adjusted for better spacing
      margin: 0,
      padding: 0,
    },
    link: {
      textDecoration: "none",
      color: "#fff", // White text
      fontSize: "16px",
      fontWeight: 400,
      padding: "8px 12px",
      borderRadius: "5px",
      transition: "all 0.3s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navLinks}>
        {/* Page navigation links */}
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
      
        <li>
          <Link to="/why-we" style={styles.link}>Why We</Link>
        </li>
        <li>
          <Link to="/updates-news" style={styles.link}>Recent Updates and News</Link>
        </li>
        <li>
          <Link to="/research-projects" style={styles.link}>Rising Research Projects</Link>
        </li>
        <li>
          <Link to="/schemes" style={styles.link}>Schemes</Link>
        </li>
        {/* Anchor links for in-page navigation */}
        
        <li>
          <a href="/about-us" style={styles.link}>About Us</a>
        </li>
        <li>
          <a href="/contact-us" style={styles.link}>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
