import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "AboutMe",    icon: "◈", label: "About Me"   },
  { id: "Skills",     icon: "◉", label: "Skills"     },
  { id: "Project",    icon: "◧", label: "Projects"   },
  { id: "Experience", icon: "◎", label: "Experience" },
  { id: "Education",  icon: "◈", label: "Education"  },
  { id: "ContactMe",  icon: "◉", label: "Contact"    },
];

function Sidebar({ activePage, setActivePage, collapsed, setCollapsed }) {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-collapsed-icon">G</div>
        <div className="sidebar-logo">
          // PORTFOLIO <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
        </div>
        <div className="sidebar-name">
          GABRIEL <span>SCACHE</span>
        </div>

        <button
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        >
          {collapsed ? "❯" : "❮"}
        </button>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? "active" : ""}`}
            onClick={() => setActivePage(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer / socials */}
      <div className="sidebar-footer">
        <a
          className="social-link"
          href="https://github.com/GabrielScachePrudencio"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub size={16} />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/gabriel-scache-5678492b0/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          className="social-link"
          href="mailto:bielscache@gmail.com"
          title="Email"
        >
          <FaEnvelope size={16} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
