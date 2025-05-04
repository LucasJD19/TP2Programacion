import React, { useState } from 'react';
import Aside from './Aside';
import Article from './Article';
import LangTable from './LangTable';
import NuestraInfo from './Nuestrainfo';
import "../index.css"

export default function MainHome({ lenguajes }) {
    const [mostrarInfo, setMostrarInfo] = useState(false);
  
    return (
      <div>
        <nav>
          <a href="#" onClick={() => setMostrarInfo(true)} className="ancla_acerca">Acerca de Nosotros</a>
        </nav>
  
        {!mostrarInfo ? (
          <main className="principal">
            <br />
            <Aside />
            <Article lenguajes={lenguajes} />
            <LangTable lenguajes={lenguajes} />
            <br /><br />
          </main>
        ) : (
          <div>
            <br />
            <NuestraInfo />
            <br />
            <button style={{marginLeft:"670px"}} onClick={() => setMostrarInfo(false)} >Volver al Home</button>
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }

