// import React from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const Evaluation = () => {
//   const dummyData = {
//     progressUpdates: 75,
//     scopeChanges: 5,
//     experimentalResults: [80, 90, 85, 70],
//     budgetUsage: 60,
//     resourceUsage: 70,
//     ipUpdates: 3,
//     challengesEncountered: 4,
//     prototypeDevelopment: 80,
//     marketFeedback: ["Positive", "Neutral", "Negative"],
//     fundingUtilization: 85,
//     commercializationProgress: 65,
//     deliverableReports: 7,
//     impactAnalysis: [50, 60, 70],
//     policyImplications: [2, 3, 1],
//   };

//   const containerStyle = {
//     position: "relative",
//     width: "85%",
//     margin: "0 auto",
//     padding: "2rem",
//     background: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: "10px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
//   };

//   const chartContainerStyle = {
//     width: "60%",
//     margin: "auto",
//     height: "300px", // Specify height
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
//         Research Project Monitoring Dashboard
//       </h1>

//       {/* Progress Updates */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#3b82f6" }}>Progress Updates</h2>
//         <p>Overall progress: {dummyData.progressUpdates}%</p>
//         <div style={chartContainerStyle}>
//           <Line
//             data={{
//               labels: ["Jan", "Feb", "Mar", "Apr"],
//               datasets: [
//                 {
//                   label: "Progress Over Time",
//                   data: dummyData.experimentalResults,
//                   borderColor: "#3b82f6",
//                   backgroundColor: "#93c5fd",
//                 },
//               ],
//             }}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: { position: "top" },
//               },
//             }}
//           />
//         </div>
//       </div>

//       {/* Scope Changes */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#ff9800" }}>Scope Changes</h2>
//         <p>Number of scope changes: {dummyData.scopeChanges}</p>
//       </div>

//       {/* Budget Usage */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#4caf50" }}>Budget Usage</h2>
//         <div style={chartContainerStyle}>
//           <Pie
//             data={{
//               labels: ["Used", "Remaining"],
//               datasets: [
//                 {
//                   data: [dummyData.budgetUsage, 100 - dummyData.budgetUsage],
//                   backgroundColor: ["#4caf50", "#f44336"],
//                 },
//               ],
//             }}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: { position: "top" },
//               },
//             }}
//           />
//         </div>
//       </div>

//       {/* Resource Usage */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#ff5722" }}>Resource Usage</h2>
//         <p>Resource Usage: {dummyData.resourceUsage}%</p>
//       </div>

//       {/* Intellectual Property Updates */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#673ab7" }}>Intellectual Property Updates</h2>
//         <p>New IP updates: {dummyData.ipUpdates}</p>
//       </div>

//       {/* Challenges Encountered */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#9c27b0" }}>Challenges Encountered</h2>
//         <p>Challenges: {dummyData.challengesEncountered}</p>
//       </div>

//       {/* Prototype Development */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#2196f3" }}>Prototype Development</h2>
//         <p>Progress: {dummyData.prototypeDevelopment}%</p>
//       </div>

//       {/* Market Feedback */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#00bcd4" }}>Market Feedback</h2>
//         <p>
//           Feedback distribution: Positive ({dummyData.marketFeedback[0]}), Neutral
//           ({dummyData.marketFeedback[1]}), Negative ({dummyData.marketFeedback[2]})
//         </p>
//       </div>

//       {/* Funding Utilization */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#c2185b" }}>Funding Utilization</h2>
//         <p>Utilized: {dummyData.fundingUtilization}%</p>
//       </div>

//       {/* Commercialization Progress */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#8bc34a" }}>Commercialization Progress</h2>
//         <p>Progress: {dummyData.commercializationProgress}%</p>
//       </div>

//       {/* Impact Analysis */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2 style={{ color: "#673ab7" }}>Impact Analysis</h2>
//         <div style={chartContainerStyle}>
//           <Bar
//             data={{
//               labels: ["Economic", "Social", "Environmental"],
//               datasets: [
//                 {
//                   label: "Impact Score",
//                   data: dummyData.impactAnalysis,
//                   backgroundColor: "#673ab7",
//                 },
//               ],
//             }}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: { position: "top" },
//               },
//             }}
//           />
//         </div>
//       </div>

//       {/* Policy Implications */}
//       <div>
//         <h2 style={{ color: "#ff5722" }}>Policy Implications</h2>
//         <p>
//           Policy changes: Minor ({dummyData.policyImplications[0]}), Moderate ({dummyData.policyImplications[1]}), Major ({dummyData.policyImplications[2]})
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Evaluation;
