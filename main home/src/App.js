import React from "react";
import Navbar from "./components/Navbar";  // Import Navbar component
import AboutUs from "./components/AboutUs";  // Import About Us section
import WhyWe from "./components/WhyWe";  // Import Why We section
import NewsUpdates from "./components/NewsUpdates";  // Import News and Updates section
import ProjectStats from "./components/ProjectStats";  // Import Project Stats section
import Hero from "./components/Hero";  // Import Research Process section
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar />  
      <Hero/>
      <ProjectStats />
      <WhyWe />  
      <NewsUpdates /> 
      <ImageGallery/>
      <AboutUs />  
      <Footer/>
    </div>
  );
};


export default App;
