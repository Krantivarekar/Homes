import React from "react";

const NavigationPanel = () => {
  return (
    <nav style={{ width: "200px", borderRight: "1px solid #ddd", padding: "10px" }}>
      <ul>
        <li>Initiation</li>
        <li>Planning</li>
        <li>Execution</li>
        <li>Monitoring</li>
        <li>Closing</li>
      </ul>
    </nav>
  );
};

export default NavigationPanel;
