// NavigationPanel.jsx
import React from 'react';
import { Link } from 'react-scroll';

const NavigationPanel = () => {
  return (
    <div style={panelStyle}>
      <h3>Navigation</h3>
      <ul style={listStyle}>
        <li style={itemStyle}><Link to="initiation" smooth={true} duration={500}>Initiation</Link></li>
        <li style={itemStyle}><Link to="planning" smooth={true} duration={500}>Planning</Link></li>
        <li style={itemStyle}><Link to="execution" smooth={true} duration={500}>Execution</Link></li>
        <li style={itemStyle}><Link to="monitoring" smooth={true} duration={500}>Monitoring</Link></li>
        <li style={itemStyle}><Link to="closing" smooth={true} duration={500}>Closing</Link></li>
      </ul>
    </div>
  );
};

// Styles for the panel
const panelStyle = {
  width: '200px',
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderRight: '1px solid #ddd',
  position: 'fixed', // Make it fixed on the left side
  height: '100%', // Full height
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const itemStyle = {
  marginBottom: '10px',
};

export default NavigationPanel;
