import React, { Component } from 'react';
import Item_2 from '../Pruebas/Item_2';
import Item_3 from '../Pruebas/Item_3';
import Item_4 from '../Pruebas/Item_4';
import Ejercicios_1 from '../Ejercicios/Ejercicios_1';
import Ejercicios_2 from '../Ejercicios/Ejercicios_2';
import Ejercicios_3 from '../Ejercicios/Ejercicios_3';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
                <br></br>

            <div class="caja_enunciado" >            
            <h1>Comentarios</h1>
            </div><br></br>
            <h3> Muchas Gracias por responder los diversos ejercicios, esperamos haber podido aportar en tu aprendizaje<br></br>
            Supera tus errores y sigue intentandolo, ¡ Nunca te rindas !</h3> <br></br>
                <TextField
                    label="Ingrese su comentario"
                    multiline
                    rowsMax={4}
                    variant="filled"
                    fullWidth      
                />
                <Button variant="contained" color="default">
                     Enviar

                </Button>
        
         </div>  
        );
    }
    
}

export default Items;


