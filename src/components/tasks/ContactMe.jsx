import React,  {useState} from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function ContactMe(){
    const [imgExpandida, setImgExpandida] = useState(false);

    function toggleImgExpandida(){
        setImgExpandida(!imgExpandida);
    }

    return(
        <div className="ContactMe">
        {
            imgExpandida === false 
            ?
            (
                
                <div style={{"backdropFilter": imgExpandida && "blur(10px)", "zIndex": imgExpandida && "-1"}}>
                    <img src="/imgs/fotoperfil/fotoPerfil.png" alt="" onClick={toggleImgExpandida} height={300} width={300}/>
                    
                    <div className="tiltleContactMe">
                        <p>{"<h1>"}</p>
                        <h1 className="roxo">Gabriel Scache</h1>
                        <p>{"</h1>"}</p>
                    </div>

                    <div className="icones">
                        <a href="https://github.com/GabrielScachePrudencio" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-scache-5678492b0/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="mailto:bielscache@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={30} />
                        </a>
                    </div>    
                </div>
                
            ) 
            :
            (   
                <div className="imgExpandida">
                    <div className="fundoBorrado" onClick={toggleImgExpandida}></div>
                    <img src="/imgs/fotoperfil/fotoPerfil.png" alt="" className="imagemGrande" onClick={toggleImgExpandida} />
                </div>
            )
        }
        </div>
    )
}



export default ContactMe;