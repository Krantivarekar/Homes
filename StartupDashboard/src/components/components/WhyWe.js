import React from "react";

const WhyWe = () => {
  const cards = [
    {
      icon: "https://via.placeholder.com/80", // Placeholder image URL
      title: "Check Eligibility",
      description:
        "A startup must meet certain criteria to be considered eligible for DPIIT Recognition.",
      buttonText: "know more",
    },
    {
      icon: "https://via.placeholder.com/80", // Placeholder image URL
      title: "Get Recognised",
      description:
        "Click here to know more about the recognition process and apply as a Startup.",
      buttonText: "Know more",
    },
    {
      icon: "https://via.placeholder.com/80", // Placeholder image URL
      title: "Notifications",
      description:
        "Always stay on the top of Recognition and Tax Exemption updates.",
      buttonText: "Know more",
    },
    {
      icon: "https://via.placeholder.com/80", // Placeholder image URL
      title: "Validate Certificate",
      description:
        "Click here to verify your Recognition/Tax Exemption certificates.",
      buttonText: "know more",
    },
    
  ];

  const processFlow = [
    "https://via.placeholder.com/50", // Placeholder image URL
    "https://via.placeholder.com/50", // Placeholder image URL
    "https://via.placeholder.com/50", // Placeholder image URL
    "https://via.placeholder.com/50", // Placeholder image URL
    "https://via.placeholder.com/50", // Placeholder image URL
  ];

  return (
    <section id="whywe">
    <div style={styles.container}>
      <h2 style={styles.title}>Why We?</h2>
      <p style={styles.subtitle}>
      Our platform streamlines research monitoring by offering real-time updates, personalized dashboards, and easy collaboration, ensuring transparency and efficiency for researchers and institutions.      </p>
      <div style={styles.mainContent}>
        <div style={styles.leftSection}>
          {cards.map((card, index) => (
            <div key={index} style={styles.card}>
              <img src={card.icon} alt={card.title} style={styles.icon} />
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDescription}>{card.description}</p>
              <button style={styles.button}>{card.buttonText}</button>
            </div>
          ))}
        </div>
        <div style={styles.rightSection}>
          <h3 style={styles.processTitle}>The Process Flow</h3>
          <div style={styles.processFlow}>
            {processFlow.map((icon, index) => (
              <img key={index} src={icon} alt={`step-${index}`} style={styles.processIcon} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

const styles = {
  container: {
    width: "100%",
    textAlign: "center",
    padding: "10px 10px",
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // 80% opacity
  },
  title: {
    fontSize: "36px",
    color: "#2e1e77",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#6a6a6a",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start", // Align items at the top
    gap: "10px",
    flexWrap: "wrap",
  },

  leftSection: {
    display: "flex",
    justifyContent: "space-between", // Horizontally align cards
    gap: "5px",
    flexWrap: "wrap", // Allow wrapping for small screens
    flex: "1 1 60%", // Adjust width for the left section (cards)
  },

  rightSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 35%", // Adjust width for the right section (process flow)
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    textAlign: "center",
    maxWidth: "195px", // Restrict card width
    flex: "1 1 22%", // Allow the cards to be flexible within the section
  },
  icon: {
    width: "80px",
    height: "80px",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "1.2rem",
    color: "#2e1e77",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "0.9rem",
    color: "#6a6a6a",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2e1e77",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginBottom:"5px"
  },
  processTitle: {
    fontSize: "1.5rem",
    color: "#2e1e77",
    marginBottom: "20px",
  },
  processFlow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    flexWrap: "wrap",
  },
  processIcon: {
    width: "50px",
    height: "50px",
  },
};

export default WhyWe;
