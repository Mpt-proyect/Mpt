import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import calculadora from'../imgs/Logos_items/Miniaturas_intro/calculadora.png';
import clase from '../imgs/Logos_items/Miniaturas_intro/clase.png';
import mochila from '../imgs/Logos_items/Miniaturas_intro/mochila.png';
import informacion from '../imgs/Logos_items/Miniaturas_intro/pregunta.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:'1.3%',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width:"23.6%",
      height:"100%",
      padding: '10px',

      
    },
  },
}));

export default function Contenido() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper > <img src={informacion} width="20%" height="80px" />   
    <u> <h2> Informaciones </h2> </u>
    <h5> - Números Naturales <br></br>
         - Que es el TEA  <br></br>
         - Indicios de TEA <br></br>
         - Links de ayuda
         
    </h5>

      </Paper>
      <Paper> <img src={clase} width="20%" height="70px" /> 
    <u> <h2> Tema 1 </h2> </u>
    <h5>  - Sumar y restar <br></br>
          - Orden númerico <br></br>
          - Figuras geométricas <br></br>
          - Multiplicación
    </h5>
      </Paper>
      <Paper> <img src={mochila} width="20%" height="70px" /> 
    <u> <h2> Tema 2 </h2> </u>
    <h5> 
         - División <br></br>
         - Unidades de tiempo <br></br>
         - Composición y descomposición de números</h5>
      </Paper>
      <Paper> <img src={calculadora} width="20%" height="70px" /> 
    <u> <h2> Tema 3 </h2> </u>
    <h5> - Área y Perímetro de figuras <br></br>
         - Calcular promedio <br></br>
         - Ecuaciones de primer grado<br></br>
         - Comentarios

    </h5>
      </Paper>
    </div>
  );
}