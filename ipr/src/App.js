import React from "react";
import Header from "./components/Header";
import ResearchProcess from "./components/ResearchProcess";
import ProjectStats from "./components/ProjectStats";
import NewsUpdates from "./components/NewsUpdates";
import Collaborators from "./components/Collaborators";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ResearchProcess />
        <ProjectStats />
        <NewsUpdates />
        <Collaborators />
      </main>
      <Footer />
    </div>
  );
}

export default App;
