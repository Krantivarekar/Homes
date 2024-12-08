import React, { useState } from "react";
// Importing images from the assets folder

import search from "../assets/images/steps/head-hunting.png";
import verify from "../assets/images/steps/verification.png";
import examine from "../assets/images/steps/examine.png";
import publication from "../assets/images/steps/publication.png";
import grant from "../assets/images/steps/approved.png";
import arrowIcon from "../assets/images/steps/right.png";


const ResearchProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const icons = [
    { src: search, alt: "Money", text: "Search & Identify" },
    { src: verify, alt: "Plan", text: "Prepare & File" },
    { src: examine, alt: "Research", text: "Examine" },
    { src: publication, alt: "Governance", text: "Publication & Opposition" },
    { src: grant, alt: "World", text: "Grant & Renewal" },
  ];

  const descriptions = [
    "Determine appropriate IPR category and conduct a search for prior rights",
    "Prepare an application and file it by paying applicable fees.",
    "The authority reviews application for compliance and possible objections.",
    "Application is made public, and third parties can raise objections.",
    "Upon approval, IPR is granted, and periodic renewals maintain the rights."
  ];

  const positions = [
    { top: "10%", left: "5%" },
    { top: "35%", left: "26%" },
    { top: "10%", left: "48%" },
    { top: "35%", left: "68%" },
    { top: "10%", left: "89%" },
  ];

  const arrowPositions = [
    { top: "27%", left: "18%", transform: "rotate(70deg)" },
    { top: "27%", left: "37%" },
    { top: "27%", left: "60%", transform: "rotate(70deg)" },
    { top: "27%", left: "79%" },
  ];

  return (
    <section id="milestones">
      <h1 style={{ textAlign: "center", fontSize: "36px" }}>Milestones in IPR management</h1>
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
                <br /> {descriptions[index]}
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
    </section>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "85%",
    height: "60vh",
    margin: "0 auto", // Centers horizontally and keeps space on both sides
    padding: "2rem", // Adds space inside the container
    background: "linear-gradient(135deg, #89e7f729, #89e7f729)",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow
    display: "flex", // Flexbox for content
    alignItems: "center", // Centers content vertically
    justifyContent: "center", // Centers content horizontally
  },

  item: {
    width: "5vw",
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
    fontSize: "0.8vw",
    color: "black",
  },
  arrow: {
    width: "3vw",
    height: "auto",
    position: "absolute",
  },
};

export default ResearchProcess;
