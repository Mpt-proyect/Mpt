import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error" id="Alerta_incorrecta">
      <AlertTitle>Te equivocaste esta vez</AlertTitle>
      Intentalo otra vez, No te rindas!
      </Alert>
      <Alert severity="info" id="Alerta_respuesta">
      <AlertTitle>Estas muy cerca!</AlertTitle>
      A la próxima acertaras!</Alert>
      <Alert severity="success" id="Alerta_correcta">
      <AlertTitle>Acertaste!</AlertTitle>
      Felicidades, sigue adelante!</Alert>
    </div>
  );
}