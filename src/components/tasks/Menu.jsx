import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Menu = ({ setInputMenu, mostrarMenu, setMostrarMenu, mostrarMeuNomePrim, setMostrarMeuNomePrim }) => {
  const [executouMudanca, setExecutouMudanca] = useState(false);

  const [text, setText] = useState("");
  const fullText = "GABRIEL SCACHE";



  useEffect(() => {
    if (mostrarMeuNomePrim && text.length < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));// add uma letra acada ciclo de tempo
      }, 150); 

      return () => clearTimeout(timer);
    }
  }, [text, mostrarMeuNomePrim]);



  function exibirMenu() {
    setMostrarMenu(!mostrarMenu);
  }

  function mudarInputMenu(event) {
    setInputMenu(event.target.value);
  }

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Dados/GabrielScachePrudencio.pdf";
    link.download = "GabrielScachePrudencio.pdf";
    link.click();
  };

  function mostratMeuNomeNoInicio() {
    if (!executouMudanca) {
      setMostrarMeuNomePrim(false);
      setExecutouMudanca(true);
    }
  }

  return (
    <div className="ContainerbuttonsMenu" style={{ width: mostrarMeuNomePrim ? "95%" : mostrarMenu ? "30%" : "5%" }}>
      {mostrarMeuNomePrim && (
        <div className="textInicialMeuNome">
          <h1>
            {text}
          </h1>
        </div>
      )}

      {!mostrarMeuNomePrim && (
        <div className={"buttonsMenu"}>
          {mostrarMenu && (
            <>
              <button value="ContactMe" onClick={mudarInputMenu}>Contact me</button>
              <button value="AboutMe" onClick={mudarInputMenu}>About me</button>
              <button value="Skils" onClick={mudarInputMenu}>Skills</button>
              <button value="Project" onClick={mudarInputMenu}>Projects</button>
              <button value="Experience" onClick={mudarInputMenu}>Experience</button>
              <button value="Education" onClick={mudarInputMenu}>Education</button>
              <div className="buttonDownload">
                <button onClick={downloadPDF}><AiOutlineDownload size={50} className="text-white" /></button>
              </div>
            </>
          )}
        </div>
      )}

      <button className="right-button" onClick={() => { exibirMenu(); mostratMeuNomeNoInicio(); }}>
        {mostrarMenu ? "<" : ">"}
      </button>
    </div>
  );
};

export default Menu;
