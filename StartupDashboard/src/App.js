import React, { useState } from "react";
import Navbar from "./components/components/Navbar.js";
import Footer from "./components/components/Footer.js";
import Header from "./components/components/Header.js";
// import NavigationPanel from "./components/componenets/NavigationPanel.js";
import Initiation from "./components/components/ConceptualPhase.js";
import Planning from "./components/components/PrincipalPhase.js";
import Execution from "./components/components/FinancialPhase.js";
import Monitoring from "./components/components/NewGrantPhase.js";
import Closing from "./components/components/Closing.js";
import Timeline from "./components/components/Timeline.js";
import { Routes, Route} from 'react-router-dom';
import ConceptualPhase from "./components/components/ConceptualPhase.js";
import PrinciplePhase from "./components/components/PrincipalPhase.js";
import FinancePhase from "./components/components/FinancialPhase.js";
import NewGrant from "./components/components/NewGrantPhase.js";
import Grant from "./components/components/Grant.js";
import NextLevel from "./components/components/NextLevel.js";
import StartupEstablished from "./components/components/StartupEstablished.js";


const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Timeline />} />
      <Route path="/1_phase" element={<ConceptualPhase />} />
      <Route path="/2_phase" element={<PrinciplePhase />} />
      <Route path="/phase3" element={<FinancePhase />} />
      <Route path="/phase4" element={<NewGrant />} />
      <Route path="/phase5" element={<Grant />} />
      <Route path="/phase6" element={<NextLevel />} />
      <Route path="/phase7" element={<StartupEstablished />} />
    </Routes>
    <Footer />
  </>
  );
};

export default App;