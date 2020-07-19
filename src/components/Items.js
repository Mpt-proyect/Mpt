
import React, { Component } from 'react';
import Item_2 from '../Pruebas/Item_2';
import Item_3 from '../Pruebas/Item_3';
import Item_4 from '../Pruebas/Item_4';
import Ejercicios_1 from '../imgs/Matemáticas/item_1/Ejercicios_1';



class Items extends Component{
    render(){
        
        return (         
            <div>
            <Item_2></Item_2>
            <Ejercicios_1></Ejercicios_1>
            <Item_3></Item_3>
            <Item_4></Item_4>
         </div>  
        );
    }
    
}

export default Items;


