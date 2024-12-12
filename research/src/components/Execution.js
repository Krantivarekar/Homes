import React from "react";

const RisingResearchProjects = () => {
  const projectDetails = {
    projectTitle: "Sustainable Crop Management through Precision Agriculture",
    institute: "Gujarat Agricultural University (GAU)",
    location: "Anand",
    focusArea: "Agriculture, horticulture, agronomy",
  };

  const metricsData = [
    // Researchers and Academics
    { metric: "Progress Updates", value: "Weekly progress reports submitted; data collection ongoing." },
    { metric: "Scope Changes", value: "Expanded to include soil moisture sensors based on initial findings." },
    { metric: "Experimental Results", value: "Initial tests show 30% water savings; detailed graphs available." },
    { metric: "Budget Usage", value: "Budget utilized: ₹1.2 Cr out of ₹2 Cr allocated." },
    { metric: "Resource Usage", value: "Consumed resources include 500 liters of water and 200 hours of labor." },
    { metric: "Intellectual Property Updates", value: "Patent application filed for irrigation technology." },
    { metric: "Progress Reporting and Oversight", value: "Monthly reports submitted to funding agency." },
    { metric: "Resource Support", value: "Additional funding of ₹50 Lakhs approved for extended trials." },
    { metric: "Data Transparency and Publication", value: "Data shared with local agricultural board for transparency." },
    { metric: "Patents and IP Protection", value: "IP registration process initiated; expected completion in 3 months." },
    { metric: "Regulatory Support", value: "Compliance with environmental regulations confirmed." },

    // Mentors and Advisors
    { metric: "Challenges Encountered", value: "Encountered issues with sensor calibration; adjustments made." },
    { metric: "Support Areas", value: "Need for expertise in data analytics for better insights." },
    { metric: "Advised Changes", value: "Recommended increasing sample size for more reliable data." },

    // Start-Up Incubators
    { metric: "Prototype Development", value: "Prototype completed; currently undergoing field testing." },
    { metric: "Market Feedback", value: "Positive feedback from initial user trials; high interest from local farmers." },
    { metric: "Funding Utilization", value: "Funding spent on hardware development and initial marketing." },
    { metric: "Commercialization Progress", value: "First sales expected within the next quarter." },
    { metric: "Networking Opportunities", value: "Connected with local agricultural cooperatives for partnerships." },

    // Policy Makers
    { metric: "Deliverable Reports", value: "Project on track to meet all deliverables by the end of Q4." },
    { metric: "Impact Analysis", value: "Expected reduction in water usage aligns with government sustainability goals." },
    { metric: "Policy Implications", value: "Findings may influence future agricultural policy on resource management." }
  ];

  return (
    <section
      id="execution"
      style={{
        alignItems:"center",
        marginTop:'50px',
        padding:"0.8px",
        backgroundColor:'rgba(255, 255, 255, 0.8)', // 80% opacity
        maxWidth:'80%', // Adjust the width as needed
        margin:'0 auto', // Center the section horizontally
        boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)', // Example box shadow
      }}
      aria-labelledby="project-title"
    >
      <h2 id="project-title" style={{ textAlign:"center"}}>{projectDetails.projectTitle}</h2>
      <p style={{ textAlign:"center"}}><strong>Institute:</strong> {projectDetails.institute}</p>
      <p style={{ textAlign:"center"}}><strong>Location:</strong> {projectDetails.location}</p>
      <p style={{ textAlign:"center"}}><strong>Focus Area:</strong> {projectDetails.focusArea}</p>

      <h1>Execution</h1>

      <h3 style={{textAlign:"center"}}>Metrics</h3>
      <table style={{ width:"80%", borderCollapse:"collapse", marginTop:"20px", margin:'0 auto', textAlign:'center' }}>
        <thead>
          <tr>
            <th style={{ border:"1px solid #ddd", padding:"8px"}}>Metric</th>
            <th style={{ border:"1px solid #ddd", padding:"8px"}}>Value</th>
          </tr>
        </thead>
        <tbody>
          {metricsData.map((item, index) => (
            <tr key={index}>
              <td style={{ border:"1px solid #ddd", padding:"8px"}}>{item.metric}</td>
              <td style={{ border:"1px solid #ddd", padding:"8px"}}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RisingResearchProjects;    