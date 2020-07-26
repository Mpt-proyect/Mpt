import React, { Component } from 'react';
import Respuesta_roja from '../Respuestas/Respuesta_roja';
import Respuesta_verde from '../Respuestas/Respuesta_verde';
import Respuesta_azul from '../Respuestas/Respuesta_azul';
import Ejercicio_Area from '../imgs/Matemáticas/item_3/Ejercicio_Area.png';
import Ejercicio_Area_2 from '../imgs/Matemáticas/item_3/Ejercicio_Area_2.png';
class Ejercicios_3 extends Component{ 
        render(){
            return(
             <div class="caja">
                 <h1>Pregunta 1 </h1>
                 <img src={Ejercicio_Area} width="96%" height= "180px" />
                 <h5> ¿Cuál es el área de la figura A?<br></br><br></br>
                128 <Respuesta_roja/>  99 <Respuesta_roja/> 96 <Respuesta_verde/>
                </h5><br></br>

                <h1>Pregunta 2 </h1>
                 <h5> ¿Cuál es el área de la figura B?<br></br><br></br>
                 36 <Respuesta_verde/> 66 <Respuesta_roja/>  35 <Respuesta_azul/> 
                </h5><br></br>

                <h1>Pregunta 3 </h1>
                 <h5> ¿Cuál es el perímetro de la figura A?<br></br><br></br>
                96 <Respuesta_roja/>  40 <Respuesta_verde/> 41 <Respuesta_azul/>
                </h5><br></br>

                <h1>Pregunta 4 </h1>
                 <h5> ¿Cuál es el perímetro de la figura B?<br></br><br></br>
                24 <Respuesta_verde/>  22 <Respuesta_azul/> 6 <Respuesta_roja/>
                </h5><br></br>

                <h1>Pregunta 5</h1>
                <img src={Ejercicio_Area_2} width="96%" height= "180px" />
                <h5> ¿Cuál es el área de la figura C?<br></br><br></br>
                4 <Respuesta_roja/>  7 <Respuesta_azul/> 8 <Respuesta_verde/>
                </h5><br></br>

                <h1>Pregunta 6</h1>
                <h5> ¿Cuál es el área de la figura D?<br></br><br></br>
                108 <Respuesta_roja/> 40 <Respuesta_verde/> 18 <Respuesta_roja/> 
                </h5><br></br>

                <h1>Pregunta 7</h1>
                <h5> ¿Cuál es el área de la figura E?<br></br><br></br>
                78.53 <Respuesta_verde/>  25 <Respuesta_roja/> 15.14 <Respuesta_roja/>
                </h5><br></br>

                <h1>Pregunta 7</h1>
                <h5> ¿Cuál es el perímetro de la figura C?<br></br><br></br>
                8 <Respuesta_roja/>  4 <Respuesta_verde/> 16 <Respuesta_verde/>
                </h5><br></br>

                <h1>Pregunta 8</h1>
                <h5> ¿Cuál es el perímetro de la figura D?<br></br><br></br>
                18 <Respuesta_roja/>  10 <Respuesta_roja/> 30 <Respuesta_verde/>
                </h5><br></br>

                <h1>Pregunta 9</h1>
                <h5> ¿Cuál es el perímetro de la figura E?<br></br><br></br>
                31.41 <Respuesta_verde/>  10 <Respuesta_roja/> 5 <Respuesta_roja/>
                </h5><br></br>
                    
                <h1>Pregunta 10</h1>
                <h5> Resuelve el siguiente problema: <br></br><br></br>
                    Si en mi curso la edades de todos son:<br></br>
                    10,9,9,11,10,9,10,11,12,9 <br></br>
                    ¿Cuál es el promedio de edades de mi curso?<br></br><br></br>
                    10 <Respuesta_verde/> 9 <Respuesta_azul/>  12 <Respuesta_roja/> 
                </h5><br></br>
                
                <h1>Pregunta 11</h1>
                <h5> Resuelve el siguiente problema: <br></br><br></br>
                    Si Cristobal tiene las siguientes notas:<br></br>
                    5.5, 6.0, 3.0, 4.0, 4.5<br></br>
                    ¿Cuál es su promedio? <br></br><br></br>
                    5.0 <Respuesta_roja/> 4.6 <Respuesta_verde/>  4.0 <Respuesta_roja/> 
                </h5><br></br>

                <h1>Pregunta 12</h1>
                <h5> Resuelve la siguiente ecuación: <br></br><br></br>
                     x - 3 + 2 = 0<br></br>
                     ¿Cuál es el valor de x? <br></br><br></br>                                      
                   1 <Respuesta_verde/> 2 <Respuesta_azul/>  3 <Respuesta_roja/> 
                </h5><br></br>

                <h1>Pregunta 13</h1>
                <h5> Resuelve la siguiente ecuación: <br></br><br></br>
                    2y - 4 = 2<br></br>
                    ¿Cuál es el valor de y? <br></br><br></br>                                      
                    4 <Respuesta_roja/> 2 <Respuesta_azul/>  3 <Respuesta_verde/> 
                </h5><br></br>
                
                <h1>Pregunta 14</h1>
                <h5> Resuelve la siguiente ecuación: <br></br><br></br>
                    x/2 - 4 = 4 <br></br>
                    ¿Cuál es el valor de x? <br></br><br></br>                                      
                    16 <Respuesta_verde/> 8 <Respuesta_roja/>  4 <Respuesta_roja/> 
                </h5><br></br>

                <h1>Pregunta 15</h1>
                <h5> Resuelve la siguiente ecuación: <br></br><br></br>
                    2y - 3 = 10 - 3 + 4 <br></br>
                    ¿Cuál es el valor de y? <br></br><br></br>                                      
                    10 <Respuesta_roja/> 7 <Respuesta_verde/>  3 <Respuesta_roja/> 2 <Respuesta_roja/> 
                </h5><br></br>

            </div>
            )
        }
}

export default Ejercicios_3;