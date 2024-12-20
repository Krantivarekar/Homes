import React, { useState } from 'react';
import Layout from './components/Layout';

import Navbar from "./components/Navbar";  // Import Navbar component
import AboutUs from "./components/AboutUs";  // Import About Us section
import Footer from "./components/Footer";
import Header from "./components/Header";
// import RisingResearchProjects from './components/RisingResearchProjects';
import Initiation from "./components/Initialization";

const App = () => {

  return (
    <div>
      <Header />
      <Navbar />
      
      <RisingResearchProjects/>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
