import React from "react";

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
      gap: "105px",
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
    linkHover: {
      backgroundColor: "#4A2EB8", // Lighter purple
      color: "#f4f4f4",
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navLinks}>
        <li>
          <a
            href="#milestones"
            style={styles.link}
            >
            Milestones of Research
          </a>
        </li>
        <li>
          <a
            href="#our-progress"
            style={styles.link} 
          >
            Our Progress
          </a>
        </li>
        <li>
          <a
            href="#whywe"
            style={styles.link} 
          >
            Why We
          </a>
        </li>
        <li>
          <a
            href="#updates-news"
            style={styles.link} 
          >
            Recent Updates and News
          </a>
        </li>
        <li>
          <a
            href="#research-projects"
            style={styles.link}  
          >
            Rising Research Projects in Gujarat
          </a>
        </li>
        <li>
          <a
            href="#about-us"
            style={styles.link}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#contact-us"
            style={styles.link}
            >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
