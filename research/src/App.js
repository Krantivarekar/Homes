import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavigationPanel from "./components/NavigationPanel";
import Initiation from "./components/initiation";
import Planning from "./components/Planning";
import Execution from "./components/Execution";
import Monitoring from "./components/Monitoring";
import Closing from "./components/Closing";
import Timeline from "./components/Timeline";
import { Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Timeline />} />
      <Route path="/initiation" element={<Initiation />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/execution" element={<Execution />} />
      <Route path="/monitoring" element={<Monitoring />} />
      <Route path="/closing" element={<Closing />} />
    </Routes>
    <Footer />
  </>
  );
};

export default App;
