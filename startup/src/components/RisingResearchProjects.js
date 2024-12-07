import React from "react";

const RisingResearchProjects = () => {
  const researchProjects = [
    {
      title: "AI-based Healthcare Solutions",
      description: "Innovative research on using AI to improve healthcare delivery in Gujarat, focusing on diagnostics and patient care.",
      buttonText: "Know more",
    },
    {
      title: "Sustainable Energy Innovations",
      description: "Cutting-edge research in renewable energy sources, focusing on solar, wind, and hydroelectric power in Gujarat.",
      buttonText: "Know more",
    },
    {
      title: "Water Conservation Technologies",
      description: "Research on advanced water-saving technologies to address the growing water scarcity issue in Gujarat.",
      buttonText: "Know more",
    },
    {
      title: "Smart Agriculture Solutions",
      description: "Development of smart agriculture technologies to improve productivity and sustainability for Gujarat's farmers.",
      buttonText: "Know more",
    },
  ];

  return (
    <section
      id="rrp"
      style={{
        padding: "20px",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  // 80% opacity
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Rising Research Projects in Gujarat
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {researchProjects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "280px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                color: "#333",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                marginBottom: "20px",
                color: "#555",
              }}
            >
              {project.description}
            </p>
            <button
              style={{
                backgroundColor: "#f57c00",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e06900")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f57c00")}
            >
              {project.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RisingResearchProjects;
