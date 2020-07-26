import React, { Component } from 'react';
import estrella from '../../estrella.png';
import Promedio from './Promedio.png';
import Calculo_Fig from './Calculo_fig.png';
import Ecuacion_Grado_1 from './Ecuacion_Grado_1.png';
import Ecuacion_Grado_2 from './Ecuacion_Grado_2.png';

class Imagenes_3 extends Component{
    
    render(){
        return (
            
           <h1>
            ¡Felicidades por avanzar al tema 3! <br></br>
            <img src={estrella} width="30%" />  
            <div class="caja_enunciado" >            
            Área y Perímetro de figuras 
            </div>
            <br></br>
            <img src={Calculo_Fig} width="96%" height= "180px" />
            <div class="caja_enunciado" >            
            Calcular promedios
            </div><br></br>
            <img src={Promedio} width="96%" height= "180px" />
            <div class="caja_enunciado" >            
            Ecuaciones primer grado
            </div><br></br>
            <img src={Ecuacion_Grado_1} width="96%" height= "180px" />
            <img src={Ecuacion_Grado_2} width="96%" height= "180px" />

            </h1>
        );
    }
}
    

export default Imagenes_3;