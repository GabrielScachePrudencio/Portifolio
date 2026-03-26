import React, { useState } from "react";
import Sidebar from "../tasks/Sidebar";
import AboutMe from "../tasks/AboutMe";
import Skills from "../tasks/Skils";
import Project from "../tasks/Project";
import Experience from "../tasks/Experience";
import Education from "../tasks/Education";
import ContactMe from "../tasks/ContactMe";
import "../../styles/portfolio.css";

function Main() {
  const [activePage, setActivePage] = useState("AboutMe");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // typewriter state (lifted so it persists when navigating back)
  const [twText, setTwText]     = useState("");
  const [twIndex, setTwIndex]   = useState(0);
  const [twDeleting, setTwDeleting] = useState(false);

  return (
    <div className="portfolio-app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div className="portfolio-content">
        <div className={`page ${activePage === "AboutMe" ? "active" : ""}`}>
          <AboutMe
            text={twText}       setText={setTwText}
            index={twIndex}     setIndex={setTwIndex}
            deletando={twDeleting} setDeletando={setTwDeleting}
          />
        </div>
        <div className={`page ${activePage === "Skills" ? "active" : ""}`}>
          <Skills />
        </div>
        <div className={`page ${activePage === "Project" ? "active" : ""}`}>
          <Project />
        </div>
        <div className={`page ${activePage === "Experience" ? "active" : ""}`}>
          <Experience />
        </div>
        <div className={`page ${activePage === "Education" ? "active" : ""}`}>
          <Education />
        </div>
        <div className={`page ${activePage === "ContactMe" ? "active" : ""}`}>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default Main;