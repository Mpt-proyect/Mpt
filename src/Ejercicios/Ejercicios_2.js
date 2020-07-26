import React, { Component } from 'react';
import Respuesta_roja from '../Respuestas/Respuesta_roja';
import Respuesta_verde from '../Respuestas/Respuesta_verde';
import Respuesta_azul from '../Respuestas/Respuesta_azul';
import pizza from '../imgs/Matemáticas/item_2/pizza.png';

class Ejercicios_2 extends Component{ 
        render(){
            return(
             <div class="caja">
                 <h1>Pregunta 1 </h1>
                 <h5> Si tenemos una pizza como la siguiente<br></br> <br></br>
                 <img src={pizza} width="15%" /> <br></br>
                 Pedro y su hermano tienen 6 pedazos de pizza para repartir entre: <br></br>
                 Pedro, su hermano, su mama y su papa.<br></br>
                 ¿Cuántos pedazos de pizza sobran?
                     <br></br> <br></br>
                6 <Respuesta_roja/>  3 <Respuesta_azul/> 2 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 2</h1>
                <h5> Resolver la siguiente división:<br></br>
                    24 : 6 = <br></br> <br></br>
                 12 <Respuesta_roja/> 4 <Respuesta_verde/> 30 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 3</h1>
                <h5> Cuál es el <u>Resto</u> de la siguiente división: <br></br>
                    5 : 3 = <br></br> 
                    <br></br>
                    2 <Respuesta_verde/> 8 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 4</h1>
                <h5> Resolver la siguiente operación: <br></br>
                    12 : 4 + 5 = <br></br><br></br> 9 <Respuesta_azul/>  10 <Respuesta_roja/> 8 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 5</h1>
                <h5> Resolver la siguiente operación: <br></br>
                    12 : 4 - 2 = <br></br><br></br> 1 <Respuesta_verde/>  3 <Respuesta_roja/> 
                </h5>

                <h1>Pregunta 6</h1>
                <h5> Resuelve el siguiente problema: <br></br>
                    Sí pedro tiene clases de matemáticas a las 6:30 pm y son las 6:05 pm <br></br>
                    ¿Cuántos minutos faltan para que empiece su clase?<br></br> <br></br>
                    15 minutos <Respuesta_roja/> 30 minutos <Respuesta_roja/>  25 minutos <Respuesta_verde/> 
                </h5>
                
                <h1>Pregunta 7</h1>
                <h5> Resuelve el siguiente problema: <br></br>
                    Sí Jessica tiene reunión de trabajo a las 11:00 am y son las 9:45 am <br></br>
                    ¿Cuánto falta para su reunión?<br></br> <br></br>
                    1 hora 15 minutos <Respuesta_verde/> 1 hora 30 minutos <Respuesta_roja/>  1 hora 45 minutos <Respuesta_verde/> 
                </h5>
              
                <h1>Pregunta 8</h1>
                <h5> Cuál es la <u>Descomposición</u> de 16 <br></br>
                     <br></br>
                    1 decena 5 unidad <Respuesta_azul/> 1 decena 6 unidad <Respuesta_verde/>  1 centena 6 decena <Respuesta_roja/>                     
                </h5>
              
                <h1>Pregunta 9</h1>
                <h5> Cuál es la <u>Descomposición</u> de 124 <br></br>
                     <br></br>
                     1 centena 2 decena 4 unidad <Respuesta_verde/> 2 centena 1 decena 5 unidad <Respuesta_roja/> 1 decena 2 unidad <Respuesta_roja/> 
                </h5>

                <h1>Pregunta 10</h1>
                <h5> Cuál es la <u>Descomposición</u> de 317 <br></br>
                     <br></br>
                     2 centena 1 decena 7 unidad <Respuesta_roja/> 7 centena 1 decena 3 unidad <Respuesta_roja/> 3 centena 1 decena 7 unidad <Respuesta_verde/> 
                </h5>
            </div>
            )
        }
}

export default Ejercicios_2;