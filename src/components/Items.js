import React, { Component } from 'react';
import Item_2 from '../Pruebas/Item_2';
import Item_3 from '../Pruebas/Item_3';
import Item_4 from '../Pruebas/Item_4';
import Ejercicios_1 from '../Ejercicios/Ejercicios_1';
import Ejercicios_2 from '../Ejercicios/Ejercicios_2';
import Ejercicios_3 from '../Ejercicios/Ejercicios_3';

class Items extends Component{
    render(){
        
        return (         
            <div>
            <Item_2></Item_2>
            <div class="caja_ejercicio" > 
                <h2>
                Ejercicios
                </h2>
                </div>
                <Ejercicios_1></Ejercicios_1> 
            <Item_3></Item_3>
            <div class="caja_ejercicio" > 
                <h2>
                Ejercicios
                </h2>
                </div>
                <Ejercicios_2></Ejercicios_2> 
            <Item_4></Item_4>
            <div class="caja_ejercicio" > 
                <h2>
                Ejercicios
                </h2>
                </div>
                <Ejercicios_3></Ejercicios_3> 
         </div>  
        );
    }
    
}

export default Items;


