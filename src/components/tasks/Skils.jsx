import React, { useState } from "react";
import listaSkils from "../DadosCurriculo/skils";

const FILTERS = [
  { value: "All",  label: "All"           },
  { value: "webF", label: "Front-End"     },
  { value: "webB", label: "Back-End"      },
  { value: "IA",   label: "Machine Learning" },
  { value: "SD",   label: "Systems Dev"   },
];

function Skils() {
  const [area, setArea] = useState("All");

  const filtered = area === "All"
    ? listaSkils
    : listaSkils.filter((s) => s.tipo === area);

  return (
    <div>
      <div className="section-tag">// SKILLS</div>
      <div className="section-title">
        My <span className="hl">Stack</span>
      </div>

      <div className="skills-filter">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`filter-btn ${area === f.value ? "active" : ""}`}
            onClick={() => setArea(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="project-empty">// no skills found for this area</p>
      ) : (
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <div className="skill-card" key={i}>
              <img
                className="skill-img"
                src={skill.url}
                alt={skill.name}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skils;
