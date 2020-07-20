import React, { Component } from 'react';
import Item_2 from '../Pruebas/Item_2';
import Item_3 from '../Pruebas/Item_3';
import Item_4 from '../Pruebas/Item_4';

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
            <Item_3></Item_3>
            <div class="caja_ejercicio" > 
                <h2>
                Ejercicios
                </h2>
                </div>
            <Item_4></Item_4>
            <div class="caja_ejercicio" > 
                <h2>
                Ejercicios
                </h2>
                </div>
         </div>  
        );
    }
    
}

export default Items;


