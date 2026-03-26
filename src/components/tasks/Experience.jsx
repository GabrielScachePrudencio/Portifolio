import React from "react";
import listaExperience from "../DadosCurriculo/exeperience";

function Experience() {
  return (
    <div>
      <div className="section-tag">// EXPERIENCE</div>
      <div className="section-title">
        Work <span className="hl">History</span>
      </div>

      <div className="timeline">
        {listaExperience.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="tl-dates">
              {item.dataIn} — {item.dataFi}
            </div>
            <div className="tl-name">{item.instituicao}</div>
            <div className="tl-sub">{item.modalidade}</div>
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

export default Experience;
