import React from 'react'
import "../index.css"
const LangTable = () => {
  return (
    <>
    <table>
                    <thead>
                        <th className="id">ID</th>
                        <th className="lenguaje">Nombre</th>
                        <th className="tipo">Tipo</th>
                        <th className="descripcion">Descripcion</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript</td>
                            <td>Interpretado</td>
                            <td>Utilizado principalmente para crear aplicaciones web interactivas y dinámicas en el navegador
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Python</td>
                            <td>Alto nivel</td>
                            <td>Lenguaje de propósito general conocido por su legibilidad y simplicidad. Utilizado en desarrollo
                                web, ciencia de datos, inteligencia artificial, entre otros.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Java</td>
                            <td>Estricto</td>
                            <td>Lenguaje de programación orientado a objetos utilizado en desarrollo de aplicaiones
                                empresariales, móviles y de servidor.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>C++</td>
                            <td>Compilado</td>
                            <td>Lenguaje de programación de propósito general con capacidades de programación orientada a
                                objetos y de bajo nivel. Utilizado en desarrollo de software de sistemas y aplicaciones con alto
                                rendimiento.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>PHP</td>
                            <td>Semiduro</td>
                            <td>Lenguaje de script del lado del servidor utilizado principalemnte para el desarrollo web y la
                                generación de contenido dinámico en sitios web.</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Ruby</td>
                            <td>Alto nivel</td>
                            <td>Lenguaje de programación dinámico, conocido por su sintaxis elegante y la facilidad de uso.
                                Popular en el desarrollo web con el framework Ruby on Rails.</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Swift</td>
                            <td>Alto nivel</td>
                            <td>Lenguaje desarrollado por Apple para el desarrollo de aplicaciones en iOS y macOS, conocido por
                                su seguridad y rendimiento.</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Go</td>
                            <td>Compilado</td>
                            <td>Lenguaje de programación desarrollado por Google, conocido por su eficiencia, simplicidad y
                                velocidad. Utilizado en sistemas y servicios de alto rendimiento.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
    </>
  )
}

export default LangTable