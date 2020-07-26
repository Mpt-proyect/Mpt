import React, { Component } from 'react';
import Respuesta_roja from '../Respuestas/Respuesta_roja';
import Respuesta_verde from '../Respuestas/Respuesta_verde';
import Respuesta_azul from '../Respuestas/Respuesta_azul';
import Figuras_ejercicio from '../imgs/Matemáticas/item_1/Figuras_ejercicio.png';

class Ejercicios_1 extends Component{ 
        render(){
            return(
             <div class="caja">
                 <h1>Pregunta 1 </h1>
                 <h5> ¿Cómo se escribe el número 7?<br></br><br></br>
                Tres <Respuesta_roja/>  Seis <Respuesta_azul/> Siete <Respuesta_verde/>
                </h5>

                <h1>Pregunta 2</h1>
                <h5> Cuál es el número Nueve:<br></br><br></br>
                 8 <Respuesta_azul/> 9 <Respuesta_verde/> 15 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 3</h1>
                <h5> Cuál es el resultado de la siguiente suma:
                    1 + 3 = <br></br><br></br> 3 <Respuesta_azul/> 4 <Respuesta_verde/> 6 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 4</h1>
                <h5> Cuál es el resultado de la siguiente suma:
                    1 + 3 + 4 = <br></br><br></br> 9 <Respuesta_azul/>  18 <Respuesta_roja/> 8 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 5</h1>
                <h5> Cuál es el resultado de la siguiente resta:
                    6 - 2  = <br></br><br></br> 3 <Respuesta_azul/>  6 <Respuesta_roja/> 4 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 6</h1>
                <h5> Resuelve el siguiente problema: <br></br>
                    Si Constanza tiene $1000 y quiere comprar un helado de $500<br></br>
                    ¿Cuanto dinero le queda a Constanza? <br></br><br></br>
                    $500 <Respuesta_verde/> $450 <Respuesta_azul/>  $1000 <Respuesta_roja/> 
                </h5>
                
                <h1>Pregunta 7</h1>
                <h5> Cuál es la <u>Unidad</u> de 14 <br></br> <br></br>
                1 <Respuesta_roja/> 4 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 8</h1>
                <h5> Cuál es la <u>Decena</u> de 34 <br></br> <br></br>
                 3 <Respuesta_verde/>  4 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 9</h1>
                <h5> Cuál es la <u>Centena</u> de 120<br></br> <br></br>
                2 <Respuesta_azul/>  0 <Respuesta_roja/> 1 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 10</h1>
                <h5> Cuál es el <u>Sucesor</u> de 5<br></br> <br></br>
                 4 <Respuesta_roja/> 6 <Respuesta_verde/>
                </h5>
              
                <h1>Pregunta 11</h1>
                <h5> Cuál es el <u>Antecesor</u> de 10<br></br> <br></br>
                 9 <Respuesta_verde/> 11 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 12</h1>
                <h5> De las siguientes figuras <br></br> 
                <img src={Figuras_ejercicio}width="80%" height="100%"/><br></br>
                ¿Cuál corresponde a un cuadrado? <br></br><br></br>
                2 <Respuesta_verde/> 1 <Respuesta_roja/> 3 <Respuesta_roja/> 4 <Respuesta_roja/>
                </h5>

                {/* 1: triangulo 2: cuadrado 3: rectangulo 4: circulo */}
                <h1>Pregunta 13</h1>
                <h5> De las figuras anteriores ¿Cuál corresponde a un triángulo?<br></br> <br></br>
                3 <Respuesta_roja/> 1 <Respuesta_verde/> 2 <Respuesta_roja/> 4 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 14</h1>
                <h5> De las figuras anteriores ¿Cuál corresponde a un rectángulo?<br></br> <br></br>

                 1 <Respuesta_roja/> 3 <Respuesta_verde/> 4 <Respuesta_roja/> 2 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 15</h1>
                <h5> De las figuras anteriores ¿Cuál corresponde a un círculo?<br></br> <br></br>

                3 <Respuesta_roja/> 1 <Respuesta_roja/> 2 <Respuesta_roja/> 4 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 16</h1>
                <h5> Resolver la siguiente multiplicación: 
                    <br></br> 
                    3 x 4 =                     <br></br><br></br>

                 9 <Respuesta_roja/> 11 <Respuesta_azul/> 12 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 17</h1>
                <h5> Resolver la siguiente multiplicación: 
                    <br></br> 
                    6 x 5 =                     <br></br><br></br>
                30 <Respuesta_verde/>    11 <Respuesta_roja/> 20 <Respuesta_roja/> 
                </h5>

                <h1>Pregunta 18</h1>
                <h5> Resolver la siguiente operación: 
                    <br></br> 
                   10 x 2 + 5 =                     <br></br>
                   <u> Pista: recuerda que primero se resuelven las multiplicaciones y luego las sumas </u> <br></br>
                   <br></br>
                 20 <Respuesta_roja/> 17 <Respuesta_roja/> 25 <Respuesta_verde/>
                </h5>

                <h1>Pregunta 19</h1>
                <h5>  Resolver la siguiente operación: 
                    <br></br> 
                   6 x 4 + 8 + 3 =                     <br></br><br></br>
                 24 <Respuesta_roja/> 35 <Respuesta_verde/> 21 <Respuesta_roja/>
                </h5>

                <h1>Pregunta 20</h1>
                <h5>  Resolver la siguiente operación: 
                    <br></br> 
                   5 x 3 - 6  =                     <br></br><br></br>
                 15 <Respuesta_roja/> 8 <Respuesta_azul/> 9 <Respuesta_verde/>
                </h5>
            </div>
            )
        }
}

export default Ejercicios_1;