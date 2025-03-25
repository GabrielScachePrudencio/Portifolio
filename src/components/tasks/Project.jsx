import React, {useState} from "react";

import listaProjects from "../DadosCurriculo/projects";


const Project = ({mostrarMenu}) => {
    const [areaEscolhida, setAreaEscolhida] = useState("All");
    const [urlAtual, setUrlAtual] = useState("/imgs/projects/projListas.png");

    function mostrarImgDaUrlAtual(event){
        setUrlAtual(event.currentTarget.getAttribute("data-url"));
    }

    return(
        <div className="Projecs">
            <div className="topSkils">
                <div className="tiltleSkils">
                    <p className="codigoHTML">{"<h1>"}</p>
                    <h1 className="roxo"> My Projects </h1>
                    <p className="codigoHTML">{"</h1>"}</p>
                </div>

                <select name="" className="opcoesSkils" value={areaEscolhida} onChange={(e) => setAreaEscolhida(e.target.value)}>
                        <option value={"All"}>Todas as areas</option>
                        <option value={"webF"}>Web Front-End</option>
                        <option value={"webB"}>Web Back-End </option>
                        <option value={"IA"}>Machine Learning</option>
                        <option value={"SD"}>System Development</option>
                </select>
            </div>
            <div style={{display:"flex",  flexDirection: mostrarMenu ? "column" : "row-reverse"}}>
                <div className="mostrarProjects" style={{
                     height: mostrarMenu ? "300px" : "600px",
                     overflow:"auto"
                }}>
                    
                    {   
                        listaProjects.filter(skill => areaEscolhida === "All" || skill.tipo === areaEscolhida).length === 0 ? (
                            <div className="semProjetos">
                                <h2>Sem projetos</h2>
                            </div>
                        ) : (

                        
                        listaProjects.filter(skill => areaEscolhida === "All" || skill.tipo === areaEscolhida)
                        .map((skill, index) => (
                            <div
                            href={skill.links}
                            key={index} 
                            className="projectsIndi" 
                            data-url={skill.url} 
                            onMouseEnter={mostrarImgDaUrlAtual}
                            onClick={() => window.open(skill.links, "_blank")}
                            style={{
                                width: mostrarMenu ? "auto" : "900px"
                            }}
                            >
                                    <div className="skilsDeCadaProjeto">
                                            {skill.skils.map((skil, index) => (
                                                <p key={index}>{skil}</p>
                                            ))}
                                    </div>
                                    <h2>{skill.name}</h2>
                                {
                                    skill.name === "" && "Sem projetos" 
                                }
                            </div>
                            ))
                    
                )
                }

                </div>

                <div className="mostrarImgProject" 
                    style={
                        {
                            padding: mostrarMenu===false && "10% 5% 10% 0%",
                            textAlign: "center"
                        }
                    }
                >
                    <img src={urlAtual} alt="" width={mostrarMenu===false && "100%"}/>
                </div>
            </div>
        </div>
    )
}



export default Project;