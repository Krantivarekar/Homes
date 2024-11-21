import React, { useState, useEffect } from "react";

const NewsUpdates = () => {
  const [expanded, setExpanded] = useState(null); // To track which news is expanded
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index

  const news = [
    {
      title: "New Research Policy Launched",
      date: "Nov 15, 2024",
      description:
        "The Gujarat government has launched a new research policy to support innovation and development in key sectors. This policy aims to enhance collaboration between research institutes, universities, and industries, focusing on AI, biotechnology, and clean energy.",
    },
    {
      title: "₹200 Cr Sanctioned for AI Research",
      date: "Nov 10, 2024",
      description:
        "A new initiative to boost AI research in Gujarat has been announced with a funding of ₹200 crore. The fund will be used to establish AI research centers, fund projects, and encourage startups to explore artificial intelligence in various sectors.",
    },
    {
      title: "Startup India Collaboration Program",
      date: "Nov 5, 2024",
      description:
        "Gujarat has joined the Startup India Collaboration Program to encourage entrepreneurial innovation. The program will provide resources, mentorship, and financial support to emerging startups working on cutting-edge technologies.",
    },
    {
      title: "National Science Conference in Gujarat",
      date: "Oct 25, 2024",
      description:
        "The National Science Conference 2024 will be held in Gujarat to discuss innovations in science and technology. Researchers and scientists from across the country will gather to share insights and collaborate on various projects.",
    },
    {
      title: "Gujarat's Renewable Energy Initiatives",
      date: "Oct 15, 2024",
      description:
        "Gujarat has rolled out a series of initiatives aimed at promoting renewable energy. These include setting up solar farms, wind turbines, and research grants for clean energy technologies.",
    },
  ];

  const images = [
    "https://th.bing.com/th/id/OIP.b-8XLMjN4viCPGmhh7lt2AHaE-?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.XWKQky524NrZ7622VXFuhQHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.p_fVaov9MY4j7vok7wCVxgHaFY?w=253&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.rrp5HO9r096QKoNk0Q41SAHaEO?w=318&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ];

  const handleReadMore = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expansion
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length); // Loop back to first slide after last
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const changeSlide = (index) => {
    setCurrentSlide(index); // Change slide on dot click
  };

  return (
    <section
      style={{
        

        backgroundColor: "#f4f4f9",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        boxShadow:'none',
      }}
    >
      <div style={{ width: "50%" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2E1E77" , textAlign:'center'}}>
          News & Updates
        </h2>
        <div
          style={{
            height: "300px", // Fixed height for the scrollable area
            overflowY: "auto", // Enable vertical scrolling
            padding: "0 20px",
          }}
        >
          {news.map((item, index) => (
            <div
              key={index}
              style={{
                background: "hsla(220, 40%, 50%, 0.1)",
                padding: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                marginBottom: "10px", // Add margin to separate news items
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#2E1E77",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#555" }}>{item.date}</p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#555",
                  marginTop: "10px",
                  display: expanded === index ? "block" : "-webkit-box",
                  WebkitLineClamp: expanded === index ? "none" : "3",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.description}
              </p>
              <button
                style={{
                  backgroundColor: "#2E1E77",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
                onClick={() => handleReadMore(index)}
              >
                {expanded === index ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider Section */}
      <div
        style={{
          width: "47%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2E1E77" }}>
          Latest Images
        </h2>
        <div
          style={{
            position: "relative",
            width: "80%", // Adjusted the width to make it less wide
            height: "300px",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`News ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>

          {/* Dots for navigation */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => changeSlide(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: currentSlide === index ? "#2E1E77" : "#ccc",
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
