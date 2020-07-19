import React, { Component } from 'react';
import Contar_nubes from './Contar_nubes.png'
import Suma_1 from './Suma_1.png';
import Suma_2 from './Suma_2.png';
import Orden_num from './Orden_num.png';
import UDC from './UDC.png';
import figuras_geo from './figuras_geo.png';
import Ejemplo_pan from './Ejemplo_pan.png';
import multiplicacion from './multiplicacion.png';
import tabla_multiplicacion from './tabla_multiplicacion.png';

class imagenes_1 extends Component{
    render(){
        return (
            <h1> 
            <img src={Contar_nubes} width="96%" height= "180px" />
            <div class="caja_enunciado" > 
            <u>Como sumar forma figuras:</u> 
            </div>
            <h4> <br></br><li>Sumar corresponde a la adición de dos o más elementos, números, objetos, entre otros</li></h4>
            <img src={Suma_1} width="96%" height= "180px" />
            
            <div class="caja_enunciado" > 
            <u>Forma númerica: </u>
            </div>
            <img src={Suma_2} width="96%" height= "180px" />
            <h4> <li>Las suma esta constantemente en nuestro día a día, como cuando compramos cosas.
                Cada vez que compramos algún dulce o pan para la once siempre se suman los precios, como por ejemplo:<br></br>               
                </li></h4>
            <img src={Ejemplo_pan} width="96%" height= "180px" />
            
            <div class="caja_enunciado" > 
            <u>Orden númerico de los números:</u>
            </div>
            <img src={Orden_num} width="96%" height= "180px" />
            
            <div class="caja_enunciado" > 
            <u> Unidad, decena, centena:</u>
            </div>
            <img src={UDC} width="96%" height= "180px" />
            
            <br></br>
            <div class="caja_enunciado" > 
            <u>Figuras geométricas:</u>
            </div>
            <img src={figuras_geo} width="96%" height= "180px" />
            
            <div class="caja_enunciado" > 
            <u>Multiplicación:</u>
            </div>
            <img src={multiplicacion} width="96%" height= "180px" />
         
            <div class="caja_enunciado" > 
            <u>  Tabla de Multiplicación</u>
            </div>
            <img src={tabla_multiplicacion} width="96%" height= "180px" />

            </h1>   
            
        );
    }
}

export default imagenes_1;