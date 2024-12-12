import React from "react";

const Monitoring = () => {
  const projectDetails = {
    projectTitle: "Sustainable Crop Management through Precision Agriculture",
    institute: "Gujarat Agricultural University (GAU)",
    location: "Anand",
    focusArea: "Agriculture, horticulture, agronomy",
  };

  const metricsData = [
    // Key Performance Indicators (KPIs)
    { metric: "KPIs", value: "Achieved 80% of targeted water savings in initial trials." },
    
    // Revised Plans
    { metric: "Revised Plans", value: "Incorporated additional sensors for real-time data collection." },
    
    // Budget Reports
    { metric: "Budget Reports", value: "Current expenditure is ₹1.2 Cr; remaining budget is ₹0.8 Cr." },
    
    // Oversight and Accountability
    { metric: "Oversight and Accountability", value: "Monthly oversight meetings held with stakeholders." },
    
    // Interim Progress Reviews
    { metric: "Interim Progress Reviews", value: "Quarterly reviews indicate progress on schedule." },
    
    // Resource Reallocation
    { metric: "Resource Reallocation", value: "Reallocated ₹20 Lakhs to enhance data analytics capabilities." },
    
    // Financial Reports
    { metric: "Financial Reports", value: "Financial audits completed; all expenditures accounted." },
    
    // Progress Reports
    { metric: "Progress Reports", value: "Bi-weekly updates shared with funding agencies." },
    
    // Updated Milestones
    { metric: "Updated Milestones", value: "Milestone for prototype testing achieved ahead of schedule." },
    
    // Suggestions for Course Corrections
    { metric: "Suggestions for Course Corrections", value: "Consider increasing collaboration with local farmers for feedback." },
    
    // IP Filings
    { metric: "IP Filings", value: "Filed two patents related to irrigation technology and soil sensors." },
    
    // IP Conflicts
    { metric: "IP Conflicts", value: "No current conflicts reported; all filings under review." },
    
    // IP Commercialization
    { metric: "IP Commercialization", value: "Partnership discussions underway for commercialization of technologies." }
  ];

  return (
    <section
      id="monitoring"
      style={{
        alignItems:"center",
        marginTop:'50px',
        padding:"0.8px",
        backgroundColor:'rgba(255, 255, 255, 0.8)', 
        maxWidth:'80%', 
        margin:'0 auto', 
        boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)', 
      }}
      aria-labelledby="project-title"
    >
      <h2 id="project-title" style={{ textAlign:"center"}}>{projectDetails.projectTitle}</h2>
      <p style={{ textAlign:"center"}}><strong>Institute:</strong> {projectDetails.institute}</p>
      <p style={{ textAlign:"center"}}><strong>Location:</strong> {projectDetails.location}</p>
      <p style={{ textAlign:"center"}}><strong>Focus Area:</strong> {projectDetails.focusArea}</p>
      <h1>Monitoring and Control</h1>

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

export default Monitoring;
