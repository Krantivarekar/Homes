import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import WhyWe from "./components/WhyWe";
import NewsUpdates from "./components/NewsUpdates";
import ProjectStats from "./components/ProjectStats";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Schemes from "./components/schemes";
import AppRS from "./srcResearch/App";
import AppIP from "./srcipr/App";
import AppS from "./srcstartup/App";
// import AppAuth from "./srcAuth/App";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-we" element={<WhyWe />} />
        <Route path="/updates-news" element={<NewsUpdates />} />
        <Route path="/research-projects" element={<ProjectStats />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/ipr-trends" element={<AppIP />} />
        <Route path="/research" element={<AppRS />} />
        <Route path="/startups" element={<AppS />} />
        {/* <Route path="/signin" element={<AppAuth />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};



export default App;
