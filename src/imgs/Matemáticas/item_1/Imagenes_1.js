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
            
            <u>Como sumar forma figuras:</u> 
            <h4> <br></br><li>Sumar corresponde a la adición de dos o más elementos, números, objetos, entre otros</li></h4>
            <img src={Suma_1} width="96%" height= "180px" />
            
            <u>Forma númerica:            </u>
            <img src={Suma_2} width="96%" height= "180px" />
            <h4> <li>Las suma esta constantemente en nuestro día a día, como cuando compramos cosas.
                Cada vez que compramos algún dulce o pan para la once siempre se suman los precios, como por ejemplo:<br></br>               
                </li></h4>
            <img src={Ejemplo_pan} width="96%" height= "180px" />
            
            <u>Orden númerico de los números:</u>
            <img src={Orden_num} width="96%" height= "180px" />
            
            <u> Unidad, decena, centena:</u>
            <img src={UDC} width="96%" height= "180px" />
            
            <br></br>
            <u>Figuras geométricas:</u>
            <img src={figuras_geo} width="96%" height= "180px" />
            
            <u>Multiplicación:</u>
            <img src={multiplicacion} width="96%" height= "180px" />
          <u>  Tabla de Multiplicación</u>
            
            <img src={tabla_multiplicacion} width="96%" height= "180px" />

            </h1>   
            
        );
    }
}

export default imagenes_1;