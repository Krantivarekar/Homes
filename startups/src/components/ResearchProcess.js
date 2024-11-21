import React from "react";
// Importing the static image
import startupImage from "../assets/startup.jpg";

const StartupSphere = () => {
  return (
    <div style={styles.container}>
      {/* Displaying the responsive static image */}
      <img src={startupImage} alt="Startup Sphere" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "85vh",
    margin: "auto",
    padding: "0 5vw", // Add padding to prevent the image from touching the edges
    boxSizing: "border-box",
    overflow:"hidden",
  },
  image: {
    width: "100%", // Ensures the image takes up full width of the container
    height: "auto", // Maintains aspect ratio
    objectFit: "cover", // Ensures the image scales properly within its boundaries
  },
};

export default StartupSphere;
