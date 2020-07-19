import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Imagenes_2 from '../imgs/Matemáticas/item_2/Imagenes_2';

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
      Tema 2: Operatoria Básica
     </Paper>
     <Imagenes_2></Imagenes_2>
     </h1>
    </div>
  );
}