import React, { useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";

const WORDS = ["WEB DEVELOPER", "SYSTEMS DEVELOPER", "DATA SCIENTIST"];

function AboutMe({ text, setText, index, setIndex, deletando, setDeletando }) {
  useEffect(() => {
    const current = WORDS[index];

    if (deletando) {
      if (text.length > 0) {
        const t = setTimeout(() => setText(current.substring(0, text.length - 1)), 100);
        return () => clearTimeout(t);
      } else {
        setDeletando(false);
        setIndex((i) => (i + 1) % WORDS.length);
      }
    } else {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.substring(0, text.length + 1)), 120);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeletando(true), 1400);
        return () => clearTimeout(t);
      }
    }
  }, [text, index, deletando]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Dados/GabrielScachePrudencio.pdf";
    link.download = "GabrielScachePrudencio.pdf";
    link.click();
  };

  return (
    <div className="about-hero">
      {/* Left */}
      <div className="about-left">
        <div className="about-tagline">WEB DEVELOPER</div>

        <div className="about-big-title">
          Hi, I'm<br />
          <span className="name-hl">GABRIEL</span>
        </div>

        <div className="typewriter-line">
          <span>{text || " "}</span>
          <span className="typewriter-cursor" />
        </div>

        <p className="about-bio">
          Web Developer always seeking to learn and improve. I work with React,
          Java and C, creating functional and user-friendly websites. Currently
          exploring backend development to expand my expertise.
        </p>
        <p className="about-bio">
          Studying at IFSP Araraquara. I take online courses to stay updated
          with new technologies. Focus on front-end and back-end, building
          efficient and dynamic web solutions.
        </p>

        <button className="download-btn" onClick={downloadCV}>
          <AiOutlineDownload size={16} />
          Download CV
        </button>

        <div className="status-available">
          <span className="status-dot-indicator" />
          Available for work
        </div>
      </div>

      {/* Right – terminal card */}
      <div className="about-right">
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <div className="terminal-title-label">gabriel@portfolio:~</div>
          </div>
          <div className="terminal-body">
            <div className="t-line">
              <span className="t-prompt">$</span>
              <span className="t-key">cat</span>
              <span className="t-val">profile.json</span>
            </div>
            <br />
            <div className="t-line"><span className="t-comment">{"{"}</span></div>
            {[
              ['"name"',     '"Gabriel Scache"'],
              ['"role"',     '"Web Developer"'],
              ['"location"', '"Araraquara, BR"'],
              ['"stack"',    '["React","Java","C"]'],
            ].map(([k, v]) => (
              <div className="t-line indent" key={k}>
                <span className="t-key">{k}</span>
                <span className="t-comment">:</span>
                <span className="t-val">{v}</span>
                <span className="t-comment">,</span>
              </div>
            ))}
            <div className="t-line indent">
              <span className="t-key">"status"</span>
              <span className="t-comment">:</span>
              <span className="t-str">"open_to_work"</span>
            </div>
            <div className="t-line"><span className="t-comment">{"}"}</span></div>
            <br />
            <div className="t-line">
              <span className="t-prompt">$</span>
              <span className="t-val" style={{ animation: "blink 1s step-end infinite" }}>_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
