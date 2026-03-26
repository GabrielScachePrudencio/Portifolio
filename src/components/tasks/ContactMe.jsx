import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactMe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="section-tag">// CONTACT</div>
      <div className="section-title">
        Get in <span className="hl">Touch</span>
      </div>

      <div className="contact-grid">
        {/* Photo */}
        <div>
          <img
            className={`contact-photo ${expanded ? "expanded" : ""}`}
            src="/imgs/fotoperfil/fotoPerfil.png"
            alt="Gabriel Scache"
            onClick={() => setExpanded(!expanded)}
          />

          <div className="contact-social-row">
            <a
              className="contact-social-btn"
              href="https://github.com/GabrielScachePrudencio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={14} /> GitHub
            </a>
            <a
              className="contact-social-btn"
              href="https://www.linkedin.com/in/gabriel-scache-5678492b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={14} /> LinkedIn
            </a>
            <a
              className="contact-social-btn"
              href="mailto:bielscache@gmail.com"
            >
              <FaEnvelope size={14} /> Email
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="contact-info">
          <div>
            <div className="contact-label">NAME</div>
            <div className="contact-big-name">
              Gabriel <span>Scache</span>
            </div>
          </div>
          <div>
            <div className="contact-label">EMAIL</div>
            <div className="contact-value">bielscache@gmail.com</div>
          </div>
          <div>
            <div className="contact-label">LOCATION</div>
            <div className="contact-value">Araraquara, SP — Brazil</div>
          </div>
          <div>
            <div className="contact-label">STATUS</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <span className="status-dot-indicator" />
              Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
