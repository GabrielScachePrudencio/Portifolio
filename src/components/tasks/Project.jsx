import React, { useState } from "react";
import listaProjects from "../DadosCurriculo/projects";

const FILTERS = [
  { value: "All",  label: "All areas"      },
  { value: "webF", label: "Web Front-End"  },
  { value: "webB", label: "Web Back-End"   },
  { value: "IA",   label: "Machine Learning"},
  { value: "SD",   label: "System Dev"     },
];

function Project() {
  const [area, setArea]         = useState("All");
  const [preview, setPreview]   = useState(null);

  const filtered = area === "All"
    ? listaProjects
    : listaProjects.filter((p) => p.tipo === area);

  // auto-select first when filter changes
  const displayPreview = preview && filtered.includes(preview) ? preview : filtered[0] || null;

  return (
    <div>
      <div className="projects-top">
        <div>
          <div className="section-tag">// PROJECTS</div>
          <div className="section-title" style={{ marginBottom: 0 }}>
            My <span className="hl">Work</span>
          </div>
        </div>
        <select
          className="projects-select"
          value={area}
          onChange={(e) => { setArea(e.target.value); setPreview(null); }}
        >
          {FILTERS.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
      </div>

      <div className="projects-layout">
        {/* List */}
        <div className="projects-list">
          {filtered.length === 0 ? (
            <p className="project-empty">// no projects found</p>
          ) : (
            filtered.map((p, i) => (
              <div
                key={i}
                className={`project-item ${displayPreview === p ? "selected" : ""}`}
                onMouseEnter={() => setPreview(p)}
                onClick={() => window.open(p.links, "_blank")}
              >
                <div className="project-name">{p.name}</div>
                <div className="project-tags">
                  {p.skils.map((s, j) => (
                    <span className="project-tag" key={j}>{s}</span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Preview panel */}
        <div className="project-preview">
          {displayPreview ? (
            <>
              <img
                className="preview-img"
                src={displayPreview.url}
                alt={displayPreview.name}
              />
              <div
                className="preview-open"
                onClick={() => window.open(displayPreview.links, "_blank")}
              >
                ↗ Open project
              </div>
            </>
          ) : (
            <div className="preview-placeholder">hover a project</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
