import React, { Component } from 'react';
import Respuesta_roja from '../Respuestas/Respuesta_roja';
import Respuesta_verde from '../Respuestas/Respuesta_verde';
import Respuesta_azul from '../Respuestas/Respuesta_azul';

class Ejercicios_2 extends Component{ 
        render(){
            return(
             <div class="caja">
                 <h1>Pregunta 1 </h1>
                 <h5> ¿Cómo se escribe el número 7?<br></br>
                Tres <Respuesta_roja/>  Seis <Respuesta_azul/> Siete <Respuesta_verde/>
                </h5>

                <h1>Pregunta 2</h1>
                <h5> Cuál es el número Nueve:<br></br>
                 8 <Respuesta_azul/> 9 <Respuesta_verde/> 15 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 3</h1>
                <h5> Cuál es el resultado de la siguiente suma:
                    1 + 3 = <br></br> 3 <Respuesta_azul/> 4 <Respuesta_verde/> 6 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 4</h1>
                <h5> Cuál es el resultado de la siguiente suma:
                    1 + 3 + 4 = <br></br> 9 <Respuesta_azul/>  18 <Respuesta_roja/> 8 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 5</h1>
                <h5> Cuál es el resultado de la siguiente resta:
                    6 - 2  = <br></br> 3 <Respuesta_azul/>  6 <Respuesta_roja/> 4 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 6</h1>
                <h5> Resuelve el siguiente problema: <br></br>
                    Si Constanza tiene $1000 y quiere comprar un helado de $500<br></br>
                    ¿Cuanto dinero le queda a Constanza? <br></br>
                    $500 <Respuesta_verde/> $450 <Respuesta_azul/>  $1000 <Respuesta_roja/> 
                </h5>
                
              
            </div>
            )
        }
}

export default Ejercicios_2;