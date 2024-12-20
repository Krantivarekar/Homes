import React, { useState } from "react";
import './rpd.css';

const ResearchDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const projectDetails = {
    projectTitle: "Sustainable Crop Management through Precision Agriculture",
    institute: "Gujarat Agricultural University (GAU)",
    location: "Anand",
    focusArea: "Agriculture, horticulture, agronomy",
  };

  const trendingProjects = [
    // Array of trending projects with key data
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="header">
        <button className="my-project-button">My Project</button>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search Projects..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
      </header>

      {/* Trending Projects Section */}
      <section className="section trending-projects">
        <h2>Trending Research Projects</h2>
        <div className="projects-list">
          {trendingProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Research Projects in Your Domain */}
      <section className="section trending-domain-projects">
        <h2>Trending Research Projects in Your Domain</h2>
        <div className="domain-filter-slider">
          {/* Slider or Filter Component */}
        </div>
      </section>

      {/* Gujarat Scheme Related Projects Slider */}
      <section className="section gujarat-scheme-projects">
        <h2>Projects under Gujarat Research Schemes</h2>
        <div className="gujarat-slider">
          {/* Slider displaying Gujarat-related research projects */}
        </div>
      </section>
    </div>
  );
};

export default ResearchDashboard;
