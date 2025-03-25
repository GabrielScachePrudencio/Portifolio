import React, {useEffect} from "react";

const AboutMe = ({text, setText, index, setIndex, deletando, setDeletando}) => {
    
    let fulltext = ["WEB DEVELOPER", "SYSTEMS DEVELOPER", "DATA SCIENTIST"]
    

    useEffect(() => {
        const currentText = fulltext[index];

        if(deletando) {
            if(text.length > 0) {
                const timer = setTimeout(() => {
                    setText(currentText.substring(0, text.length - 1));
                }, 250); 
                return () => clearTimeout(timer);
            } else {
                setDeletando(false);
                setIndex((prevIndex) => (prevIndex + 1) % fulltext.length);
            }
        } else {
            if (text.length < currentText.length) {
                const timer = setTimeout(() => {
                  setText(currentText.substring(0, text.length + 1));
                }, 250);
                return () => clearTimeout(timer);
            }
            else {
                
                setDeletando(true);
                
            }
        }
    
    }, [text, index, deletando]);

    return(
        <div className="AboutMe">
            <div className="tiltleAboutMe">
                <p className="codigoHTML">{"<h1>"}</p>
                <h1>Hi</h1>
                <h1>I’M GABRIEL </h1>
                <h1 className="roxo">{text || "_"}</h1>
                <p className="codigoHTML">{"</h1>"}</p>
            </div>
            <div className="paragrafosAboutMe1">
                <div className="paragrafosAboutMe2">
                        <p className="codigoHTML">{"<p>"}</p>
                        <p className="paragrafo">I'm a Web Developer always seeking to learn and improve my skills. I work with React, Java and C, creating functional and user-friendly websites. Currently, I'm exploring Java and backend development to expand my expertise. </p>    
                        <p className="codigoHTML">{"</p>"}</p>
                </div>
                
                <div className="paragrafosAboutMe3">
                        <p className="codigoHTML">{"<p>"}</p>
                        <p className="paragrafo"> I'm a Web Developer studying at IFSP Araraquara, always looking to improve my skills. I take online courses to stay updated with new technologies and trends. My focus is on front-end and back-end development, creating efficient and dynamic web solutions. </p>
                        <p className="codigoHTML">{"</p>"}</p>
                </div>

            </div>
        </div>
    )
}



export default AboutMe;