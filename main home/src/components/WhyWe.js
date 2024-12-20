import React from "react";
import { Link } from "react-router-dom";
import icon1 from '../assets/images/only logo.svg';

const WhyWe = () => {
  const cards = [
    {
      icon: icon1,
      title: "StartUps",
      description: "A startup must meet certain criteria to be considered eligible for DPIIT Recognition.",
      buttonText: "Know more",
      route: "/startups", // Add the route path for this card
    },
    {
      icon: icon1,
      title: "Research",
      description: "Click here to know more about the recognition process and apply as a Startup.",
      buttonText: "Know more",
      route: "/research", // Add the route path for this card
    },
    {
      icon: icon1,
      title: "IPR trends",
      description: "Click here to know more about the recognition process and apply as a Startup.",
      buttonText: "Know more",
      route: "/ipr-trends", // Add the route path for this card
    },
  ];

  return (
    <section id="whywe">
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          {cards.map((card, index) => (
            <div key={index} style={styles.card}>
              <img src={card.icon} alt={card.title} style={styles.icon} />
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDescription}>{card.description}</p>
              <Link to={card.route}>
                <button style={styles.button}>{card.buttonText}</button>
              </Link>
            </div>
          ))}
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
    boxShadow: "none",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    maxWidth: "350px",
    height: "auto",
    flex: "1 1 55%",
  },
  icon: {
    width: "150px",
    height: "100px",
    marginBottom: "5px",
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
  },
};

export default WhyWe;
