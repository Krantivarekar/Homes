import React from "react";

const IPRTrends = () => {
  const IPRtrends = [
    {
        title: "IPR Awareness session by Dr. Unat Pandit sir",
      description: (
        <iframe
          width="100%"
          height="225"
          src="https://www.youtube.com/embed/OpJih9oL-FA"
          title="AI-based Healthcare Solutions"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      buttonText: "Know more",
      url: "https://www.youtube.com/embed/OpJih9oL-FA",

      },
      {
        title: "IP Management",
      description: (
        <iframe
          width="100%"
          height="225"
          src="https://www.youtube.com/watch?v=PRBGCk0UfOs"
          title="AI-based Healthcare Solutions"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      buttonText: "Know more",
      url: "https://www.youtube.com/embed/OpJih9oL-FA",

      },
      {
        title: "Translating ideas to inaventions",
      description: (
        <iframe
          width="100%"
          height="225"
          src="https://www.youtube.com/playlist?list=PLmP9QrmTNPqD2edlEZEo4aJOLFvCnT8z1"
          title="AI-based Healthcare Solutions"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      buttonText: "Know more",
      url: "https://www.youtube.com/embed/OpJih9oL-FA",

      },
      {
        title:
          "A STUDY OF INTELLECTUAL PROPERTY RIGHTS AND ITS SIGNIFICANCE FOR BUSINESS",
        description:
          "Development of smart agriculture technologies to improve productivity and sustainability for Gujarat's farmers.",
        buttonText: "Know more",
        url: "https://www.researchgate.net/publication/344217569_A_STUDY_OF_INTELLECTUAL_PROPERTY_RIGHTS_AND_ITS_SIGNIFICANCE_FOR_BUSINESS",
      },
    ];
  
    return (
      <section
        id="rrp"
        style={{
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // 80% opacity
        }}
      >
        <h2
          style={{
            fontSize:"36px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
        IPR Trends        
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {IPRtrends.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "280px",
                padding: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                  color: "#333",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "20px",
                  color: "#555",
                }}
              >
                {project.description}
              </p>
              <button
                style={{
                  backgroundColor: "#2e1e77",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#e06900")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#f57c00")}
                onClick={() =>
                  project.url
                    ? window.open(project.url, "_blank")
                    : alert("More details coming soon!")
                }
              >
                {project.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default IPRTrends;
