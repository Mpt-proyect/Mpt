
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Logo_mpt from '../imgs/Logo_mpt.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    Width: '100%',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Buscamos una grata oportunidad de aprendizaje.`;
const message2='Buscamos integrar a los más vulnerables.';
const message3='Buscamos motivar el aprendizaje, Tu puedes!';
const avatarImageStyle={
  width:'auto',
  height:'auto'
};
export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item >
            <Avatar variant="square" img src={Logo_mpt} >MPT</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar variant="square"size="large" img src={Logo_mpt}>MPT</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message2}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar variant="square" img src={Logo_mpt}>MPT</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message3}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}