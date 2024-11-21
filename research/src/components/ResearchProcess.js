import React, { useState } from "react";
// Importing images from the assets folder
import moneyIcon from "../assets/images/investment.png";
import planIcon from "../assets/images/team.png";
import researchIcon from "../assets/images/implement.png";
import governanceIcon from "../assets/images/government.png";
import worldIcon from "../assets/images/real-time.png";
import arrowIcon from "../assets/images/right.png";

const StartupSphere = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const icons = [
    { src: moneyIcon, alt: "Money", text: "Funding" },
    { src: planIcon, alt: "Plan", text: "Collaborations" },
    { src: researchIcon, alt: "Research", text: "Implementation" },
    { src: governanceIcon, alt: "Governance", text: "Government Support" },
    { src: worldIcon, alt: "World", text: "Delivery" },
  ];

  const positions = [
    { top: "10%", left: "5%" },
    { top: "35%", left: "25%" },
    { top: "10%", left: "46%" },
    { top: "35%", left: "66%" },
    { top: "10%", left: "85%" },
  ];

  const arrowPositions = [
    { top: "25%", left: "18%", transform: "rotate(70deg)" },
    { top: "25%", left: "39%" },
    { top: "25%", left: "60%", transform: "rotate(70deg)" },
    { top: "25%", left: "79%" },
  ];

  return (
    <div style={styles.container}>
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          {/* Icon */}
          <div
            style={{
              ...styles.item,
              ...positions[index],
              ...(hoveredIndex === index ? styles.itemHover : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              style={{
                ...styles.image,
                ...(hoveredIndex === index ? styles.imageHover : {}),
              }}
            />
            <p style={styles.text}>
              <strong>{icon.text}</strong>
              <br /> we sfheiw fwehdiwekdn wfbwjs wejfdws
            </p>
          </div>
          {/* Arrow */}
          {index < arrowPositions.length && (
            <div
              style={{
                ...styles.arrow,
                ...arrowPositions[index],
              }}
            >
              <img src={arrowIcon} alt="Arrow" style={styles.image} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "80vh",
    margin: "auto",
  },
  item: {
    width: "10vw",
    height: "10vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  itemHover: {
    transform: "scale(1.05)", // Removed rotation, only scaling remains
    // boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  imageHover: {
    transform: "scale(1.05)", // Slightly enlarges the image on hover without rotation
  },
  text: {
    marginTop: "8px",
    fontSize: "1.5vw",
    fontWeight: "bold",
    color: "#6a6a6a",
  },
  arrow: {
    width: "4vw",
    height: "auto",
    position: "absolute",
  },
};

export default StartupSphere;
