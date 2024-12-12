import React from "react";

const Initiation = (onComplete) => {

  const handleComplete = () => {
    // Validate parameters for initiation phase
    const allCriteriaMet = true; // Replace with actual validation logic
    if (allCriteriaMet) {
      onComplete();
      alert("Initiation Phase Completed!");
    } else {
      alert("Please complete all criteria for Initiation Phase!");
    }
  };

  const projectDetails = {
    projectTitle: "Sustainable Crop Management through Precision Agriculture",
    institute: "Gujarat Agricultural University (GAU)",
    location: "Anand",
    focusArea: "Agriculture, horticulture, agronomy",
  };

  const metricsData = [
    { metric: "Research Proposal", value: "Research on renewable energy solutions in India" },
    { metric: "Research Methodology", value: "Experimental design: controlled trials, Stratified sampling" },
    { metric: "Literature Review Completion", value: "50 articles reviewed, 10 gaps identified" },
    { metric: "Feasibility Study Metrics", value: "Resource Needs: ₹2 Cr, Available: ₹1.5 Cr" },
    { metric: "Funding/Resources", value: "Budget Breakdown: ₹1.5 Cr for equipment, ₹0.5 Cr for manpower" },
    { metric: "Collaborators", value: "IIT Delhi, TERI" },
    { metric: "Regulatory Compliance Documents", value: "Ethical approval: Pending, Safety review: Completed" },
    { metric: "Intellectual Property Strategy", value: "Patent: Pending for energy storage system" },
    { metric: "Problem Statement", value: "Innovative energy storage solution for intermittent renewable sources" },
    { metric: "Market Validation", value: "Survey response rate: 70%, Addressable Market: ₹1000 Cr" },
    { metric: "Innovation Maturity", value: "TRL: 5, Prototype in development" },
    { metric: "Funding Requirements", value: "Raised: ₹1 Cr, Requested: ₹2 Cr" },
    { metric: "Scalability Metrics", value: "Market Capture in 5 Years: 20%" },
    { metric: "Project Timeline", value: "Planned vs. Actual: 6 months delay" },
    { metric: "Capital Structure", value: "Equity Share: 30%, Repayment Terms: 5 years" },
    { metric: "ROI Forecast", value: "Expected ROI: 12% per annum" },
    { metric: "Investment Breakdown", value: "Seed: ₹0.5 Cr, Growth: ₹1 Cr" },
    { metric: "Strategic Relevance", value: "Supports India's Digital Transformation and Green Energy Goals" },
    { metric: "Economic Impact Estimate", value: "Potential ROI: 3% increase in GDP" },
    { metric: "Social Impact Score", value: "Estimated 15% improvement in energy accessibility" },
    { metric: "Project Categorization", value: "Applied Research, Innovation" },
    { metric: "Impact Assessment", value: "Supports Make in India initiative, aligns with Sustainable Development Goals" },
    { metric: "Funding Amount", value: "Total Funding Needed: ₹3 Cr" },
    { metric: "High-Level Project Overview", value: "Energy storage research in renewable energy" },
    { metric: "Challenges and Guidance Areas", value: "Guidance on scaling the technology, IP protection" },
    { metric: "Methodology Review", value: "Improvement on sampling techniques and experimental controls" },
    { metric: "Networking Recommendations", value: "Connect with National Solar Energy Federation of India" },
    { metric: "Team Satisfaction", value: "Team satisfaction score: 85%" },
    { metric: "Compliance with Ethical Standards", value: "Ethical compliance: 100%" },
    { metric: "Data Quality Metrics", value: "Consistency and accuracy: Verified through external audit" },
    { metric: "Task Completion Rate", value: "Tasks completed: 85%, remaining: 15%" },
    { metric: "Budget Adherence", value: "Spending vs. budget: ₹1.8 Cr out of ₹2 Cr" },
    { metric: "Resource Utilization", value: "Equipment utilization: 95%, manpower efficiency: 90%" },
    { metric: "Risk Management", value: "Identified risks: 3, Mitigation strategies implemented" },
    { metric: "Environmental Impact", value: "Carbon footprint reduced by 20%" }
  ];

  return (
    <section
      id="initiation"
      style={{
        padding: "20px",
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // 80% opacity
        width: "85%",
        margin: "0 auto",
        padding: "2rem",
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      }}
    >

      <h1>Initiation</h1>
      {/* Other Metrics Section */}
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
          {metricsData.map((item, index) => (
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

export default Initiation;