import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width:"23.6%",
      height:400,
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper />
      <Paper />
      <Paper />
      <Paper />
    </div>
  );
}