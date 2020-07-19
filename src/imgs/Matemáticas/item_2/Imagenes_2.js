import React, { Component } from 'react';
import division_1 from './division_1.png';
import estrella from '../../estrella.png';
import division_2 from './division_2.png';
import unidades_tiempo from './unidades_tiempo.png';
import composicion_descomp from './composicion_descomp.png';
class imagenes_1 extends Component{
    render(){
        return (
           <h1>
            ¡Felicidades por avanzar al tema 2! <br></br>
            <img src={estrella} width="30%" />

            <div class="caja_enunciado" >            
            División
            </div>
            <img src={division_1} width="96%" height= "180px" />
            <img src={division_2} width="96%" height= "180px" />
            
            <div class="caja_enunciado" >            
            Unidades de tiempo
            </div>
            <img src={unidades_tiempo} width="96%" height= "180px" />
          
            <div class="caja_enunciado" >            
            Composición y descomposición de números
            </div>
            <img src={composicion_descomp} width="96%" height= "180px" />
          

            </h1>
        );
    }
}
    

export default imagenes_1;