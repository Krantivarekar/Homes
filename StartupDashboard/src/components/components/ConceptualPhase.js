import React from "react";

const ConceptualPhase = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f9",
      color: "#333",
      padding: "20px",
      lineHeight: "1.6",
    },
    header: {
      textAlign: "center",
      backgroundColor: "#34495e",
      color: "#fff",
      padding: "20px 0",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    title: {
      fontSize: "2.5rem",
      margin: "0",
    },
    subtitle: {
      fontSize: "1.2rem",
      fontStyle: "italic",
    },
    section: {
      marginBottom: "20px",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      color: "#2c3e50",
      borderBottom: "2px solid #e74c3c",
      paddingBottom: "10px",
      marginBottom: "15px",
    },
    list: {
      paddingLeft: "20px",
    },
    footer: {
      textAlign: "center",
      backgroundColor: "#34495e",
      color: "#fff",
      padding: "10px 0",
      borderRadius: "8px",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tech Innovators</h1>
        <p style={styles.subtitle}>
          "To drive innovation in the tech space"
        </p>
      </header>

      <main>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p>Founded on: 15-01-2020</p>
          <p>Location: New York</p>
          <p>Legal Structure: LLC</p>
          <p>Mission: "To drive innovation in the tech space"</p>
          <p>
            Vision: "Creating scalable, efficient, and cutting-edge technologies."
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>The Problem</h2>
          <p>Businesses struggle to adopt AI effectively.</p>
          <p>Market Pain Points: Lack of affordable AI solutions.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Solution</h2>
          <p>Core Offering: AI-driven business tools.</p>
          <p>Value Proposition: Simplified AI for businesses.</p>
          <p>Uniqueness: Proprietary algorithms that simplify AI.</p>
          <p>Feasibility: Feasible with current technology.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Market</h2>
          <p>Market Size: Large</p>
          <p>
            Target Audience: Tech companies, SMEs, Startups, Developers
          </p>
          <p>Customer Feedback: Positive feedback on product usability.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Technology Stack</h2>
          <p>React, Node.js, Python, AI algorithms, Machine Learning integration</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Business Model</h2>
          <p>Revenue Model: SaaS</p>
          <p>Pricing Strategy: Freemium</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Funding</h2>
          <p>Funding Requirements: Seed funding for product launch</p>
          <p>Financial Projections: Positive revenue growth</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>IP Strategy</h2>
          <p>Trademarked, Copyrighted, Patent pending</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Team</h2>
          <ul style={styles.list}>
            <li>Product Manager</li>
            <li>Developers</li>
            <li>Marketing Lead</li>
            <li>Data Scientist</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2023 Tech Innovators. All Rights Reserved.</p>
        <p>Founder: Alice Johnson</p>
      </footer>
    </div>
  );
};

export default ConceptualPhase;