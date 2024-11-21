import React from "react";

const Collaborators = () => {
  const collaborators = [
    { name: "IIT Bombay", logo: "https://th.bing.com/th/id/OIP.mhyjzPC9xMHMmskx2XAr2AHaFp?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", desc: "Engineering and Technology" },
    { name: "CSIR", logo: "https://th.bing.com/th/id/OIP.fZbTeVYOxYZNUhAMHXwCgQHaEE?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", desc: "Scientific Research" },
    { name: "DST", logo: "https://th.bing.com/th/id/OIP.EMIg7RpHFxiJZrmiIBqB9QHaHk?w=198&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7", desc: "Department of Science & Technology" },
  ];

  return (
    <section style={{ backgroundColor: "hsla(220, 40%, 50%, 0.1)", padding: "20px" }}>
      <h2>Present Collaborators</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {collaborators.map((collaborator, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={collaborator.logo}
              alt={collaborator.name}
              style={{ borderRadius: "50%", width: "60px", height: "60px" }} // Reduced icon size
            />
            <h3>{collaborator.name}</h3>
            <p>{collaborator.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborators;
