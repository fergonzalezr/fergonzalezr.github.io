import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Inicio() {
  return (
    <div className="inicio-main">
      <div className="inicio-def">
        <h2>SOBRE ECOLOGIAS CUIR</h2> aqui colocar un borde al rededor del
        titulo
        <p>
          LO "'CUIR" IMPLiCA UNA APROPIACION LINGUISTICA DE LO QUEER COMO UN
          INTENTO DE ASIMILAR UN CONCEPTO QUE SE HA FORMULADO EN UN CONTEXTO
          EUROCENTRICO Y SITUARIOS EN LOS TERRITORIOS LOCALES, COMO ES EN LA
          EXPERIENCiA DE CHILE. ESTO IMPLiCA POR LO TANTO UNA VOLUNTAD DE
          OBSERVAR NUESTRAS PROPIAS EXPERIENCIAS IDENTITARIAS EN RETACiON A LA
          CiUDAD.
        </p>
        <a href="https://www.plannedparenthood.org/">plannedparenthood.com</a>
      </div>
      <div>
        <button type="button" class="btn btn-outline-secondary" className='more-btn'>
          Secondary
        </button>
      </div>
    </div>
  );
}

export default Inicio;
