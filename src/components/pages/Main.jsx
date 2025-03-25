import React, {useState} from "react";

import Menu from "../tasks/Menu";
import ContactMe from "../tasks/ContactMe";
import AboutMe from "../tasks/AboutMe";
import Skils from "../tasks/Skils";
import Project from "../tasks/Project";
import Experience from "../tasks/Experience";
import Education from "../tasks/Education";


/*
torna-lo resposivel
arrumar education deixar retinho os textos
deixar a imgem de projects do tamanho certa 


*/
function Main(){
    const [inputMenu, setInputMenu] = useState("AboutMe");
    const [mostrarMenu, setMostrarMenu] = useState(true);
    const [mostrarMeuNomePrim, setMostrarMeuNomePrim] = useState(true);

    //para about me 
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deletando, setDeletando] = useState(false);

    return(
        <main className="main">
            
            <Menu setInputMenu={setInputMenu} mostrarMenu={mostrarMenu} setMostrarMenu={setMostrarMenu} mostrarMeuNomePrim={mostrarMeuNomePrim} setMostrarMeuNomePrim={setMostrarMeuNomePrim}/>
            
            <div className="resultadoButtonsMenu" style={{width: mostrarMenu === true && mostrarMeuNomePrim === true ? "5%" : "95%"}}>
                {
                    mostrarMeuNomePrim === false && (

                        <>
                            {inputMenu === "ContactMe" && <ContactMe />}
                            {inputMenu === "AboutMe" && <AboutMe text={text} setText={setText} index={index} setIndex={setIndex} deletando={deletando} setDeletando={setDeletando}/>}
                            {inputMenu === "Skils" && <Skils />}
                            {inputMenu === "Experience" && <Experience />}
                            {inputMenu === "Project" && <Project mostrarMenu={mostrarMenu}/>}
                            {inputMenu === "Education" && <Education />}
                        </>
                    )
                            
            }
            </div>
        </main>
    )
}



export default Main;