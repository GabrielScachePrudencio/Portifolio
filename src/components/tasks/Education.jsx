import React from "react";
import listaEducation from "../DadosCurriculo/education";

function Education() {
  return (
    <div>
      <div className="section-tag">// EDUCATION</div>
      <div className="section-title">
        My <span className="hl">Learning</span>
      </div>

      <div className="timeline">
        {listaEducation.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="tl-dates">
              {item.dataIn} — {item.dataFi}
            </div>
            <div className="tl-name">{item.name}</div>
            <div className="tl-sub">
              {item.tipo}
              {item.tipo && item.modalidade ? " · " : ""}
              {item.modalidade}
            </div>
            <div className="tl-tags">
              {item.tec.map((t, j) => (
                <span className="tl-tag" key={j}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
