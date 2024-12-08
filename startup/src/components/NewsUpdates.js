import React, { useState } from "react";
import { BiBorderBottom } from "react-icons/bi";

const NewsUpdates = () => {
  const newsItems = [
    {
      title: "DPIIT Recognition for Startups",
      content:
        "DPIIT Recognition helps startups access tax benefits, easier compliance, IPR fast-tracking, and more.",
      detailedContent:
        "The DPIIT Recognition program aims to boost the growth of Indian startups by offering them various tax benefits, facilitating IPR-related processes, and making it easier for them to comply with legal requirements. With the recognition, startups can focus on scaling their operations without worrying about complex regulations and tax liabilities.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "New Tax Exemption Rules for Startups",
      content:
        "The government has introduced new tax exemption rules for startups under the Startup India initiative.",
      detailedContent:
        "The new tax exemption rules introduced by the government provide a significant relief to startups. These rules are designed to help startups save on taxes, thereby improving their financial stability and allowing them to reinvest the savings into their growth and development. This move is part of the government's effort to make India a hub for innovation.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Startup India Annual Report 2024",
      content:
        "The 2024 annual report highlights the growth and achievements of startups across India.",
      detailedContent:
        "The Startup India Annual Report 2024 showcases the immense progress made by Indian startups in various sectors, including technology, healthcare, and education. The report highlights key success stories, innovations, funding milestones, and the role of government initiatives in fostering a startup ecosystem. It also outlines the challenges faced by startups and the ongoing efforts to overcome them.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Government Grants for Innovators",
      content:
        "The government is offering grants and support for innovators working on critical solutions.",
      detailedContent:
        "To encourage innovation, the government has launched several grant schemes for innovators working on cutting-edge solutions in areas such as clean energy, healthcare, and artificial intelligence. These grants are aimed at providing financial assistance to innovators who have the potential to make a positive impact on society. The scheme also includes mentorship and networking opportunities.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Government Grants for Innovators",
      content:
        "The government is offering grants and support for innovators working on critical solutions.",
      detailedContent:
        "To encourage innovation, the government has launched several grant schemes for innovators working on cutting-edge solutions in areas such as clean energy, healthcare, and artificial intelligence. These grants are aimed at providing financial assistance to innovators who have the potential to make a positive impact on society. The scheme also includes mentorship and networking opportunities.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Government Grants for Innovators",
      content:
        "The government is offering grants and support for innovators working on critical solutions.",
      detailedContent:
        "To encourage innovation, the government has launched several grant schemes for innovators working on cutting-edge solutions in areas such as clean energy, healthcare, and artificial intelligence. These grants are aimed at providing financial assistance to innovators who have the potential to make a positive impact on society. The scheme also includes mentorship and networking opportunities.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Government Grants for Innovators",
      content:
        "The government is offering grants and support for innovators working on critical solutions.",
      detailedContent:
        "To encourage innovation, the government has launched several grant schemes for innovators working on cutting-edge solutions in areas such as clean energy, healthcare, and artificial intelligence. These grants are aimed at providing financial assistance to innovators who have the potential to make a positive impact on society. The scheme also includes mentorship and networking opportunities.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Government Grants for Innovators",
      content:
        "The government is offering grants and support for innovators working on critical solutions.",
      detailedContent:
        "To encourage innovation, the government has launched several grant schemes for innovators working on cutting-edge solutions in areas such as clean energy, healthcare, and artificial intelligence. These grants are aimed at providing financial assistance to innovators who have the potential to make a positive impact on society. The scheme also includes mentorship and networking opportunities.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Government Grants for Innovators",
      content:
        "The government is offering grants and support for innovators working on critical solutions.",
      detailedContent:
        "To encourage innovation, the government has launched several grant schemes for innovators working on cutting-edge solutions in areas such as clean energy, healthcare, and artificial intelligence. These grants are aimed at providing financial assistance to innovators who have the potential to make a positive impact on society. The scheme also includes mentorship and networking opportunities.",
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
  ];

  const [selectedNews, setSelectedNews] = useState(0); // Default to the first news item
  const [expanded, setExpanded] = useState(false); // Track expanded section state

  const handleNewsSelect = (index) => {
    setSelectedNews(index);
    setExpanded(false); // Reset expanded state when a new news item is selected
  };

  const handleReadMore = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Recent Updates & News</h2>
      <div style={styles.mainContent}>
        {/* Left Section - News List */}
        <div style={styles.leftSection}>
          {newsItems.map((news, index) => (
            <div
              key={index}
              style={{
                ...styles.newsItem,
                backgroundColor: selectedNews === index ? "#f0f0f0" : "transparent",
              }}
              onClick={() => handleNewsSelect(index)}
            >
              <p style={styles.newsTitle}>{news.title}</p>
            </div>
          ))}
        </div>

        {/* Vertical Line Separator */}
        <div style={styles.separator}></div>

        {/* Right Section - News Content */}
        <div style={styles.rightSection}>
          <div style={styles.newsContent}>
            <img
              src={newsItems[selectedNews].image}
              alt="News Icon"
              style={styles.newsImage}
            />
            <h3>{newsItems[selectedNews].title}</h3>
            <p>{newsItems[selectedNews].content}</p>
            {expanded && (
              <div style={styles.detailedContent}>
                <p>{newsItems[selectedNews].detailedContent}</p>
              </div>
            )}
            <button
              onClick={handleReadMore}
              style={styles.readMoreButton}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "20px",
    textAlign: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  // 80% opacity
    borderRadius:"5px",
    position: "relative",
    borderRight: '2px solid #ccc',
    boxShadow: "0 0px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "36px",
    color: "#2e1e77",
    marginBottom: "20px",
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    height: "100%", // Make sure to use full height
  },
  leftSection: {
    flex: "1 1 30%",
    padding: "10px",
    height: "400px", // Fixed height for the left section
    overflowY: "auto", // Enable vertical scrolling
    scrollbarWidth: "none", // Hide scrollbar in Firefox
    msOverflowStyle: "none", // Hide scrollbar in IE/Edge
  },
  newsItem: {
    padding: "10px",
    cursor: "pointer",
    marginBottom: "10px",
    borderRadius: "2px",
    transition: "background-color 0.3s ease",
    borderRight: '2px solid #ccc',
    boxShadow: "0 0px 8px rgba(0, 0, 0, 0.1)",
  },
  newsTitle: {
    fontSize: "1.1rem",
    color: "#333",
  },
  separator: {
    borderLeft: "2px solid #ccc", // Vertical separator
    height: "100%", // Ensure it takes full height of parent
  },
  rightSection: {
    flex: "1 1 60%",
    padding: "20px",
  },
  newsContent: {
    textAlign: "left",
  },
  newsImage: {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
  },
  detailedContent: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "#555",
  },
  readMoreButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#2e1e77",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};


export default NewsUpdates;
