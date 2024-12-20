import React from "react";

const Closing = () => {
  const projectDetails = {
    projectTitle: "Sustainable Crop Management through Precision Agriculture",
    institute: "Gujarat Agricultural University (GAU)",
    location: "Anand",
    focusArea: "Agriculture, horticulture, agronomy",
  };

  const metricsData = [
    // Final Reports and Assessments
    { metric: "Final Report", value: "The final report summarizing all project activities and outcomes is currently being drafted and will be submitted by the end of Q1." },
    { metric: "Publications and Presentations", value: "Research findings will be presented at three upcoming agricultural conferences in 2025." },
    { metric: "Data Sharing", value: "All collected data will be made publicly available through the university's research portal after project completion." },
    { metric: "Impact Assessment", value: "A comprehensive assessment of the project's impact on local farming practices is scheduled for Q2 next year." },
    { metric: "Impact Evaluation", value: "An evaluation framework has been established to measure long-term sustainability effects, focusing on water usage and crop yields." },
    { metric: "Policy Implications", value: "Findings from this project may influence future agricultural policies related to resource management and sustainable practices." },
    { metric: "Results Dissemination", value: "Results will be disseminated through workshops, community meetings, and published articles in agricultural journals." },
    { metric: "Supporting Continuation of Research", value: "Plans for ongoing research collaborations with local farmers and agricultural organizations are being developed." },

    // Financials and Resource Utilization
    { metric: "Final Impact Report", value: "The impact report summarizing project outcomes, including yield improvements and resource savings, is in preparation." },
    { metric: "Resource Utilization Summary", value: "A detailed summary of all resources used throughout the project will be compiled by the end of Q1." },
    { metric: "Recommendations for Scaling", value: "Recommendations for scaling successful practices to other regions will be formulated based on project findings." },
    { metric: "Final ROI Analysis", value: "A return on investment (ROI) analysis to evaluate financial effectiveness will be conducted after project completion." },
    { metric: "Achievement Summary", value: "A summary of key achievements, including increased crop yields and reduced water usage, will be documented in the final report." },
    { metric: "Financial Close-out Report", value: "The final financial report summarizing all expenditures and funding sources is being prepared for submission." },

    // Intellectual Property Management
    { metric: "Final IP Status", value: 'The current status of intellectual property is under review; potential licensing opportunities for developed technologies are being explored.' },
    { metric: 'Commercialization Status', value:'A commercialization strategy is being developed for technology transfer to local agricultural businesses.' },

   // Media and Public Engagement
   {metric:'Press Release',value:'A press release is scheduled to announce project completion and its outcomes to the public.'},
   {metric:'Publicly Shareable Data',value:'Data visualizations created for public engagement will be released alongside the final report.'},
   {metric:'Success Stories',value:'Case studies highlighting successful implementations of precision agriculture techniques will be published.'},
   {metric:'Media Kits',value:'Media kits prepared for distribution to stakeholders and interested parties will include key findings and visuals from the project.'}
  ];

  return (
    <section
      id="closing"
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
      <h1>Closing</h1>

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

export default Closing;
