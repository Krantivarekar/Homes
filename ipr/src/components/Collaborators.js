import React from "react";

const Collaborators = () => {
  const iprInstitutes = [
    { 
      name: "Indian Patent Office", 
      logo: "https://th.bing.com/th?id=OIP.ttrMGJgcP1foipZsNg_IsgHaHa&w=214&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", 
      desc: "Government agency responsible for granting patents in India" 
    },
    { 
      name: "World Intellectual Property Organization (WIPO)", 
      logo: "https://th.bing.com/th?id=OIP.ttrMGJgcP1foipZsNg_IsgHaHa&w=214&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", 
      desc: "Global organization focused on protecting intellectual property rights" 
    },
    { 
      name: "European Patent Office (EPO)", 
      logo: "https://th.bing.com/th?id=OIP.ttrMGJgcP1foipZsNg_IsgHaHa&w=214&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", 
      desc: "Provides patents across Europe" 
    },
    
  ];

  return (
    <section style={{ backgroundColor: "hsla(220, 40%, 50%, 0.1)", padding: "20px" }}>
      <h2>IPR Institutes working with us</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {iprInstitutes.map((institute, index) => (
          <div key={index} style={{ textAlign: "center", margin: "10px" }}>
            <img
              src={institute.logo}
              alt={institute.name}
              style={{
                borderRadius: "50%", 
                width: "60px", 
                height: "60px", 
                objectFit: "contain",
              }} // Icon styling
            />
            <h3>{institute.name}</h3>
            <p>{institute.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborators;
