import React from "react";
import { useParams } from "react-router-dom";

const PhaseDetail = () => {
  const { phaseName } = useParams();  // Capture phaseName from the URL

  // Define phase descriptions
  const phaseDetails = {
    Initiation: "This is the initiation phase of the research, where the idea is born and initial planning occurs.",
    Planning: "In this phase, detailed planning for the research takes place, including methodologies and resources.",
    Execution: "The research is carried out in this phase, collecting data, running experiments, or gathering insights.",
    Monitoring: "In this phase, the progress of the research is monitored to ensure it stays on track and within scope.",
    Closing: "This is the conclusion phase, where the results are analyzed, and the final research report is produced."
  };

  const phaseDescription = phaseDetails[phaseName] || "Phase description not available.";

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{phaseName} Phase</h2>
      <div style={styles.circleContainer}>
        <div style={styles.circle}>
          {phaseName && phaseName.charAt(0).toUpperCase()}
        </div>
      </div>
      <p style={styles.description}>{phaseDescription}</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    padding: "30px",
    margin: "20px auto",
    maxWidth: "800px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#555",
    maxWidth: "700px",
    margin: "0 auto",
  },
  circleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  circle: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
};

export default PhaseDetail;
