import React from "react";

const ProjectStats = () => {
  const stats = [
    { label: "Ongoing Projects", value: "150" },
    { label: "Completed Projects", value: "350" },
    { label: "Funding Provided", value: "₹500 Cr" },
  ];

  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "20px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2E1E77" }}>
        Research Projects and Funding
      </h2>
      <div
        style={{
          
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "hsla(220, 40%, 50%, 0.15)",
              // background: "#fff",
              borderRadius: "10px",
              padding: "5px",
              width: "200px",
              textAlign: "center",
              transition: "all 0.3s ease", // Transition for smooth effect
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Uniform shadow intensity
            }}
            // onMouseEnter={(e) => {
            //   // Apply uniform shadow and scale effect on hover
            //   e.target.style.transform = "scale(1.05)";
            //   e.target.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)"; // Slightly stronger shadow on hover
            // }}
            // onMouseLeave={(e) => {
            //   // Revert to original shadow and size
            //   e.target.style.transform = "scale(1)";
            //   e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)"; // Original shadow
            // }}
          >
            <h3 style={{ fontSize: "2rem", color: "#2E1E77", marginBottom: "10px" }}>
              {stat.value}
            </h3>
            <p style={{ fontSize: "1.1rem", color: "#555" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectStats;
