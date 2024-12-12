import React from "react";

const Planning = () => {
  const projectDetails = {
    projectTitle: "Sustainable Crop Management through Precision Agriculture",
    institute: "Gujarat Agricultural University (GAU)",
    location: "Anand",
    focusArea: "Agriculture, horticulture, agronomy",
  };

  const projectData = [
    { metric: "Project Milestones", value: "Phase 1: Initial Research (Jan-Mar 2024), Phase 2: Field Trials (Apr-Jun 2024), Phase 3: Data Analysis (Jul-Sep 2024)" },
    { metric: "Research Plan", value: "Experimental design: Randomized Block Design for crop trials. Data collection through satellite imagery and ground sensors" },
    { metric: "Resource Allocation", value: "Personnel: 5 researchers, 2 field assistants. Equipment: Drone, soil sensor kits, lab equipment" },
    { metric: "Resource Requirements", value: "Required: 2 drones, 10 soil sensor kits, 100 acres of field space, 1 weather station" },
    { metric: "Ethical Considerations", value: "Compliant with agricultural research ethics. No human subject involvement" },
    { metric: "Approval of Project Plans", value: "Research methodology and budget approved by GAU, ethical approval pending" },
    { metric: "Resource Allocation", value: "₹50 Lakh allocated for equipment, ₹20 Lakh for personnel" },
    { metric: "Policy Compliance", value: "Adheres to India's National Policy on Agriculture and Environment Protection Act" },
    { metric: "Budget Summary", value: "Total budget: ₹1 Cr. Personnel: ₹30 Lakh, Equipment: ₹40 Lakh, Travel & Miscellaneous: ₹30 Lakh" },
    { metric: "Expected Impact", value: "Increased crop yield by 20%. Reduced water usage by 15% through precision irrigation" },
    { metric: "Regulatory Compliance", value: "Compliant with environmental regulations for pesticide use and crop rotation" },
    { metric: "Stakeholder Engagement", value: "Engaged with local farmers, Gujarat State Agricultural Board, and environmental NGOs" },
    { metric: "Approval of Project Strategy", value: "GAU and local government approved the research strategy aligned with agricultural development goals" },
    { metric: "Oversight of Funding", value: "₹60 Lakh funded by GAU, ₹40 Lakh from a private agriculture fund" },
    { metric: "Stakeholder Coordination", value: "Coordination with regional agriculture departments, and local farming cooperatives" },
    { metric: "Legal and Regulatory Enforcement", value: "Project compliance monitored by the Ministry of Agriculture and Farmers Welfare" },
    { metric: "Progress Checkpoints", value: "Monthly progress updates. Phase 1 completed successfully. Phase 2 on track for completion by June 2024" },
    { metric: "Disbursement Schedule", value: "Fund release based on phase completion: ₹30 Lakh for Phase 1, ₹30 Lakh for Phase 2" },
    { metric: "Funding Efficiency", value: "Efficient use of resources, 70% of budget used for field equipment and sensor data collection" },
    { metric: "Market Viability", value: "Market feedback from farmers indicates a 40% interest in adopting precision agriculture tools" },
    { metric: "Performance Metrics", value: "Field trials performance tracked using yield data, irrigation efficiency, and cost reduction" },
    { metric: "Audit Compliance", value: "Financial audits scheduled every quarter to ensure transparency" },
    { metric: "Planned Methodology", value: "Methodology: Randomized Block Design with control plots for comparative analysis" },
    { metric: "Collaboration Opportunities", value: "Collaboration with IIT Gandhinagar for AI-based data analysis in precision agriculture" },
    { metric: "Patentable Innovations", value: "Developing a patented sensor system for real-time soil moisture tracking" },
    { metric: "Proprietary Methods", value: "Proprietary crop management software developed for automated irrigation scheduling" },
    { metric: "IP Protection Plans", value: "Patent application in process for the sensor technology and software platform" },
  ];

  return (
    <section
      id="planning"
      style={{
      position: "relative",
      width: "85%",
       margin: "0 auto",
       padding: "2rem",
       background: 'rgba(255, 255, 255, 0.8)',
       borderRadius: "10px",
       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
            <h1>Planning</h1>

      <h2>Rising Research Projects: Metrics</h2>

      {/* Project Details Section */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Project Details</h3>
        <p><strong>Project Title:</strong> {projectDetails.projectTitle}</p>
        <p><strong>Institute:</strong> {projectDetails.institute}</p>
        <p><strong>Location:</strong> {projectDetails.location}</p>
        <p><strong>Focus Area:</strong> {projectDetails.focusArea}</p>
      </div>

      {/* Metrics Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Metric</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.metric}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Planning;