import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Contar_nubes from '../imgs/Matemáticas/item_1/Imagenes_1';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      padding: 15
      
    },
    
  },
}));

export default function Item_1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>
      <Paper>
        Tema 1: Matemática Básica
     </Paper > 
     
     </h1>
     <h2>
       Para comenzar recordaremos como contar números u objetos, como se verá en este ejemplo.
       <Contar_nubes></Contar_nubes>

        </h2>
    </div>
  );
}