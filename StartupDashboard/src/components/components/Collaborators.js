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
    <section id="" className="research-section">
      <h1 className="section-title">Rising Research Projects in Gujarat</h1>
      <div className="projects-container">
        {researchProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <button className="project-button">{project.buttonText}</button>
          </div>
        ))}
      </div>

      <style>
      {`
      h1{
      fontSize: '36px',
      }
          .research-section {
            padding: 20px;
            backgroundColor: 'rgba(255, 255, 255, 0.8)',  // 80% opacity
          }

          .section-title {
            text-align: center;
            margin-bottom: 20px;
            color: #2E1E77; /* Ensure text is visible against the background */
          }

          .projects-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }

          .project-card {
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background for contrast */
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 280px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .project-title {
            font-size: 18px;
            margin-bottom: 10px;
            color: #333;
          }

          .project-description {
            font-size: 14px;
            margin-bottom: 20px;
            color: #555;
          }

          .project-button {
            background-color: #2E1E77;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .project-button:hover {
            background-color: #e06900;
          }
        `}
      </style>
    </section>
  );
};

export default RisingResearchProjects;
