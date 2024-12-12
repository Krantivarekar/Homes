import React from "react";

const FinancePhase = () => {
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
      transition: "transform 0.3s ease",
    },
    sectionTitle: {
      fontSize: "1.8rem",
      color: "#2c3e50",
      borderBottom: "2px solid #e74c3c",
      paddingBottom: "10px",
      marginBottom: "15px",
    },
    sectionTitleHighlight: {
      color: "#16a085",
    },
    list: {
      paddingLeft: "20px",
    },
    listItem: {
      marginBottom: "10px",
      fontSize: "1.1rem",
    },
    footer: {
      textAlign: "center",
      backgroundColor: "#34495e",
      color: "#fff",
      padding: "10px 0",
      borderRadius: "8px",
      marginTop: "20px",
    },
    hoverEffect: {
      '&:hover': {
        transform: "scale(1.05)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }
    }
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

        {/* Principle Phases Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionTitleHighlight}>Principle Phases</span> of Startup
          </h2>
          <ul style={styles.list}>
            <li><strong>Idea Validation:</strong> Conduct market research and gather feedback from target customers to validate the product concept.</li>
            <li><strong>Product Development:</strong> Create an MVP, iterate based on user feedback, and refine features.</li>
            <li><strong>Market Entry:</strong> Launch the product, acquire early adopters, and optimize based on user behavior.</li>
            <li><strong>Revenue Model & Growth:</strong> Transition to monetization, focus on customer acquisition, and scale operations.</li>
            <li><strong>Funding & Scaling:</strong> Seek additional funding to scale the company, expand the team, and reach a global market.</li>
          </ul>
        </section>

        {/* Finance Parameters Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionTitleHighlight}>Finance</span> Parameters After Ideation
          </h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Initial Capital Requirements:</strong> Estimated at $200,000 for product development, marketing, and team expansion.</li>
            <li style={styles.listItem}><strong>Revenue Model:</strong> SaaS with a freemium model, where basic features are free and premium features are paid at $29.99 per month.</li>
            <li style={styles.listItem}><strong>Cost Structure:</strong>
              <ul style={{ paddingLeft: "40px" }}>
                <li>Operational expenses: $80,000 annually</li>
                <li>Marketing expenses: $40,000 annually</li>
                <li>Salaries for team members: $150,000 annually</li>
              </ul>
            </li>
            <li style={styles.listItem}><strong>Break-even Analysis:</strong> Expect to break even within 12 months by reaching $60,000 monthly recurring revenue.</li>
            <li style={styles.listItem}><strong>Funding Sources:</strong> $500,000 in seed funding secured; seeking $3 million Series A funding in Q3 2024.</li>
            <li style={styles.listItem}><strong>Cash Flow Forecast:</strong>
              <ul style={{ paddingLeft: "40px" }}>
                <li>Q1 2024: -$30,000 (Initial development and marketing costs)</li>
                <li>Q2 2024: +$50,000 (Revenue from early adopters)</li>
                <li>Q3 2024: +$120,000 (Expansion and scaling operations)</li>
              </ul>
            </li>
            <li style={styles.listItem}><strong>Valuation:</strong> Startup valuation estimated at $5 million based on growth projections and market trends.</li>
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

export default FinancePhase;