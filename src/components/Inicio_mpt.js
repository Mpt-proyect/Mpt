 import React, { Component } from 'react'
 import numeros_ejemplo from '../imgs/Logos_items/introduccion/numeros_ejemplo_1.png';
 import Item_1 from '../Pruebas/Item_1';
 class Inicio_mpt extends Component{
     render(){
        return (
            
 <body>
          <Item_1></Item_1>

 <div style={{ padding: 20 }}>
        <u><h1 align ='center'> Bienvenid@ a Matemáticas para todos</h1></u>
        <h2> Para comenzar repasaremos los números naturales como se puede ver en la siguiente imagen:</h2>
    <img src={numeros_ejemplo}width="100%" height= "180px" />
        
{/* --------------------------------------------------------------------------------------------------------------------- */}
        <u><h1 align ='center'> Informaciones </h1></u>
        <h4>¿Qué es el TEA?:   </h4>  
       <div class="caja" > <h5>
        TEA son las siglas de "Trastorno del Espectro Autista",
        se definen como una disfunción neurológica crónica con fuerte base genética que desde edades 
        tempranas se manifiesta en una manifestaciones atípicas en la interacción social,
        la comunicación, la dificultad en manejar las emociones generando diversos comportamientos.
        El grado de gravedad, forma y edad de aparición de cada uno de los criterios va a variar de un individuo a otro, 
        definiendo cada una de las categorías diagnósticas. A pesar de las clasificaciones, 
        ninguna persona que presenta un TEA es igual a otro en cuanto a características observables.
        </h5>   </div>
        <u><h3>Algunos indicios: </h3></u>
        < div class= "caja"><h5>
        - Interacción social y comunicación verbal y no-verbal alteradas <br></br>
        - Restricción de intereses y comportamientos estereotipados y repetitivos <br></br>
        - Respuesta inusual a los estímulos <br></br>
        - Repetir palabras o frases una y otra vez <br></br>
        - Habilidades especiales, ya sean psicológicas o Físicas
        </h5></div>
{/* ---------------------------------------------------------------------------------------------------------------------- */}
<u><h1>Links de ayuda</h1></u>
<iframe width="33.3%" height="380" src="https://www.youtube.com/embed/oexd_Dfic_Q"></iframe>
<iframe width="33.3%" height="380" src="https://www.youtube.com/embed/42vjqtleG9E" ></iframe>
<iframe width="33.3%" height="380" src="https://www.youtube.com/embed/YFtEaVw5k1A"></iframe>
<iframe width="33.3%" height="380" src="https://www.youtube.com/embed/F_Hc1aOAYHw" ></iframe>
<iframe width="33.3%" height="380" src="https://www.youtube.com/embed/3BJeYFcx0iU" ></iframe>
<iframe width="33.3%" height="380" src="https://www.youtube.com/embed/_B50eYV44-k" ></iframe>
  </div>
 </body> 
         )
     }
 }
export default Inicio_mpt;
