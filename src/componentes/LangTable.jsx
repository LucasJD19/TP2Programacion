import React from 'react'
import "../index.css"


const LangTable = ({ lenguajes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {lenguajes.map((lenguaje) => (
          <tr key={lenguaje.id}>
            <td>{lenguaje.id}</td>
            <td>{lenguaje.nombre}</td>
            <td>{lenguaje.tipo}</td>
            <td>{lenguaje.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LangTable;

