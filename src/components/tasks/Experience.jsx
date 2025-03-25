import React from "react";

import listaExperience from "../DadosCurriculo/exeperience";

function Education(){
    return(
        <div className="Education">
            <div className="tiltleSkils">
                <p className="codigoHTML">{"<h1>"}</p>
                <h1 className="roxo"> Experience </h1>
                <p className="codigoHTML">{"</h1>"}</p>
            </div>
            <div className="mostrarEducation">
                {
                    listaExperience.map((skill, index) => (
                        <div className="containerEdu">
                            <div className="datas">
                                <p>{skill.dataIn + "-"} </p> <p> {skill.dataFi}</p> 
                            </div>
                            <div className="nomeETC">
                                <h2>{skill.instituicao}</h2>
                                <p>{skill.modalidade}</p>
                                <div className="skilsDeCadaProjetoEd">
                                    {skill.tec.map((skil, index) => (
                                        <p>{skil}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default Education;