import React from 'react'
import "../index.css"
const Aside = () => {
  return (
    <>
    
        <aside>
                    <h3 className="h3_aside">Programación 2</h3>
                    <p style={{color : "orange",textShadow: "2px 2px 2px black"}}>Los lenguajes de programación son herramientas
                        que permiten a los desarrolladores escribir
                        instrucciones que una computadora puede entender y ejecutar. Estos lenguajes están diseñados para
                        crear programasde software que pueden realizar una amplia variedad de tareas, desde cálculos simples
                        hasta operaciones complejas y manejo de datos.</p>
                   
                    <br />
                    <ol style={{color:"white"}}>
                        <li><strong>Lenguajes de bajo nivel:</strong> Están más cerca del lenguaje máquina y permiten un
                            control más directo sobre el hardware. Ejemplos incluyen el ensamblador y el lenguaje de
                            máquina. Estos lenguajes son muy eficentes, pero también más difíciles de aprender y usar</li>
                        <li><strong>Lenguajes de alto nivel:</strong> Estos lenguajes están diseñados para ser más fáciles
                            de leer y escribir para los humanos, utilizando una sintaxis más cercana al lenguaje natural.
                            Ejemplos induyen Python, Java y C#. Son más abstractos que los lenguajes de bajo nivel, lo que
                            facilita la programación, pero a veces pueden ser menos eficientes en términos de rendimiento.
                        </li>
                        <li><strong>Lenguajes compilados:</strong> Estos lenguajes requieren un proceso de compilación,
                            donde el código fuente se traduce a un lenguaje de máquina antes de ejecutarse. Ejemplos induyen
                            C y C++. La compilación puede mejorar el rendimiento, pero introduce un paso adicional en el
                            desarrollo.</li>
                        <li><strong>Lenguajes interpretados:</strong> Estos lenguajes son ejecutados directamente por un
                            intérprete, sin necesidad de compilación previa. Ejemplos incluyen Python y JavaScript. La
                            interpretación puede hacer que el desarrollo sea más ágil, aunque a menudo puede ser menos
                            eficiente en términos de velocidad de ejecución.</li>
                    </ol>
                </aside>
                
    </>
  )
}

export default Aside