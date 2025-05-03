import React from 'react'
import "../index.css"
import Map from './Map'

const Footer = () => {
  return (
    <>
        <div className='footer'>
        <h3 className="titles_header"> FRT UTN 2025 </h3>
        <p className="p_footer">La Facultad Regional Tucumán es una unidad académica dependiente de la Universidad Tecnológica Nacional establecida en 1954 en forma conjunta con las facultades regionales de Bahía Blanca y La Plata. Su sede se encuentra en la zona norte de la ciudad de San Miguel de Tucumán</p>
        <Map/>
        </div>
    </>
  )
}

export default Footer