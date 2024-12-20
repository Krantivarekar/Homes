import React from "react";
import Navbar from "./components/Navbar";  // Import Navbar component
import AboutUs from "./components/AboutUs";  // Import About Us section
import WhyWe from "./components/WhyWe";  // Import Why We section
import NewsUpdates from "./components/NewsUpdates";  // Import News and Updates section
import ProjectStats from "./components/ProjectStats";  // Import Project Stats section
import ResearchProcess from "./components/ResearchProcess";  // Import Research Process section
import Footer from "./components/Footer";
import Header from "./components/Header";
import IPRTrends from "./components/IPRTrends";
const AppIP = () => {
  return (
    <div>
      <Header/>
      <Navbar />  
      <ResearchProcess/>
      <ProjectStats />
      <WhyWe />  
      <NewsUpdates /> 
      <IPRTrends/>
      <AboutUs />  
      <Footer/>
    </div>
  );
};


export default AppIP;
