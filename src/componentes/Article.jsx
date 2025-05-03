import React from 'react'
import "../index.css"

const Article = ({ lenguajes }) => {
  return (
    <article className="articulo">
      <div className="row">
        {lenguajes.slice(0, 3).map((lenguaje) => (
          <div className="fila_1" key={lenguaje.id}>
            <div className="col">
              <a href="" className="ancla_card">
                <img src={lenguaje.imagen} alt={lenguaje.nombre} />
                <h4>{lenguaje.nombre}</h4>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        {lenguajes.slice(3, 6).map((lenguaje) => (
          <div className="fila_2" key={lenguaje.id}>
            <div className="col">
              <a href="" className="ancla_card">
                <img src={lenguaje.imagen} alt={lenguaje.nombre} />
                <h4>{lenguaje.nombre}</h4>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        {lenguajes.slice(6, 9).map((lenguaje) => (
          <div className="fila_3" key={lenguaje.id}>
            <div className="col">
              <a href="" className="ancla_card">
                <img src={lenguaje.imagen} alt={lenguaje.nombre} />
                <h4>{lenguaje.nombre}</h4>
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Article;
