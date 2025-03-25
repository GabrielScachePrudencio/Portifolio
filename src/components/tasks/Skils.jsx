import React, {useState} from "react";

import listaSkils from "../DadosCurriculo/skils";

function Skils(){
    const [areaEscolhida, setAreaEscolhida] = useState("All");

    return(
        <div className="Skils">
    
            <div className="tiltleSkils">
                <p className="codigoHTML">{"<h1>"}</p>
                <h1 className="roxo"> My Skils </h1>
                <p className="codigoHTML">{"</h1>"}</p>
            </div>

            <div className="setorDeEscolha">
                <h2>Escolha uma area para filtrar as habilidades </h2>

                <select name="" className="opcoesSkils" value={areaEscolhida} onChange={(e) => setAreaEscolhida(e.target.value)}>
                    <option value={"All"}>Todas as areas</option>
                    <option value={"webF"}>Web Front-End</option>
                    <option value={"webB"}>Web Back-End </option>
                    <option value={"IA"}>Machine Learning</option>
                    <option value={"SD"}>System Development</option>
                </select>


            </div>

            <div className="mostrarSkils">
                {
                    areaEscolhida === "All" ? (
                        listaSkils.map((skill, index) => (
                            <div className="skilsName">
                                <img key={index} src={skill.url} alt={skill.name} height={30} />
                                <div>
                                    <p>{skill.name}</p>
                                </div>
                            </div>
                        )
                        )
                    )
                    : 
                    (

                        listaSkils.filter(skill => skill.tipo === areaEscolhida).length === 0 ? (
                            <p>Sem habilidades</p>
                        ) : (
                            listaSkils.map((skill, index) => (
                                areaEscolhida === skill.tipo && (
                                    <div key={index} className="skilsName">
                                        <img src={skill.url} alt={skill.name} height={30} />
                                        <div>
                                            <p>{skill.name}</p>
                                        </div>
                                    </div>
                                )
                            ))
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Skils;
