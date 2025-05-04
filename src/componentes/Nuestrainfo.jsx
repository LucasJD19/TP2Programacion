import React from 'react'
import Integrantes from '../data/Integrantes';

const Nuestrainfo = () => {
  return (
    <div className="container">
      {Integrantes.map((persona) => (
        <div key={persona.id} className="card">
          <img src={persona.imagen} alt={persona.nombre} />
          <p className='nombrecard'>{persona.nombre}</p> 
          <p className='nombrecard'>{persona.descripcion}</p>
        </div>
      ))}
    </div>
    
  )
}

export default Nuestrainfo;